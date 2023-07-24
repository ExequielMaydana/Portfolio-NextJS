const nodemailer = require("nodemailer");
const { google } = require("googleapis");

export default function handle(req, res) {
  switch (req.method) {
    case "POST":
      return goToMessage(req, res);
    default:
      return res.status(400).json({ message: "Este metodo no es valido" });
  }
}

const goToMessage = async (req, res) => {

  console.log(req.body);

  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENTE_SECRET,
    process.env.REDIRECT_URI
  );
  oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

  try {
    const accessToken = await oauth2Client.getAccessToken();

    const transporte = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.MY_EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENTE_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: "My Portfolio <exedevcoding22@gmail.com>",
      to: `${process.env.MY_EMAIL}`,
      subject: `${req.body.nombreyapellido}`,
      html: `
      <p><strong>Correo enviado por:</strong> ${req.body.email}</p>
      <p><strong>Mensaje:</strong></p>
      <div style="background-color: #f3f3f3; padding: 10px;">
        ${req.body.message}
      </div>
    `,
    };

    const result = await transporte.sendMail(mailOptions);

    res.status(200).json(result);
    console.log(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
