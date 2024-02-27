
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

  function textoAleatorio() {
    const length = numeroAleatorio(50, 100);
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
    let text = '';
    for (let i = 0; i < length; i++) {
      text += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return text;
  }
  
  for (let i = 0; i < 5; i++) {
    const paragraph = document.createElement('p');
    const text = textoAleatorio();
    paragraph.textContent = text;
    paragraph.textContent += ' [Tamaño: ' + text.length + ' caracteres]';
    document.body.appendChild(paragraph);
  }
  