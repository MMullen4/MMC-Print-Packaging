import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { Resend } from "resend";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();

// Helps express-rate-limit identify the visitor's IP
app.set("trust proxy", 1);

const resend = new Resend(process.env.RESEND_API_KEY);

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
});

app.use(cors());
app.use(bodyParser.json());

app.post("/contact", contactLimiter, async (req, res) => {
  console.log("📩 Contact form received");

  const { name, email, message, website } = req.body;

  // --------------------------------------------------
  // HONEYPOT
  // Bots often fill this hidden field.
  // Return success, but DO NOT send an email.
  // --------------------------------------------------

  if (typeof website === "string" && website.trim() !== "") {
    console.log("🤖 Honeypot triggered - likely a bot");

    // Pretend the submission succeeded
    return res.status(200).json({
      success: true,
    });
  }

  // --------------------------------------------------
  // REQUIRED FIELDS + TYPE VALIDATION
  // --------------------------------------------------

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    console.log("❌ Invalid or missing contact form fields");

    return res.status(400).json({
      success: false,
      error: "Invalid or missing fields",
    });
  }

  // --------------------------------------------------
  // EMAIL VALIDATION
  // --------------------------------------------------

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    console.log("❌ Invalid email address");

    return res.status(400).json({
      success: false,
      error: "Invalid email address",
    });
  }

  // --------------------------------------------------
  // MESSAGE VALIDATION
  // --------------------------------------------------

  if (message.trim().length < 10 || message.length > 5000) {
    console.log("❌ Invalid message length");

    return res.status(400).json({
      success: false,
      error: "Invalid message",
    });
  }

  console.log("Contact from:", name, email);

  console.log("RESEND_API_KEY present:", Boolean(process.env.RESEND_API_KEY));

  // --------------------------------------------------
  // SEND EMAIL
  // --------------------------------------------------

  try {
    console.log("Attempting to send email with Resend...");

    const { data, error } = await resend.emails.send({
      from: "MMC Website <website@mmcprintpackaging.com>",
      to: ["matt@mmcprintpackaging.com"],
      reply_to: email,
      subject: `MMC Website Contact from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    if (error) {
      console.error("❌ Resend error:", error);

      return res.status(400).json({
        success: false,
        error: error.message,
      });
    }

    console.log("✅ Email sent successfully:", data);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
      id: data?.id,
    });
  } catch (err) {
    console.error("❌ Contact route exception:", err);

    return res.status(500).json({
      success: false,
      error: "Failed to send email",
    });
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
