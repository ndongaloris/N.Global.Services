// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") return res.status(405).end();

    const {
        firstName,
        lastName,
        email,
        phone,
        company,
        projectType,
        budget,
        timeline,
        interest,
        experience,
        language,
        level,
        schedule,
        message, // 👈 here
    } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS, // App password, not your normal Gmail password
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.GMAIL_USER,
            subject: `New form submission from ${firstName} ${lastName}`,
            text: `
    Name: ${firstName} ${lastName}
    Email: ${email}
    Phone: ${phone}
    Company: ${company || "N/A"}

    --- Details ---
    Project Type: ${projectType || "N/A"}
    Budget: ${budget || "N/A"}
    Timeline: ${timeline || "N/A"}
    Interest: ${interest || "N/A"}
    Experience: ${experience || "N/A"}
    Language: ${language || "N/A"}
    Level: ${level || "N/A"}
    Schedule: ${schedule || "N/A"}

    --- Message ---
    ${message}
  `,
        });

        res.status(200).json({ success: true });
    } catch (err: any) {
        res.status(500).json({ success: false, error: err.message });
    }
}
