import { Resend } from "resend";
import config from "../config/config.js";

const resend = new Resend(config.emailApiKey);

async function sendEmail(
  recipient: string,
  { subject, body }: { subject: string; body: string }
) {
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: [recipient],
    subject,
    html: body,
  });

  if (error) throw error;

  return data;
}

export default sendEmail;
