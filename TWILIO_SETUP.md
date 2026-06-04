# 🔧 Guía: Configurar Reminders WhatsApp con Twilio

Este documento te guía paso a paso para activar los reminders automáticos por WhatsApp.

---

## **Paso 1: Crear Cuenta Twilio (Gratuita)**

1. **Ve a:** https://www.twilio.com/
2. **Click en "Sign up"**
3. Completa el formulario:
   - Email
   - Contraseña
   - Teléfono (para verificación)
4. **Verifica tu teléfono** (recibirás un código SMS)
5. Selecciona **"Account"** en la pregunta "What will you build?"

---

## **Paso 2: Obtener Credenciales de Twilio**

1. **En tu Dashboard, ve a:** https://console.twilio.com/
2. **Busca "Account SID" y "Auth Token"** en la esquina superior derecha
3. **Cópialo:**
   - `Account SID` = Algo como: `ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   - `Auth Token` = Algo como: `your_token_here_xxxxxxxxxxxx`

4. **Para el número de WhatsApp:**
   - Ve a **"Messaging"** → **"Services"** (en el menú izquierdo)
   - Haz click en **"Create Messaging Service"**
   - Nombre: `Vigilia Alerts`
   - Selecciona **"Messaging"** como caso de uso
   - **Create Service**
   - Copia el número de WhatsApp que aparece (ej: `whatsapp:+1XXXXX`)

---

## **Paso 3: Agregar Secretos a GitHub**

1. **Ve a tu repositorio en GitHub**
2. **Abre:** Settings → Secrets and variables → **Actions**
3. **Click en "New repository secret"** (hazlo 3 veces):

   **Secreto 1:**
   - Nombre: `TWILIO_ACCOUNT_SID`
   - Valor: Tu Account SID (el string largo)
   - Click **"Add secret"**

   **Secreto 2:**
   - Nombre: `TWILIO_AUTH_TOKEN`
   - Valor: Tu Auth Token
   - Click **"Add secret"**

   **Secreto 3:**
   - Nombre: `TWILIO_WHATSAPP_NUMBER`
   - Valor: Tu número de Twilio (ej: `whatsapp:+14155238886`)
   - Click **"Add secret"**

---

## **Paso 4: Permitir tu número en Twilio**

1. Ve a **"Phone Numbers"** en tu dashboard Twilio
2. Si no tienes un número de WhatsApp aún, crea uno:
   - Click en **"Get started"** en WhatsApp
   - Sigue las instrucciones para conectar WhatsApp Business
3. Agrega tu número (`+573124996139`) como **"Trusted Sender"**

---

## **Paso 5: Probar que Funciona**

### **Opción A: Probar desde la app web**

1. Abre la URL de tu app: `https://tu-usuario.github.io/alltura-vigilia-countdown`
2. Ve a la sección **"Opciones"**
3. Haz click en **"Probar reminder WhatsApp"**
4. Debería abrirse WhatsApp con un mensaje de prueba

### **Opción B: Ejecutar manualmente el script**

```bash
# En tu máquina local
cd alltura-vigilia-countdown

# Establece las variables de entorno
export TWILIO_ACCOUNT_SID="tu_account_sid_aqui"
export TWILIO_AUTH_TOKEN="tu_auth_token_aqui"
export TWILIO_WHATSAPP_NUMBER="whatsapp:+14155238886"

# Ejecuta el script
node reminders.js
```

Deberías ver:
```
📋 Verificando reminders...
✅ Mensaje enviado: +573124996139
```

---

## **Paso 6: GitHub Actions se ejecutará automáticamente**

Una vez configurados los secretos:

1. **GitHub Actions** verifica **cada hora** si es momento de enviar un reminder
2. Los reminders se enviarán automáticamente en:
   - 27 mayo @ 09:00
   - 22 junio @ 09:00
   - 24 junio @ 09:00
   - 25 junio @ 18:00

3. **Para ver los logs:**
   - Ve a tu repo → **Actions**
   - Haz click en el último workflow "Vigilia Reminders"
   - Verás si se enviaron los mensajes correctamente

---

## 💰 Costos (Twilio)

- **Plan Gratuito:** $15 USD de crédito
- **Costo por mensaje WhatsApp:** ~$0.05 USD
- **Para Vigilia:** 4 mensajes = ~$0.20 USD

**¡Completamente gratis!** El crédito de prueba cubre todo.

---

## ❓ Solución de Problemas

### **"Message failed with no deliverability status"**
- ¿Verificaste tu número Twilio con WhatsApp Business?
- ¿El número está activo en Twilio?

### **Los secretos no se aplican**
- Asegúrate de estar en la rama `main`
- Espera a que GitHub refresque (2-3 minutos)

### **El workflow no aparece en Actions**
- Revisa que el archivo `.github/workflows/reminders.yml` esté en tu repo
- Haz un push nuevo para activarlo

### **Recibiste el mensaje pero fue tarde**
- Los reminders verifican cada hora exacta
- Si la fecha/hora ya pasó, corre `node reminders.js` manualmente

---

## 🎯 Próximos Pasos

1. ✅ Configuraste Twilio
2. ✅ Agregaste secretos a GitHub
3. ✅ GitHub Actions envía reminders automáticos
4. ✅ Tu equipo recibe recordatorios en WhatsApp
5. ✅ **¡Vigilia se ejecuta sin problemas!**

---

**¿Necesitas ayuda?** Revisa los logs en GitHub Actions o prueba manualmente con `node reminders.js`.

---

*Hecho para que Vigilia sea un éxito 🚀*
