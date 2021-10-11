const isIntersecting = (entry) => {
  return entry.isIntersecting;
}

const loadImage = (entry) => {
  const imagen = entry.target; /**/
  const url = imagen.dataset.src
  // cargar imagen
  imagen.src = url
  // quita el registro de la imagen (unlisten)
  observer.unobserve(imagen)
}

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage)
})

export const registerImage = (imagen) => {
  //intersectationObservador -> observer(imagen)
  observer.observe(imagen);
}