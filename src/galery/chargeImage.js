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

const cargarAnteriorSiguiente = (direccion) => {
  const categoriaActual = galery.dataset.categoria;
  const fotos = data.fotos[categoriaActual];
  const idImagenActual = parseInt(galery.querySelector(".galeria__imagen").dataset.idImagen);

  let indexImagenActual;

  fotos.forEach((foto, index) => {
    if (foto.id === idImagenActual) {
      indexImagenActual = index;
    }
  });

  if (direccion === "siguiente") {
    if (fotos[indexImagenActual + 1]) {
      const { id, nombre, ruta, descripcion } = fotos[indexImagenActual + 1];
      chargeImage(id, nombre, ruta, descripcion);
    }
  } else if (direccion === "anterior") {
    if (fotos[indexImagenActual - 1]) {
      const { id, nombre, ruta, descripcion } = fotos[indexImagenActual - 1];
      chargeImage(id, nombre, ruta, descripcion);
    }
  }
};

export { chargeImage, cargarAnteriorSiguiente };
