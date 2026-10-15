import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { Resend } from "resend";

dotenv.config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(bodyParser.json());

app.post("/contact", async (req, res) => {
  console.log("📩 Contact form received");

  const { name, email, message } = req.body;

  console.log("Contact from:", name, email);
  console.log("RESEND_API_KEY present:", Boolean(process.env.RESEND_API_KEY));

  if (!name || !email || !message) {
    console.log("❌ Missing contact form fields");

    return res.status(400).json({
      success: false,
      error: "Missing fields",
    });
  }

  try {
    console.log("Attempting to send email with Resend...");

    const { data, error } = await resend.emails.send({
      from: "MMC Website <website@mmcprintpackaging.com>",
      to: ["matt@mmcprintpackaging.com"],
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
