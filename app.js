/* TP03 - App de Notas/Tareas */

const process = require('process');
const {listarTareas} = require('./funcionesDeTareas');

console.clear();

const comando = process.argv[2];

switch (comando) {
   case 'listar':
      listarTareas();
      break;
   case undefined:
      console.log('Atención - Tienes que pasar una acción.');
      break;
   default:
      console.log('No entiendo lo que quieres hacer.');
      break;
}