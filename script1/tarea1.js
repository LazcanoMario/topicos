
const body = document.querySelector('body')

colores = ['black','maroon','gray,','purple','fuchsia','navy','emerald','yellow','aquamarine']

function numeroAleatorio() {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 10; i++) {
  
  const div = document.createElement('div');
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.backgroundColor = colores[numeroAleatorio()];
  
  body.appendChild(div);
}