const coloresUsados = [];
const colores = [
  'Red',
  'Green',
  'Blue',
  'Yellow',
  'Magenta',
  'Cyan',
  'Orange',
  'Purple',
  'Turquoise',
  'Pink',
  'Black',
  'White',
  'Gray',
  'Brown',
  'SkyBlue',
  'Lime',
  'Melon',
  'Salmon',
  'Orchid',
  'Emerald'
];

function colorAlAzar() {
  let color;
  do {
    color = colores[Math.floor(Math.random() * colores.length)];
  } while (coloresUsados.includes(color));
  coloresUsados.push(color);
  return color;
}

for (let i = 0; i < 10; i++) {
  const div = document.createElement('div');
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.backgroundColor = colorAlAzar();
  div.textContent = div.style.backgroundColor;
  document.body.appendChild(div);
}