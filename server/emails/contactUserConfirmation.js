const React = require("react");
const {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} = require("@react-email/components");

function ContactUserConfirmationEmail(props = {}) {
  const { name = "John Doe", message="Ciao, vorrei un preventivo per un sito vetrina." } = props;

  return React.createElement(
    Html,
    null,
    React.createElement(Head),
    React.createElement(Preview, null, "Abbiamo ricevuto la tua richiesta"),
    React.createElement(
      Body,
      { style: { backgroundColor: "#f5f7fb", fontFamily: "Arial, sans-serif", margin: 0, padding: "24px 0" } },
      React.createElement(
        Container,
        { style: { backgroundColor: "#ffffff", borderRadius: "10px", margin: "0 auto", maxWidth: "620px", padding: "28px" } },
        React.createElement(Heading, { as: "h2", style: { color: "#111827", fontSize: "22px", margin: "0 0 18px" } }, "Abbiamo ricevuto il tuo messaggio"),
        React.createElement(Text, { style: { color: "#111827", fontSize: "15px", margin: "0 0 14px" } }, `Ciao ${name},`),
        React.createElement(
          Text,
          { style: { color: "#374151", fontSize: "15px", lineHeight: "1.6", margin: "0 0 14px" } },
          "grazie per averci contattato. La tua richiesta e' stata ricevuta correttamente e ti risponderemo il prima possibile."
        ),
        React.createElement(
          Section,
          { style: { backgroundColor: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "16px", margin: "16px 0" } },
          React.createElement(Text, { style: { color: "#6b7280", fontSize: "13px", margin: "0 0 6px" } }, "Riepilogo del messaggio"),
          React.createElement(Text, { style: { color: "#111827", fontSize: "15px", margin: 0, whiteSpace: "pre-line" } }, message)
        ),
        React.createElement(
          Text,
          { style: { color: "#374151", fontSize: "15px", lineHeight: "1.6", margin: "0 0 12px" } },
          "Se hai inserito dati errati o vuoi aggiungere altre informazioni, rispondi direttamente a questa email."
        ),
        React.createElement(Hr, { style: { borderColor: "#e5e7eb", margin: "22px 0" } }),
        React.createElement(Text, { style: { color: "#6b7280", fontSize: "13px", margin: 0 } }, "Coffeeware"),
        React.createElement(Text, { style: { color: "#6b7280", fontSize: "13px", margin: "4px 0 0" } }, "Web & Software Development"),
        React.createElement(Text, { style: { color: "#6b7280", fontSize: "13px", margin: "4px 0 0" } }, "Email: coffeeware.web@gmail.com")
      )
    )
  );
}

module.exports = ContactUserConfirmationEmail;
