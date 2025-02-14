import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses"

const ses = new SESClient({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

export async function sendEmail(to: string, subject: string, text: string, html: string) {
  const params = {
    Source: process.env.VERIFIED_EMAIL_SENDER,
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Subject: {
        Data: subject,
      },
      Body: {
        Text: {
          Data: text,
        },
        Html: {
          Data: html,
        },
      },
    },
  }

  try {
    const command = new SendEmailCommand(params)
    const result = await ses.send(command)
    console.log("Email sent successfully:", result.MessageId)
    return result
  } catch (error) {
    console.error("Failed to send email:", error)
    throw error
  }
}
