import closeGalery from "./closeGalery";
import slideClick from "./slideClick";

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
});
