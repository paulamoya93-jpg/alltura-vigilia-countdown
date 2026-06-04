// Datos de tareas
const tasksData = {
  '2026-06-05': {
    title: 'RECORDATORIO A PERFILES',
    date: 'Viernes 5 de junio',
    isEvent: false,
    items: [
      { text: 'Enviar mensaje a los 5 perfiles recordando que deben tomar fotos este fin de semana', responsible: 'Lilo' }
    ]
  },
  '2026-06-11': {
    title: 'ENTREGA DE CÁMARAS',
    date: 'Jueves 11 de junio',
    isEvent: false,
    items: [
      { text: 'Que nos entreguen las cámaras desechables', responsible: 'Lilo y Paula' },
      { text: 'Mandar a revelar las cámaras', responsible: 'TBC' }
    ]
  },
  '2026-06-12': {
    title: '1 SEMANA ANTES',
    date: 'Miércoles 12 de junio',
    isEvent: false,
    items: [
      { text: 'Dejar listo el e-commerce con todos los productos montados', responsible: 'Andrés y Paula' },
      { text: 'Tener lista la parrilla de contenido de lanzamiento', responsible: 'Paula' },
      { text: 'Enviar invitaciones digitales diseñadas', responsible: 'Equipo' },
      { text: 'Confirmar asistencia influencers', responsible: 'Lilo y Paula' },
      { text: 'Preparar laptop con carrusel de fotos Vigilia', responsible: 'Paula' },
      { text: 'Desglose de prendas por talla y precio para arte', responsible: 'Daniela' }
    ]
  },
  '2026-06-16': {
    title: '3 DÍAS ANTES',
    date: 'Martes 16 de junio',
    isEvent: false,
    items: [
      { text: 'Revelar las fotos de las cámaras desechables', responsible: 'TBC' },
      { text: 'Tener listas todas las fotos para la instalación', responsible: 'Paula' },
      { text: 'Reminder a invitados sin confirmar', responsible: 'Equipo' },
      { text: 'Empacar racks y prendas', responsible: 'Equipo' },
      { text: 'Confirmar horarios catering', responsible: 'Andrés' }
    ]
  },
  '2026-06-18': {
    title: '1 DÍA ANTES',
    date: 'Miércoles 18 de junio',
    isEvent: false,
    items: [
      { text: 'Montaje: cables, luz, decoración, racks, TV (14:00–17:00)', responsible: 'Equipo' },
      { text: 'Instalación de fotos reveladas con luz roja', responsible: 'Equipo' },
      { text: 'Test final: luz, TV, Shopify, wifi', responsible: 'Equipo' },
      { text: 'Hace el chequeo del minuto a minuto del evento', responsible: 'Lilo' },
      { text: 'Comprar champañas', responsible: 'Andrés' }
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

// Milestones para reminders
const reminders = [
  { date: '2026-06-05', time: '09:00', message: '📸 Recordatorio a perfiles: Aprovecha el fin de semana para tomar fotos con la cámara desechable. ¡Vigilia te espera!' },
  { date: '2026-06-11', time: '09:00', message: '📷 Hoy entregamos las cámaras desechables. Que nos las devuelvan completas el martes 16 para revelar.' },
  { date: '2026-06-16', time: '09:00', message: '⏰ 3 DÍAS para Vigilia!\n\nHoy: Revelar fotos, últimos reminders, empacar.\nTodo en marcha 💪' },
  { date: '2026-06-18', time: '09:00', message: '🔴 MAÑANA es Vigilia!\n\nHOY 14:00-17:00:\n→ Montaje completo\n→ Test: luz, TV, Shopify\n→ Entrenar equipo\n\n¡Vamos!' },
  { date: '2026-06-19', time: '18:00', message: '⏰ FALTA 1 HORA para Vigilia!\n\n📍 La Dacha Librería\nCra 4A# 66-19\n\nEquipo en punto.\n19:00 → ¡EVENTO EN VIVO!\n\n🚀 Vamos!' }
];

// Estado de tareas
let taskStates = {};

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
  loadTaskStates();
  renderCalendar();
  renderTimeline();
  updateStats();
  updateLastSync();
  setupAutoSave();
});

// FUNCIONES PRINCIPALES
function renderCalendar() {
  const calendar = document.getElementById('calendar');
  const firstDay = new Date(2026, 5, 1).getDay(); // 0 = domingo
  const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1; // Convertir a lunes = 0

  // Días vacíos
  for (let i = 0; i < adjustedFirstDay; i++) {
    const emptyDay = document.createElement('div');
    emptyDay.className = 'day empty';
    calendar.appendChild(emptyDay);
  }

  // Días del mes
  for (let day = 1; day <= 30; day++) {
    const date = `2026-06-${String(day).padStart(2, '0')}`;
    const dayEl = document.createElement('button');
    dayEl.className = 'day';
    dayEl.textContent = day;

    const task = tasksData[date];
    if (task) {
      dayEl.classList.add(task.isEvent ? 'is-event' : 'has-task');
    }

    if (day === 19) {
      dayEl.classList.add('is-today');
    }

    dayEl.addEventListener('click', () => {
      if (task) {
        showTaskModal(date, task);
      }
    });

    calendar.appendChild(dayEl);
  }
}

function renderTimeline() {
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = '';

  const sortedDates = Object.keys(tasksData).sort();

  sortedDates.forEach(date => {
    const task = tasksData[date];
    const item = document.createElement('div');
    item.className = `timeline-item ${task.isEvent ? 'is-event' : ''}`;

    const tasksHTML = task.items.map(t => {
      const taskKey = `${date}-${t.text}`;
      const isDone = taskStates[taskKey] || false;
      return `
        <div class="task-item ${isDone ? 'done' : ''}">
          <input type="checkbox" class="task-checkbox" ${isDone ? 'checked' : ''} 
                 onchange="toggleTask('${taskKey}')">
          <div>
            <div class="task-text">${t.text}</div>
            <div class="task-responsible">
              👤 ${t.responsible}
            </div>
          </div>
        </div>
      `;
    }).join('');

    item.innerHTML = `
      <div class="timeline-header">
        <span class="timeline-date">${task.title}</span>
        <span class="timeline-when">${task.date}</span>
      </div>
      <div class="timeline-title">${task.isEvent ? '🎉 ' : ''}${task.title}</div>
      <div class="timeline-tasks">
        ${tasksHTML}
      </div>
    `;

    item.addEventListener('click', (e) => {
      if (e.target.type !== 'checkbox') {
        showTaskModal(date, task);
      }
    });

    timeline.appendChild(item);
  });
}

function updateStats() {
  let totalTasks = 0;
  let doneTasks = 0;

  Object.values(tasksData).forEach(milestone => {
    milestone.items.forEach(task => {
      totalTasks++;
      const taskKey = Object.keys(tasksData).find(date => tasksData[date] === milestone) + '-' + task.text;
      if (taskStates[taskKey]) {
        doneTasks++;
      }
    });
  });

  document.getElementById('tasks-total').textContent = totalTasks;
  document.getElementById('tasks-done').textContent = doneTasks;

  // Días restantes
  const today = new Date(2026, 5, 4); // Asumiendo que hoy es 4 de junio
  const eventDate = new Date(2026, 5, 19); // 19 de junio
  const daysLeft = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
  document.getElementById('days-left').textContent = Math.max(0, daysLeft);
}

function toggleTask(taskKey) {
  taskStates[taskKey] = !taskStates[taskKey];
  saveTaskStates();
  renderTimeline();
  updateStats();
}

function showTaskModal(date, task) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');

  const tasksHTML = task.items.map(t => {
    const taskKey = `${date}-${t.text}`;
    const isDone = taskStates[taskKey] || false;
    return `
      <div class="task-item ${isDone ? 'done' : ''}" style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
        <input type="checkbox" class="task-checkbox" ${isDone ? 'checked' : ''} 
               onchange="toggleTask('${taskKey}'); renderTimeline();">
        <div>
          <div class="task-text" style="font-size: 15px;">${t.text}</div>
          <div class="task-responsible">👤 Responsable: <strong>${t.responsible}</strong></div>
        </div>
      </div>
    `;
  }).join('');

  modalBody.innerHTML = `
    <h3 style="margin-bottom: 8px;">${task.title}</h3>
    <p style="color: #666; margin-bottom: 20px; font-size: 14px;">${task.date}</p>
    <div class="timeline-tasks">
      ${tasksHTML}
    </div>
  `;

  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// ALMACENAMIENTO LOCAL
function saveTaskStates() {
  localStorage.setItem('vigilia-task-states', JSON.stringify(taskStates));
}

function loadTaskStates() {
  const saved = localStorage.getItem('vigilia-task-states');
  if (saved) {
    taskStates = JSON.parse(saved);
  }
}

function setupAutoSave() {
  setInterval(() => {
    saveTaskStates();
    updateLastSync();
  }, 5000); // Guardar cada 5 segundos
}

function updateLastSync() {
  const now = new Date();
  const time = now.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
  document.getElementById('last-sync').textContent = time;
}

// FUNCIONES DE UTILIDAD
function resetTasks() {
  if (confirm('¿Estás seguro? Esto borrará todas las tareas completadas.')) {
    taskStates = {};
    saveTaskStates();
    renderTimeline();
    updateStats();
  }
}

function exportData() {
  const data = {
    timestamp: new Date().toISOString(),
    tasks: taskStates,
    summary: {
      total: Object.keys(taskStates).length,
      done: Object.values(taskStates).filter(v => v).length
    }
  };

  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `vigilia-tasks-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function testReminder() {
  const message = encodeURIComponent('🧪 Test: Este es un mensaje de prueba de Vigilia Countdown. Si recibes esto, ¡los reminders funcionan!');
  const phone = '+573124996139'; // Número de Pau
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
  window.open(whatsappUrl, '_blank');
}

// Cerrar modal al hacer click fuera
window.addEventListener('click', (e) => {
  const modal = document.getElementById('modal');
  if (e.target === modal) {
    closeModal();
  }
});
