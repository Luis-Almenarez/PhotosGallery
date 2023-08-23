import dataPic from "./data/fotos";
import { chargeImage } from "./galery/chargeImage";
const containerCategory = document.getElementById("categorias");
const galery = document.getElementById("galeria");

containerCategory.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.closest("a")) {
    galery.classList.add("galeria--active");
    document.body.style.overflow = "hidden";

    const categoryActive = e.target.closest("a").dataset.categoria;
    galery.dataset.categoria = categoryActive;
    const pic = dataPic.fotos[categoryActive];
    const carousel = galery.querySelector(".galeria__carousel-slides");

    const { id, nombre, ruta, descripcion } = pic[0];
    chargeImage(id, nombre, ruta, descripcion);

    carousel.innerHTML = "";

    pic.forEach((pic) => {
      const slide = `
            <a href="#" class="galeria__carousel-slide">
                <img class="galeria__carousel-image" src="${pic.ruta}" data-id='${pic.id}' alt="Imagen paisaje ${pic.nombre}" />
            </a>
        `;
      galery.querySelector(".galeria__carousel-slides").innerHTML += slide;
    });

    galery.querySelector(".galeria__carousel-slide").classList.add("galeria__carousel-slide--active");
  }
});
