import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

export const mailTransporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS
  }
});