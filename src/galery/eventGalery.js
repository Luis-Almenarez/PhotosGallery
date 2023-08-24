import closeGalery from "./closeGalery";
import slideClick from "./slideClick";
import { cargarAnteriorSiguiente } from "./chargeImage";

const galery = document.getElementById("galeria");
galery.addEventListener("click", (e) => {
  const btn = e.target.closest("button");

  if (btn?.dataset?.accion === "cerrar-galeria") {
    closeGalery();
  }
  document.body.style.overflow = "";

  // - CAROUSEL SLIDE CLICK -

  if (e.target.dataset.id) {
    slideClick(e);
  }

  // - Siguiente Imagen

  if (btn?.dataset?.accion === "siguiente-imagen") {
    cargarAnteriorSiguiente("siguiente");
  }

  // - Imange anterior
  if (btn?.dataset?.accion === "anterior-imagen") {
    cargarAnteriorSiguiente("anterior");
  }
});
