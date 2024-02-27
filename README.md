# Lazcano Butcher Mario Antonio - Topicos avanzados 


# topicos
Esta rama contiene mis 3 scripts diseñados para topicos. :))

A continuacion vamos al Script 1! 

# Script 1

Elabora un script que genere 10 contenedores de
tamaño 100 y les agregue un color aleatorio.

Empece por declarar el Body.

``` Javascript
const body = document.querySelector('body')

```

Seguido de un arreglo que aloja los colores a utilizar. 

``` Javascript
colores = ['black','maroon','gray,','purple','fuchsia','navy','emerald','yellow','aquamarine']

```
Utilice la siguiente funcion para generar un numero aleatorio que posteriormente seria utilizado en un ciclo.

``` Javascript
function numeroAleatorio() {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

```
Para finalizar un ciclo que genera los Div , asignar medidas y colocar un color aleatorio
``` Javascript

for (let i = 0; i < 10; i++) {
  
  const div = document.createElement('div');
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.backgroundColor = colores[numeroAleatorio()];
  
  body.appendChild(div);
}
```



# Script 2

Usando el script anterior agrega la funcionalidad de
que los colores no se repitan.

Emoezamos por agregar 2 arreglos 1 para los colores usados y otro para los colores a usar :)
``` Javascript
const coloresUsados = [];
const colores = ['Red', 'Green','Blue','Yellow','Magenta','Cyan','Orange','Purple','Turquoise','Pink','Black','White','Gray','Brown','SkyBlue','Lime','Melon','Salmon',
  'Orchid',
  'Emerald'
];

```
Seguimos con la funcion para generar el color aleatorio con ciclo do while para evitar que se repitan colores :)

``` Javascript
function colorAlAzar() {
  let color;
  do {
    color = colores[Math.floor(Math.random() * colores.length)];
  } while (coloresUsados.includes(color));
  coloresUsados.push(color);
  return color;
}

```
Seguimos con el ciclo que creara los 10 divs con las siguientes caracteristicas :

Ancho: 100 píxeles.

Alto: 100 píxeles.

Un color aleatorio generado utilizando la función colorAlAzar().

``` Javascript
for (let i = 0; i < 10; i++) {
  const div = document.createElement('div');
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.backgroundColor = colorAlAzar();
  div.textContent = div.style.backgroundColor;
  document.body.appendChild(div);
}

```

# Script 3

Elabora un script que sea capaz de generar 5
párrafos.

**Cada párrafo tendrá texto generado de manera
aleatoria con una función que sea creada por ti. El
tamaño del texto de cada párrafo deberá ser entre
50 y 100 palabras. [Se deberá mostrar el tamaño de
caracteres que tenga cada párrafo]

Creare un arreglo dentro de una funcion que incluya las palabras a usar, esta vez decidi usar frutas! ♥

Esta misma funcion realizara el proceso del numero aleatorio el cual influira en la palabra!.
``` Javascript
function generarRandomParrafo() {
    const palabras = ['manzana', 'banana', 'naranja', 'uva', 'pera', 'sandía', 'melón', 'kiwi', 'fresa', 'limón'];
 const parrafoLargo = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    let parrafoText = '';

```
A su vez dentro de la funcion decidi meter el ciclo para hacerlo las veces necesarias para el optimo resultado.
``` Javascript
  for (let i = 0; i < parrafoLargo; i++) {
      const palabraRandom = Math.floor(Math.random() * palabras.length);
      parrafoText += palabras[palabraRandom] + ' ';
``` 
Finalizando  con un ciclo que crea los 5 elementos < p > y los agrega al cuerpo del documento HTML
el ciclo contiene las siguientes caracteristicas: 

genera un texto aleatorio utilizando la función generarRandomParrafo().

Se añade al texto la longitud del párrafo generado en caracteres.

Este texto se establece como contenido del párrafo (< p >).


``` Javascript
 for (let i = 0; i < 5; i++) {
    const paragraph = document.createElement('p');
    const text = generarRandomParrafo();
    paragraph.textContent = text;
    paragraph.textContent += ' [Tamaño: ' + text.length + ' caracteres]';
    document.body.appendChild(paragraph);
  }

```
Y con eso finalizamos la documentacion espero sea del agrado del usuario/lector.

