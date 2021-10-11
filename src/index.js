import { registerImage } from "./lazy";

const URL_API = 'https://source.unsplash.com/random'

const nodeAPP = document.querySelector('#images')


//crear una funcion para obtener un random 
const min = 1 /*Minimo de elementos del array*/ 
const max = 122 /*Maximo de elementos del array*/
const random = () => {
  Math.floor(Math.random() * (max - min) + min)
}

nodeAPP.addEventListener('click', (event) => {
  if (event.target.className === 'button-image') {
    printImage();
  } else {
    console.log(`Hola desde ${event.target.nodeName}`);
  }
}
)

const buttonImage = document.querySelectorAll('.button-image')
const buttonClear = document.querySelectorAll('.button-clear')


const printImage = () => {
  
  const img = document.createElement('img')
  img.style = 'width: 330px;'
  img.className = 'mx-auto'
  registerImage(img) /*Agregar la imagen al lazy*/

  const div = document.createElement('div')
  div.className = 'p-4 mx-auto'
  div.style = 'width: 330px'

  img.srcset = `${URL_API}`

  div.append(img);

  nodeAPP.insertBefore(div,buttons)
}
