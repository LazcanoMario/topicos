# Lazcano Butcher Mario Antonio - Topicos avanzados 

# topicos
Esta rama contiene mis 3 scripts diseñados para topicos. :))

A continuacion vamos al Script 1! 

# Script 1

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
