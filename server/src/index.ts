import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { json } from "body-parser";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

app.use(cors());
app.use(json());

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your Gmail app password
      },
    });

    await transporter.sendMail({
      from: `"MMC Contact" <${process.env.EMAIL_USER}>`,
      to: "matt@mmcprintpackaging.com", // your destination email
      subject: `Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    return res
      .status(200)
      .json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error("Email send error:", err);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Express server running at http://localhost:${PORT}`);
});
