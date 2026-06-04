#!/usr/bin/env node

/**
 * Script de reminders automáticos para Vigilia
 * Envía mensajes por WhatsApp en las fechas/horas programadas
 * 
 * Requisitos:
 * - npm install axios
 * - Variable de entorno: WHATSAPP_API_KEY (de Twilio o similar)
 */

const https = require('https');
const http = require('http');

// Configuración
const PHONE_NUMBER = '+573124996139'; // Pau
const REMINDERS = [
  {
    date: '2026-05-27',
    time: '09:00',
    message: '🚀 ¡Comienza la ejecución Vigilia! 4 semanas para el lanzamiento.\n\nChecklist:\n✓ Confirmar La Dacha\n✓ Lista de invitados\n✓ Catering\n\nRevisa: alltura-vigilia.github.io'
  },
  {
    date: '2026-06-22',
    time: '09:00',
    message: '⏰ 3 DÍAS para el evento Vigilia!\n\nÚltimos detalles:\n✓ Reminders a invitados\n✓ Empacar racks\n✓ Confirmar catering\n\nTodo en marcha 💪'
  },
  {
    date: '2026-06-24',
    time: '09:00',
    message: '🔴 MAÑANA es Vigilia!\n\nHOY:\n14:00-17:00 → Montaje completo\nTest: luz, TV, Shopify, wifi\nEntrenamiento de equipo\nChampaña en copas\n\n¡Vamos con todo!'
  },
  {
    date: '2026-06-25',
    time: '18:00',
    message: '⏰ FALTA 1 HORA para Vigilia!\n\n📍 La Dacha Librería\nCra 4A# 66-19\n\nEquipo en punto.\n19:00 → EVENTO EN VIVO\n\n🚀 Vamos!'
  }
];

// Función para enviar mensaje por WhatsApp (usando Twilio)
async function sendWhatsAppMessage(phoneNumber, message) {
  const apiKey = process.env.TWILIO_AUTH_TOKEN;
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const twilioNumber = process.env.TWILIO_WHATSAPP_NUMBER || 'whatsapp:+14155238886'; // Twilio sandbox

  if (!apiKey || !accountSid) {
    console.warn('⚠️ Variables de Twilio no configuradas. Para activar reminders:');
    console.warn('   1. Crear cuenta en twilio.com');
    console.warn('   2. Obtener TWILIO_ACCOUNT_SID y TWILIO_AUTH_TOKEN');
    console.warn('   3. Agregar secretos en GitHub Settings → Secrets');
    console.log('\n📝 Simulando envío a:', phoneNumber);
    console.log('📤 Mensaje:', message);
    return false;
  }

  const auth = Buffer.from(`${accountSid}:${apiKey}`).toString('base64');
  const postData = new URLSearchParams();
  postData.append('From', twilioNumber);
  postData.append('To', `whatsapp:${phoneNumber}`);
  postData.append('Body', message);

  return new Promise((resolve) => {
    const options = {
      hostname: 'api.twilio.com',
      port: 443,
      path: `/2010-04-01/Accounts/${accountSid}/Messages.json`,
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode === 201) {
          console.log('✅ Mensaje enviado:', phoneNumber);
          resolve(true);
        } else {
          console.error('❌ Error enviando mensaje:', res.statusCode, data);
          resolve(false);
        }
      });
    });

    req.on('error', (e) => {
      console.error('❌ Error de conexión:', e.message);
      resolve(false);
    });

    req.write(postData.toString());
    req.end();
  });
}

// Función para verificar si es hora de enviar un reminder
function shouldSendReminder(reminder) {
  const now = new Date();
  const [year, month, day] = reminder.date.split('-');
  const [hours, minutes] = reminder.time.split(':');

  const reminderDate = new Date(year, parseInt(month) - 1, day, hours, minutes, 0);
  const timeDiff = Math.abs(now - reminderDate);
  const minutesDiff = timeDiff / (1000 * 60);

  // Enviar si estamos dentro de 5 minutos de la hora
  return minutesDiff <= 5;
}

// Función principal
async function checkAndSendReminders() {
  console.log('📋 Verificando reminders a las', new Date().toLocaleTimeString('es-CO'));

  for (const reminder of REMINDERS) {
    if (shouldSendReminder(reminder)) {
      console.log(`\n🔔 Enviando reminder para ${reminder.date} ${reminder.time}`);
      await sendWhatsAppMessage(PHONE_NUMBER, reminder.message);
    }
  }
}

// Ejecutar
if (require.main === module) {
  checkAndSendReminders();
}

module.exports = { checkAndSendReminders, sendWhatsAppMessage };
