import { registerImage } from "./lazy";

const URL_API = 'https://source.unsplash.com/random'

const nodeAPP = document.querySelector('#container')

const images = document.querySelector('#images')
//crear una funcion para obtener un random 
// const min = 1 /*Minimo de elementos del array*/ 
// const max = 122 /*Maximo de elementos del array*/
// const random = () => {
//   Math.floor(Math.random() * (max - min) + min)
// }
nodeAPP.addEventListener('click', (event) => {
  if (event.target.className === 'button-image btn btn-outline-primary') {
    printImage();
  }
  else if (event.target.className === 'button-clear btn btn-outline-secondary') {
    clearNodes();
  }
})

const buttonImage = document.querySelectorAll('.button-image')
const buttonClear = document.querySelectorAll('.button-clear')


const printImage = () => {
  
  const img = document.createElement('img')
  img.style = 'width: 330px;'
  img.className = 'mx-auto imagen'
  img.dataset.src = `${URL_API}`
  
  const imageWrapper = document.createElement("div");
  imageWrapper.className = "bg-gray-300 imagen";
  imageWrapper.style.minHeight = "160px";
  imageWrapper.style.display = "inline-block";

  const div = document.createElement('div')
  div.className = 'p-4 mx-auto'
  div.style = 'width: 300px;'
  
  imageWrapper.appendChild(img);

  div.append(imageWrapper);
  
  registerImage(img) /*Agregar la imagen al lazy*/

  images.append(div)
}

const clearNodes = () => {
  images.innerHTML = ''
}