let totalImages = 0 
let loadedImages = 0

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage)
})

const isIntersecting = (entry) => {
  return entry.isIntersecting;
}

const loadImage = (entry) => {
  const imagen = entry.target;
  const url = imagen.dataset.src
  // cargar imagen
  imagen.src = url
  
  imagen.onload = () => {
    loadedImages += 1
    logState()
  }
  // quita el registro de la imagen (unlisten)
  observer.unobserve(imagen)
}


export const registerImage = (imagen) => {
  //intersectationObservador -> observer(imagen)
  observer.observe(imagen);
  totalImages += 1
  logState()
}
  
const logState = () => {
  console.log(`⚫ Total de imágenes: ${totalImages}`);
  console.log(` ✔ Imágenes cargadas: ${loadedImages}`);
}