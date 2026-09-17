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

const mailTransporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  secure: process.env.SMTP_SECURE !== "false",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

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

    await mailTransporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || "Ondespositiveindiavacation.in@gmail.com",
      replyTo: email.trim(),
      subject: `New tour enquiry from ${name.trim()}`,
      text: enquiryDetails,
    });

    await mailTransporter.sendMail({
      from: process.env.SMTP_USER,
      to: email.trim(),
      replyTo: process.env.ADMIN_EMAIL || "Ondespositiveindiavacation.in@gmail.com",
      subject: "We received your India vacation enquiry",
      text: `Hello ${name.trim()},\n\nThank you for contacting Ondes Positive India Vacation. We received your enquiry with these details:\n\n${enquiryDetails}\n\nOur travel team will contact you shortly.`,
    });

    return res.status(201).json({ message: "Enquiry sent successfully." });
  } catch (error) {
    console.error("Enquiry processing failed:", error.message);
    return res.status(500).json({ message: "Unable to process enquiry right now." });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});