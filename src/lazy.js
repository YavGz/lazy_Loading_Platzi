const isIntersecting = (entry) => {
  return entry.isIntersecting;
}

const accion = (entry) => {
  const nodo = entry.target;
  console.log('Hey');

  // quita el registro de la imagen (unlisten)
  observer.unobserve(nodo)
}

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(accion)
})

export const registerImage = (imagen) => {
  //intersectationObservador -> observer(imagen)
  observer.observe(imagen);
}