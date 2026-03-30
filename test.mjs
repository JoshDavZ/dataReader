import { renderer } from './main.js';
document.addEventListener('DOMContentLoaded', () => {
    renderData(renderer.data, 'output2');
console.log('Renderer instance:', renderer.data);
console.log('Renderer instance:', renderer.table);
renderer.render();
});
// .catch(err => {
//   console.error('Failed to initialize renderer', err);
// });