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

function fieldLabelStyle() {
  return {
    color: "#6b7280",
    fontSize: "13px",
    margin: "0 0 4px",
  };
}

function fieldValueStyle() {
  return {
    color: "#111827",
    fontSize: "15px",
    margin: 0,
  };
}

function ContactLeadNotificationEmail(props= {} ) {
  const { name="John Doe", email="ex@gmail.com", phone="8217937921", contatto="Email", message="Ciao, vorrei un preventivo per un sito vetrina." } = props;

  return React.createElement(
    Html,
    null,
    React.createElement(Head),
    React.createElement(Preview, null, `Nuova richiesta contatto da ${name}`),
    React.createElement(
      Body,
      { style: { backgroundColor: "#f5f7fb", fontFamily: "Arial, sans-serif", margin: 0, padding: "24px 0" } },
      React.createElement(
        Container,
        { style: { backgroundColor: "#ffffff", borderRadius: "10px", margin: "0 auto", maxWidth: "620px", padding: "28px" } },
        React.createElement(Heading, { as: "h2", style: { color: "#111827", fontSize: "22px", margin: "0 0 18px" } }, "Nuova richiesta dal form contatti"),
        React.createElement(
          Section,
          { style: { backgroundColor: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "16px" } },
          React.createElement(Text, { style: fieldLabelStyle() }, "Nome"),
          React.createElement(Text, { style: fieldValueStyle() }, name),
          React.createElement(Hr, { style: { borderColor: "#e5e7eb", margin: "14px 0" } }),
          React.createElement(Text, { style: fieldLabelStyle() }, "Email"),
          React.createElement(Text, { style: fieldValueStyle() }, email),
          React.createElement(Hr, { style: { borderColor: "#e5e7eb", margin: "14px 0" } }),
          React.createElement(Text, { style: fieldLabelStyle() }, "Telefono"),
          React.createElement(Text, { style: fieldValueStyle() }, phone),
          React.createElement(Hr, { style: { borderColor: "#e5e7eb", margin: "14px 0" } }),
          React.createElement(Text, { style: fieldLabelStyle() }, "Preferenza contatto"),
          React.createElement(Text, { style: fieldValueStyle() }, contatto),
          React.createElement(Hr, { style: { borderColor: "#e5e7eb", margin: "14px 0" } }),
          React.createElement(Text, { style: fieldLabelStyle() }, "Messaggio"),
          React.createElement(Text, { style: { ...fieldValueStyle(), whiteSpace: "pre-line" } }, message)
        )
      )
    )
  );
}

module.exports = ContactLeadNotificationEmail;
