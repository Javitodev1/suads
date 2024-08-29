import { MailService, type MailDataRequired } from '@sendgrid/mail'

const { SENDGRID_API_KEY } = import.meta.env

function handleError(error: any) {
  if (error instanceof Error) {
    console.log(error.message)
  }
}

export async function sendemail(request: Request) {
  if (request.method !== 'POST') return

  const data = await request.formData().catch(handleError)

  const from = 'suads.agency@gmail.com'
  const to = 'suads.agency@gmail.com'
  const subjet = 'test email'
  const text = 'testing sengrid to sent emails'
  const html = `<strong>${text}</strong>`

  const service = new MailService()
  service.setApiKey(SENDGRID_API_KEY)

  const msg = {
    from: from,
    to: to,
    subject: subjet,
    text: text,
    html: html,
  } satisfies MailDataRequired

  // service.send(msg)
  // .then(() => {
  //   console.log('Email sent')
  // })
  // .catch((error) => {
  //   console.error(error)
  // })
}
