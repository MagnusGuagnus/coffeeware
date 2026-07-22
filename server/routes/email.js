const express = require('express');
const { Resend } = require('resend');
const router = express.Router();
require('dotenv').config();
const ContactLeadNotificationEmail = require('../emails/contactLeadNotification');
const ContactUserConfirmationEmail = require('../emails/contactUserConfirmation');

const isProd = process.env.NODE_ENV === 'production';
const resend = new Resend(process.env.RESEND_API_KEY);

router.get('/', (req, res) => {
  res.json({ ok: true, message: 'Email API base route' });
});

router.post('/send', async (req, res) => {
  try {
    const { name, email, phone, contatto, message } = req.body;
    const token = req.body['cf-turnstile-response'];

    if (!name || !email || !phone || !contatto || !message) {
      return res.status(400).json({ ok: false, message: 'Campi obbligatori mancanti' });
    }
    
    if (isProd && !token) {
      return res.status(400).json({ ok: false, message: 'Token Turnstile mancante' });
    }

    const ip = req.ip;
    const formData = new URLSearchParams();
    formData.append('secret', process.env.TURNSTILE_SECRET_KEY);
    formData.append('response', token);
    formData.append('remoteip', ip);

    const cfRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData
    });

    const cfData = await cfRes.json();
    if (isProd && !cfData.success) {
      return res.status(400).json({ ok: false, message: 'Verifica Turnstile fallita' });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || 'coffeeware.web@gmail.com';
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'LeadGen <onboarding@resend.dev>';

    const textToUs = [
      'Nuova richiesta dal form contatti',
      '',
      `Nome: ${name}`,
      `Email: ${email}`,
      `Telefono: ${phone}`,
      `Preferenza contatto: ${contatto}`,
      '',
      'Messaggio:',
      message
    ].join('\n');

    const textToUser = [
      `Ciao ${name},`,
      '',
      'grazie per averci contattato.',
      'La tua richiesta e\' stata ricevuta correttamente e ti risponderemo il prima possibile.',
      '',
      'Riepilogo del messaggio:',
      message,
      '',
      'Coffeeware',
      'coffeeware.web@gmail.com',
    ].join('\n');

    const { data: dataToUs, error: errorToUs } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Nuova richiesta contatto - ${name}`,
      text: textToUs,
      react: ContactLeadNotificationEmail({ name, email, phone, contatto, message }),
    });

    if (errorToUs) {
      console.error(errorToUs);
      return res.status(500).json({ ok: false, message: 'Errore invio email' });
    }

    const { data: dataToUser, error: errorToUser } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: "Abbiamo ricevuto la tua richiesta ✔",
      text: textToUser,
      react: ContactUserConfirmationEmail({ name, message }),
    });

    if (errorToUser) {
      console.error(errorToUser);
      return res.status(500).json({ ok: false, message: 'Errore invio email' });
    }

    return res.json({ ok: true, message: 'Email inviata con successo', id: dataToUser?.id || dataToUs?.id });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, message: 'Errore interno server' });
  }
});

module.exports = router;
