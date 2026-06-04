# 🚀 Guía Rápida: Subir a GitHub

Sigue estos pasos para que Vigilia Countdown esté online.

---

## **1️⃣ Crear Repositorio en GitHub**

1. Ve a https://github.com/new
2. **Repository name:** `alltura-vigilia-countdown`
3. **Description:** `Countdown interactivo para el lanzamiento de Vigilia`
4. **Visibility:** Public (importante para GitHub Pages)
5. **No marques** "Add README" (ya tenemos uno)
6. Click **"Create repository"**

Copiarás la URL que aparece, algo como:
```
https://github.com/tu-usuario/alltura-vigilia-countdown.git
```

---

## **2️⃣ Opción A: Subir desde Línea de Comandos (Terminal)**

Si tienes Git instalado en tu máquina:

```bash
# Navega a donde están tus archivos
cd ruta/donde/estan/los/archivos

# Inicializa Git
git init

# Agrega todos los archivos
git add .

# Haz el primer commit
git commit -m "Vigilia Countdown: Initial commit"

# Renombra la rama a main (si es necesario)
git branch -M main

# Conecta con tu repositorio remoto
git remote add origin https://github.com/tu-usuario/alltura-vigilia-countdown.git

# Sube todo a GitHub
git push -u origin main
```

**¿No tienes Git instalado?** Usa la Opción B.

---

## **2️⃣ Opción B: Subir desde GitHub Web (Sin Terminal)**

1. **En GitHub, dentro de tu nuevo repo:**
   - Busca el botón **"Add file"** (arriba a la derecha)
   - Click en **"Upload files"**

2. **Arrastra y suelta** (o haz click para seleccionar):
   - `index.html`
   - `app.js`
   - `style.css`
   - `reminders.js`
   - `package.json`
   - `README.md`
   - `TWILIO_SETUP.md`
   - `GitIgnore`

3. **Crea la carpeta `.github/workflows`:**
   - Click "Add file" → "Create new file"
   - Nombre: `.github/workflows/reminders.yml`
   - Copia el contenido de tu archivo `reminders.yml`
   - Click "Commit changes"

4. **Listo.** Los archivos ahora están en GitHub.

---

## **3️⃣ Activar GitHub Pages**

1. **En tu repo**, ve a **Settings** (arriba)
2. En el menú izquierdo, busca **"Pages"**
3. Bajo "Build and deployment":
   - **Source:** "Deploy from a branch"
   - **Branch:** main / (root)
4. Click **"Save"**

**Espera 2-3 minutos.** Tu sitio estará en:
```
https://tu-usuario.github.io/alltura-vigilia-countdown
```

---

## **4️⃣ Configurar Reminders WhatsApp (Twilio)**

1. **Lee:** `TWILIO_SETUP.md` en tu repo
2. **Sigue los pasos** para obtener credenciales Twilio
3. **Ve a Settings → Secrets and variables → Actions**
4. **Agrega 3 secretos:**
   - `TWILIO_ACCOUNT_SID`
   - `TWILIO_AUTH_TOKEN`
   - `TWILIO_WHATSAPP_NUMBER`

**Los reminders se enviarán automáticamente en las fechas clave.**

---

## **5️⃣ ¡Listo!**

✅ App online: `https://tu-usuario.github.io/alltura-vigilia-countdown`  
✅ Reminders automáticos por WhatsApp  
✅ Tareas con responsables asignados  
✅ Estadísticas en tiempo real  

---

## **📱 Próximos Pasos**

1. **Comparte la URL** con el equipo (Camilo, Daniela, Andrés)
2. **Prueba los reminders** (botón en la app)
3. **Comienza a marcar tareas** mientras avanzan

---

## **❓ Ayuda Rápida**

| Problema | Solución |
|----------|----------|
| No aparece la app | Espera 5 min. Abre en navegador privado. |
| Los reminders no llegan | Revisa secretos de GitHub. Lee `TWILIO_SETUP.md`. |
| Quiero cambiar algo | Edita el archivo en GitHub y haz commit. Se actualiza automáticamente. |
| Los datos no se guardan | El navegador debe permitir localStorage. No uses modo privado. |

---

**¡Vigilia Countdown está listo!** 🚀

*Elevemos juntos.*
