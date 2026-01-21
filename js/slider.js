document.querySelectorAll(".netflix-row").forEach(row => {
  new Swiper(row, {
    slidesPerView: 6,
    spaceBetween: 12,
    navigation: {
      nextEl: row.querySelector(".swiper-button-next"),
      prevEl: row.querySelector(".swiper-button-prev")
    },
    breakpoints: {
      0: { slidesPerView: 2 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 6 }
    }
  });
});
