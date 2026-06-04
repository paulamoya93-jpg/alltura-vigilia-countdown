# Vigilia Countdown — Alltura

**Calendario interactivo y gestor de tareas para el lanzamiento de Vigilia.**

Una herramienta para gestionar la ejecución del evento de lanzamiento de la colección Vigilia de Alltura, con seguimiento de tareas, responsables asignados, y reminders automáticos por WhatsApp.

---

## 📋 Características

✅ **Calendario interactivo** de junio 2026 con hitos clave resaltados  
✅ **Tareas organizadas por fecha** con responsables asignados  
✅ **Checkboxes para marcar completadas** (se guarda automáticamente)  
✅ **Estadísticas en tiempo real** (total, completadas, días restantes)  
✅ **Reminders automáticos por WhatsApp** en fechas clave  
✅ **Almacenamiento local** (no requiere servidor)  
✅ **Diseño responsive** (funciona en móvil y desktop)  
✅ **Modo oscuro** automático (según preferencias del sistema)  

---

## 🚀 Cómo Usar

### **Opción 1: Usar la versión online (Recomendado)**

1. **Abre el sitio:**
   ```
   https://tu-usuario.github.io/alltura-vigilia-countdown
   ```
   (URL exacta después de subir a GitHub)

2. **Navega el calendario:**
   - Los días en **azul** son hitos con tareas
   - El día **rojo** es el evento (25 de junio)
   - Haz **click en cualquier día** para ver detalles

3. **Marca tareas completadas:**
   - Usa los **checkboxes** junto a cada tarea
   - Los datos se guardan automáticamente cada 5 segundos
   - Puedes ver el progreso en las estadísticas arriba

4. **Descarga tus datos:**
   - Botón "Descargar datos" en la sección de opciones
   - Se guarda como JSON con timestamp

---

## 📱 Reminders por WhatsApp

Los reminders se envían **automáticamente** en estas fechas/horas:

| Fecha | Hora | Mensaje |
|-------|------|---------|
| Mar 27 may | 09:00 | 4 semanas antes — Confirmaciones iniciales |
| Dom 22 jun | 09:00 | 3 días — Últimos detalles |
| Mar 24 jun | 09:00 | 1 día — Montaje y test |
| Jue 25 jun | 18:00 | 1 hora antes — ¡Evento en vivo! |

### **Configurar reminders (GitHub Actions)**

1. **Crea una cuenta Twilio:** https://www.twilio.com/
   - Plan gratuito incluye $15 USD de crédito
   - Ideal para ~20 mensajes/mes

2. **Obtén tus credenciales:**
   - `ACCOUNT SID`
   - `AUTH TOKEN`
   - Número WhatsApp de Twilio (ej: `whatsapp:+14155238886`)

3. **Agrega secretos a GitHub:**
   - Ve a tu repo → Settings → Secrets and variables → Actions
   - Crea 3 secretos:
     ```
     TWILIO_ACCOUNT_SID = tu_account_sid
     TWILIO_AUTH_TOKEN = tu_auth_token
     TWILIO_WHATSAPP_NUMBER = whatsapp:+14155238886
     ```

4. **El workflow se ejecuta automáticamente:**
   - GitHub Actions verifica cada hora si es momento de enviar un reminder
   - Los mensajes se envían a `+573124996139` (tu número)

### **Probar manualmente:**

En la aplicación web, hay un botón "Probar reminder WhatsApp" que abre WhatsApp con un mensaje de prueba.

---

## 🛠️ Instalación (Subir a GitHub)

### **Paso 1: Crear repositorio en GitHub**

1. Ve a https://github.com/new
2. Nombre: `alltura-vigilia-countdown`
3. Descripción: `Countdown interactivo para Vigilia — Alltura`
4. Público (para que funcione GitHub Pages)
5. **Create repository**

### **Paso 2: Subir archivos**

```bash
# Clonar el repo (después de crearlo)
git clone https://github.com/tu-usuario/alltura-vigilia-countdown.git
cd alltura-vigilia-countdown

# Copiar archivos del proyecto aquí
# (index.html, app.js, style.css, reminders.js, package.json, etc.)

# Subir a GitHub
git add .
git commit -m "Initial commit: Vigilia countdown app"
git push origin main
```

### **Paso 3: Activar GitHub Pages**

1. Ve a tu repo → Settings → Pages
2. Source: **Deploy from a branch**
3. Branch: **main** / **/ (root)**
4. **Save**

En ~2 minutos, la app estará en:
```
https://tu-usuario.github.io/alltura-vigilia-countdown
```

---

## 📊 Estructura de Archivos

```
alltura-vigilia-countdown/
├── index.html                    # Página principal
├── app.js                        # Lógica de la app
├── style.css                     # Estilos (responsive + dark mode)
├── reminders.js                  # Script de reminders (Node.js)
├── package.json                  # Dependencias
├── README.md                     # Este archivo
├── .gitignore                    # Archivos a ignorar
└── .github/
    └── workflows/
        └── reminders.yml         # GitHub Actions (reminders automáticos)
```

---

## 👥 Responsables por Tarea

| Rol | Persona | Tareas Clave |
|-----|---------|-------------|
| **Director** | Camilo | Flujo evento, brindis, presentación |
| **Contenido** | Paula | Fotos/video en vivo, stories |
| **Punto de Venta** | Daniela | Racks, Shopify, inventario |
| **Logística** | Andrés | Montaje, decoración, TV, catering |

---

## 🔍 Solución de Problemas

### **Los reminders no llegan**

1. ¿Están configurados los secretos de Twilio en GitHub?
   - Settings → Secrets → Revisa que estén todos

2. ¿El workflow está habilitado?
   - Actions → Revisa que "Vigilia Reminders" aparezca
   - Click en la última ejecución para ver logs

3. **Alternativa manual:**
   - Ejecuta localmente: `node reminders.js`
   - Requiere variables de entorno configuradas

### **Los datos no se guardan**

1. ¿El navegador permite localStorage?
   - Revisa que no esté en "Modo privado/incógnito"
   - Intenta en Chrome, Firefox o Safari

2. **Alternativa:**
   - Usa "Descargar datos" para exportar JSON
   - Luego importa manualmente si es necesario

### **GitHub Pages no aparece**

1. Espera 2-3 minutos después de subir archivos
2. Limpia caché del navegador (Ctrl+Shift+R)
3. Revisa que Settings → Pages esté configurado en "main / (root)"

---

## 📈 Estadísticas y Progreso

La app muestra en tiempo real:

- **Tareas totales:** Suma de todas las tareas en los 6 hitos
- **Completadas:** Tareas que haz marcado con checkbox
- **Días restantes:** Conteo hacia el 25 de junio

Todos los datos se sincronizan automáticamente en localStorage del navegador.

---

## 🎨 Personalización

### **Cambiar colores:**
Edita `style.css`, sección `:root`:
```css
:root {
  --color-primary: #1a1a1a;
  --color-accent: #c41e3a;  /* Rojo Alltura */
  /* etc */
}
```

### **Agregar/editar tareas:**
Modifica `app.js`, objeto `tasksData`:
```javascript
const tasksData = {
  '2026-05-27': {
    title: '4 SEMANAS ANTES',
    items: [
      { text: 'Tu tarea', responsible: 'Nombre' },
      // ...
    ]
  }
}
```

### **Cambiar reminders:**
Edita `reminders.js`, array `REMINDERS`:
```javascript
const REMINDERS = [
  {
    date: '2026-05-27',
    time: '09:00',
    message: 'Tu mensaje aquí'
  }
]
```

---

## 📞 Soporte

Si algo no funciona:
1. Revisa que **todos los archivos** estén en el repo
2. Espera **2-3 minutos** para que GitHub Pages se actualice
3. Limpia caché del navegador
4. Abre la consola (F12 → Console) para ver errores

---

## 📄 Licencia

MIT — Úsalo como quieras, créditale a Alltura 🚀

---

**Hecho con ❤️ para Vigilia**

*Nos elevamos elevando a otros.*
