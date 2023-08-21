import dataCategorias from "./data/categorias";
const { categorias } = dataCategorias;
const containerCategory = document.getElementById("categorias");

categorias.forEach((categoria) => {
  const newCategory = document.createElement("a");
  const template = `  
        <img class="categoria__img" src="${categoria.imagenPortada}" alt="Imagen portada sección ${categoria.nombre}" />
        <div class="categoria__datos">
        <p class="categoria__nombre">${categoria.nombre}</p>
        <p class="categoria__numero-fotos">${categoria.numeroFotos} Fotos</p>
        </div>
    `;

  newCategory.innerHTML = template;
  newCategory.classList.add("categoria");
  newCategory.href = "#";
  newCategory.dataset.categoria = categoria.id;

  containerCategory.append(newCategory);
});
