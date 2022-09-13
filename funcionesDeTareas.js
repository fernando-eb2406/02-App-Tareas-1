//const fs = require('fs');
const tareas = require('./tareas.json');

module.exports = {
   listarTareas : () => {
      tareas.forEach((tarea, index) => {
         console.log(`${index+1} - ${tarea.titulo} - Estado: ${tarea.estado}`);
      });
      return null;
   }
}
