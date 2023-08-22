import closeGalery from "./closeGalery";

const galery = document.getElementById("galeria");
galery.addEventListener("click", (e) => {
  const btn = e.target.closest("button");

  if (btn?.dataset?.accion === "cerrar-galeria") {
    closeGalery();
  }
  document.body.style.overflow = "";
});
