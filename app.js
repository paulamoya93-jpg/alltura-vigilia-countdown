// Datos de tareas
const tasksData = {
  '2026-06-05': {
    title: 'RECORDATORIO A PERFILES',
    date: 'Viernes 5 de junio',
    isEvent: false,
    items: [
      { text: 'Enviar mensaje a los 5 perfiles recordando que pueden tomar fotos este fin de semana', responsible: 'Pau' },
      { text: 'Confirmar que tienen las cámaras desechables', responsible: 'Pau' }
    ]
  },
  '2026-06-11': {
    title: 'ENTREGA DE CÁMARAS',
    date: 'Jueves 11 de junio',
    isEvent: false,
    items: [
      { text: 'Que nos entreguen las cámaras desechables de los 5 perfiles', responsible: 'Pau' },
      { text: 'Verificar que todas las cámaras estén en buen estado', responsible: 'Andrés' }
    ]
  },
  '2026-06-12': {
    title: '1 SEMANA ANTES',
    date: 'Miércoles 12 de junio',
    isEvent: false,
    items: [
      { text: 'Dejar listo el e-commerce con todos los productos montados', responsible: 'Daniela' },
      { text: 'Tener lista la parrilla de contenido de lanzamiento', responsible: 'Paula' },
      { text: 'Enviar invitaciones digitales diseñadas', responsible: 'Pau' },
      { text: 'Confirmar asistencia influencers', responsible: 'Pau' },
      { text: 'Preparar laptop con carrusel de fotos Vigilia', responsible: 'Paula' },
      { text: 'Desglose de prendas por talla y precio', responsible: 'Daniela' }
    ]
  },
  '2026-06-16': {
    title: '3 DÍAS ANTES',
    date: 'Martes 16 de junio',
    isEvent: false,
    items: [
      { text: 'Revelar las fotos de las cámaras desechables', responsible: 'Pau' },
      { text: 'Tener listas todas las fotos para la instalación', responsible: 'Paula' },
      { text: 'Reminder a invitados sin confirmar', responsible: 'Pau' },
      { text: 'Empacar racks y prendas', responsible: 'Daniela' },
      { text: 'Confirmar horarios catering', responsible: 'Andrés' }
    ]
  },
  '2026-06-18': {
    title: '1 DÍA ANTES',
    date: 'Miércoles 18 de junio',
    isEvent: false,
    items: [
      { text: 'Montaje: cables, luz, decoración, racks, TV (14:00–17:00)', responsible: 'Andrés' },
      { text: 'Instalación de fotos reveladas con luz roja', responsible: 'Andrés' },
      { text: 'Test final: luz, TV, Shopify, wifi', responsible: 'Andrés' },
      { text: 'Entrenar al equipo en roles', responsible: 'Camilo' },
      { text: 'Cargar champaña en copas frías', responsible: 'Andrés' }
    ]
  },
  '2026-06-19': {
    title: 'EVENTO VIGILIA',
    date: 'Jueves 19 de junio',
    isEvent: true,
    items: [
      { text: 'Llegada equipo: 17:00', responsible: 'Todos' },
      { text: 'Apertura: 18:45 (recepción informal)', responsible: 'Camilo' },
      { text: 'Inicio oficial: 19:00', responsible: 'Camilo' },
      { text: 'Despedida: 22:00', responsible: 'Camilo' }
    ]
  }
};

// Milestones para reminders — ACTUALIZADO
const reminders = [
  { date: '2026-06-05', time: '09:00', message: '📸 Recordatorio a perfiles: Aprovecha el fin de semana para tomar fotos con la cámara desechable. ¡Vigilia te espera!' },
  { date: '2026-06-11', time: '09:00', message: '📷 Hoy entregamos las cámaras desechables. Que nos las devuelvan completas el martes 16 para revelar.' },
  { date: '2026-06-16', time: '09:00', message: '⏰ 3 DÍAS para Vigilia!\n\nHoy: Revelar fotos, últimos reminders, empacar.\nTodo en marcha 💪' },
  { date: '2026-06-18', time: '09:00', message: '🔴 MAÑANA es Vigilia!\n\nHOY 14:00-17:00:\n→ Montaje completo\n→ Test: luz, TV, Shopify\n→ Entrenar equipo\n\n¡Vamos!' },
  { date: '2026-06-19', time: '18:00', message: '⏰ FALTA 1 HORA para Vigilia!\n\n📍 La Dacha Librería\nCra 4A# 66-19\n\nEquipo en punto.\n19:00 → ¡EVENTO EN VIVO!\n\n🚀 Vamos!' }
];
