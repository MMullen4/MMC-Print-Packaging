import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function sendEmail(
  name: string,
  email: string,
  message: string
) {
  await transporter.sendMail({
    from: email,
    to: "matt@mmcprintpackaging.com",
    subject: `New Contact Form Submission from ${name}`,
    text: message,
  });
}
