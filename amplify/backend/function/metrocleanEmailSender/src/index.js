const aws = require("aws-sdk");
const ses = new aws.SES();

exports.handler = async (event) => {
  //eslint-disable-line
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === "INSERT") {
      const candidateName = streamedItem.dynamodb.NewImage.name.S;
      const candidateEmail = streamedItem.dynamodb.NewImage.email.S;
      const candidateDescription =
        streamedItem.dynamodb.NewImage.description.S;

      await ses
        .sendEmail({
          Destination: {
            ToAddresses: [process.env.SES_EMAIL],
          },
          Source: process.env.SES_EMAIL,
          Message: {
            Subject: { Data: "Nueva Cotizacion" },
            Body: {
              Text: {
                Data: `Hola me llamo ${candidateName}. ${candidateDescription}. Mi correo es${candidateEmail}`,
              },
            },
          },
        })
        .promise();
    }
  }
  return { status: "done" };
};
