const nodemailer = require("nodemailer");
const { google } = require("googleapis");

export default function handle(req, res) {
  switch (req.method) {
    case "POST":
      // aca va la funcion que envia el email.
      return goToMessage(req, res);
    default:
      return res.status(400).json({ message: "Este metodo no es valido" });
  }
}

const goToMessage = async (req, res) => {
  const CLIENT_ID =
    "1007429619886-dpl6t1cpmvoch4650aaiem5o960mlfim.apps.googleusercontent.com";
  const CLIENTE_SECRET = "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";
  const REDIRECT_URI = "https://developers.google.com/oauthplayground";
  const REFRESH_TOKEN =
    "1//04idsfNTuWAjICgYIARAAGAQSNwF-L9IrwQNivbXHP9dxcRNQFzFQUJnIMPXDdc8RQO0d5qsuJ0Fvr-XLLIsrEVL9tcuCZzWiaxc";

  const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENTE_SECRET,
    REDIRECT_URI
  );
  oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  try {
    const accessToken = await oauth2Client.getAccessToken();
    const transporte = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "exedevcoding22@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENTE_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: "My Portfolio <exedevcoding22@gmail.com>",
      to: "exedevcoding22@gmail.com",
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
  } catch (error) {
    res.status(400).json(error);
  }
};
