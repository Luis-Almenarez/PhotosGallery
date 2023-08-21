import dataPic from "./data/fotos";
const containerCategory = document.getElementById("categorias");
const galery = document.getElementById("galeria");

containerCategory.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.closest("a")) {
    galery.classList.add("galeria--active");
    document.body.style.overflow = "hidden";

    const categoryActive = e.target.dataset.categoria;
    const pic = dataPic.fotos[categoryActive];

    pic.forEach((pic) => {
      const slide = `
            <a href="#" class="galeria__carousel-slide">
                <img class="galeria__carousel-image" src="${pic.ruta}" alt="Imagen paisaje ${pic.nombre}" />
            </a>
        `;
      galery.querySelector(".galeria__carousel-slides").innerHTML += slide;
    });

    galery.querySelector(".galeria__carousel-slide").classList.add("galeria__carousel-slide--active");
  }
});
