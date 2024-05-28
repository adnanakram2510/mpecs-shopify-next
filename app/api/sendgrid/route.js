import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req, res) {
  const body = await req.json();
  if (body.message.length <= 0)
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  if (body.email.length <= 0)
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  if (body.fullname.length < 0)
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  try {
    const result = await sendgrid.send({
      to: 'adn0n.akr@gmail.com', // receiver email
      from: 'adnan.akram2510@gmail.com', //  website email address
      subject: `[Contact Form] : ${body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>MPECS Contact Form</title>
        <meta name="description" content="uso">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${body.fullname}, their email is: ✉️${body.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${body.message}</p>
              <br>
              </div>
              </div>
      </body>
      </html>`
    });
    console.log(result);
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
  return new Response(JSON.stringify('Sent mail!'), { status: 200 });
}
