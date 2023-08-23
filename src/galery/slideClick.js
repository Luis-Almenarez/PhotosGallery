import data from "./../data/fotos";
import { chargeImage } from "./chargeImage";

const slideClick = (e) => {
  let ruta, nombre, descripcion;
  const id = parseInt(e.target.dataset.id);
  const galeria = document.getElementById("galeria");
  const categoryActive = galeria.dataset.categoria;

  data.fotos[categoryActive].forEach((pic) => {
    if (pic.id === id) {
      ruta = pic.ruta;
      nombre = pic.nombre;
      descripcion = pic.descripcion;
    }
  });

  chargeImage(id, nombre, ruta, descripcion);
};

export default slideClick;
