import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const destinations = [
  { name: "Delhi", subtitle: "The Heart of India", duration: "2 Nights / 3 Days", imageKey: "delhi" },
  { name: "Agra", subtitle: "Home of Taj Mahal", duration: "1 Night / 2 Days", imageKey: "agra" },
  { name: "Jaipur", subtitle: "The Pink City", duration: "2 Nights / 3 Days", imageKey: "jaipur" },
  { name: "Jodhpur", subtitle: "The Blue City", duration: "2 Nights / 3 Days", imageKey: "jodhpur" },
  { name: "Udaipur", subtitle: "City of Lakes", duration: "2 Nights / 3 Days", imageKey: "udaipur" },
  { name: "Jaisalmer", subtitle: "Golden City", duration: "2 Nights / 3 Days", imageKey: "jaisalmer" },
];

const packages = [
  { name: "Golden Triangle Tour", places: "Delhi - Agra - Jaipur", duration: "6 Days / 5 Nights", feature: "Automobile", imageKey: "goldenTriangle", popular: true },
  { name: "Royal Rajasthan Tour", places: "Jaipur - Jodhpur - Jaisalmer - Udaipur", duration: "8 Days / 7 Nights", feature: "Customisable", imageKey: "royalRajasthan" },
  { name: "Luxury Rajasthan Tour", places: "Jaipur - Udaipur - Jodhpur - Jaisalmer", duration: "10 Days / 9 Nights", feature: "Luxury Hotels", imageKey: "luxuaryRajasthan" },
  { name: "Desert Safari Tour", places: "Jaisalmer - Bikaner - Camel Safari", duration: "6 Days / 5 Nights", feature: "Adventure", imageKey: "desertSafari" },
];

const adminEmail = process.env.ADMIN_EMAIL || "Ondespositiveindiavacation.in@gmail.com";
const senderEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
const isProduction = process.env.NODE_ENV === "production" || Boolean(process.env.RENDER_SERVICE_ID) || Boolean(process.env.VERCEL);
const smtpTransporter = !isProduction && process.env.SMTP_USER && process.env.SMTP_PASS
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE !== "false",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  : null;

async function sendEmail({ to, replyTo, subject, text }) {
  if (!process.env.RESEND_API_KEY && !smtpTransporter) {
    throw new Error("Production email is not configured. Set RESEND_API_KEY and RESEND_FROM_EMAIL.");
  }

  if (!process.env.RESEND_API_KEY) {
    await smtpTransporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      replyTo,
      subject,
      text,
    });
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: senderEmail,
      to: [to],
      reply_to: replyTo,
      subject,
      text,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Email provider rejected the request (${response.status}): ${details}`);
  }
}

app.get("/", (req, res) => {
  res.send("Ondes Positive India Vacation API is running...");
});

app.get("/api/content", (req, res) => {
  res.json({ destinations, packages });
});

app.post("/api/enquiries", async (req, res) => {
  const { name, email, phone, tour, date, travelers } = req.body;

  if (!name || !email || !phone || !tour || !date || !travelers) {
    return res.status(400).json({ message: "All enquiry fields are required." });
  }

  try {
    const enquiryDetails = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Phone: ${phone.trim()}`,
      `Tour: ${tour}`,
      `Travel date: ${date}`,
      `Travellers: ${travelers}`,
    ].join("\n");

    await sendEmail({
      to: adminEmail,
      replyTo: email.trim(),
      subject: `New tour enquiry from ${name.trim()}`,
      text: enquiryDetails,
    });

    try {
      await sendEmail({
        to: email.trim(),
        replyTo: adminEmail,
        subject: "We received your India vacation enquiry",
        text: `Hello ${name.trim()},\n\nThank you for contacting Ondes Positive India Vacation. We received your enquiry with these details:\n\n${enquiryDetails}\n\nOur travel team will contact you shortly.`,
      });
    } catch (error) {
      console.error("Customer confirmation email failed:", error.message);
    }

    return res.status(201).json({ message: "Enquiry sent successfully." });
  } catch (error) {
    console.error("Enquiry processing failed:", error.message);
    const message = isProduction && !process.env.RESEND_API_KEY
      ? "Email is not configured on the server yet. Please contact us by WhatsApp or phone."
      : "Our email service is temporarily unavailable. Please contact us by WhatsApp or phone.";
    return res.status(503).json({ message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});