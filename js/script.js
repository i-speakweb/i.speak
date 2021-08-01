const swiper = new Swiper('.cursos__contenedor',{
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 37,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: false,
    pagination:{
        el: ".pag_cursos",
        clickeable: true,
    },
    navigation: {
        nextEl: ".next_cursos",
        prevEl: ".prev_cursos",
    }
})

const swiper2 = new Swiper('.empresas__cards', {
    centeredSlides: true,
    slidesPerView: 8,
    spaceBetween: 40,
    slidesPerGroup: 1,
    loop: true,
    autoplay:{
        delay: 2000,
        disableOnInteraction: false,
    },
    loopFillGroupWithBlank: false,
    pagination:{
        el: ".pag_empresas",
        clickeable: true,
    },
    navigation: {
        nextEl: ".next_empresas",
        prevEl: ".prev_empresas",
    }
})

const swiper3 = new Swiper('.alumnos__cards', {
    centeredSlides: true,
    slidesPerView: 8,
    spaceBetween: 40,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: false,
    pagination:{
        el: ".pag_alumnos",
        clickeable: true,
    },
    navigation: {
        nextEl: ".next_alumnos",
        prevEl: ".prev_alumnos",
    }
})
