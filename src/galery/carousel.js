const galery = document.getElementById("galeria");
const carousel = (direccion) => {
  const options = {
    root: document.querySelector(".galeria__carousel"),
    rootMargin: "0px",
    threshold: 0.9,
  };

  const observer = new IntersectionObserver((entries) => {
    const slidesVisible = entries.filter((entry) => {
      if (entry.isIntersecting === true) {
        return entry;
      }
    });

    if (direccion === "atras") {
      const firtSlideVisible = slidesVisible[0];
      const indexfirtSlideVisible = entries.indexOf(firtSlideVisible);

      if (indexfirtSlideVisible >= 1) {
        entries[indexfirtSlideVisible - 1].target.scrollIntoView({
          behavior: "smooth",
          inline: "start",
        });
      }
    } else if (direccion === "adelante") {
      const lastSlideVisible = slidesVisible[slidesVisible.length - 1];
      const indexLastSlideVisible = entries.indexOf(lastSlideVisible);
      if (entries.length - 1 > indexLastSlideVisible) {
        entries[indexLastSlideVisible + 1].target.scrollIntoView({
          behavior: "smooth",
          inline: "start",
        });
      }
    }

    const slides = galery.querySelectorAll(".galeria__carousel-slide");
    slides.forEach((slide) => {
      observer.unobserve(slide);
    });
  }, options);

  const slides = galery.querySelectorAll(".galeria__carousel-slide");
  slides.forEach((slide) => {
    observer.observe(slide);
  });
};

export default carousel;
