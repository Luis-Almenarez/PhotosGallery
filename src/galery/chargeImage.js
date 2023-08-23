import data from "./../data/fotos";

const galery = document.getElementById("galeria");
const chargeImage = (id, nombre, ruta, descripcion) => {
  galery.querySelector(".galeria__imagen").src = ruta;
  galery.querySelector(".galeria__imagen").dataset.idImagen = id;
  galery.querySelector(".galeria__titulo").innerText = nombre;
  galery.querySelector(".galeria__descripcion-imagen-activa").innerText = descripcion;

  const actuallyCategory = galery.dataset.categoria;
  const fotos = data.fotos[actuallyCategory];

  let indexImagenActual;
  fotos.forEach((pic, index) => {
    if (pic.id === id) {
      indexImagenActual = index;
    }
  });

  if (galery.querySelectorAll(".galeria__carousel-slide").length > 0) {
    galery.querySelector(".galeria__carousel-slide--active").classList.remove("galeria__carousel-slide--active");

    galery.querySelectorAll(".galeria__carousel-slide")[indexImagenActual].classList.add("galeria__carousel-slide--active");
  }
};

export { chargeImage };
