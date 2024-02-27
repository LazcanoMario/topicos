
function generarRandomParrafo() {
    const palabras = ['manzana', 'banana', 'naranja', 'uva', 'pera', 'sandía', 'melón', 'kiwi', 'fresa', 'limón'];
  
    const parrafoLargo = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    let parrafoText = '';
  
    for (let i = 0; i < parrafoLargo; i++) {
      const palabraRandom = Math.floor(Math.random() * palabras.length);
      parrafoText += palabras[palabraRandom] + ' ';
    }
  
    return parrafoText;
  }
  
  for (let i = 0; i < 5; i++) {
    const paragraph = document.createElement('p');
    const text = generarRandomParrafo();
    paragraph.textContent = text;
    paragraph.textContent += ' [Tamaño: ' + text.length + ' caracteres]';
    document.body.appendChild(paragraph);
  }
