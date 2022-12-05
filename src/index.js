document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".menu__btn").forEach(item => {
        item.addEventListener("click", function() {
            let btn = this;
            let dropdown = this.parentElement.querySelector(".menu__dropdown");

            document.querySelectorAll(".menu__btn").forEach(el => {
                if (el !== btn) {
                    el.classList.remove("active--btn");
                }
            });

            document.querySelectorAll(".menu__dropdown").forEach(el => {
                if (el !== dropdown) {
                    el.classList.remove("dropdown_active");
                }
            })
            dropdown.classList.toggle("dropdown_active");
            btn.classList.toggle("active--btn")
        })
    })

    document.addEventListener("click", function(e) {
        let target = e.target;
        if (!target.closest(".extra-row__menu")) {
            document.querySelectorAll(".menu__dropdown").forEach(el => {
                el.classList.remove("dropdown_active");
            })
            document.querySelectorAll(".menu__btn").forEach(el => {
                el.classList.remove("active--btn");
            });
        }
    });

    const selectElement = document.querySelector('#gallery-filter');
    const choices = new Choices(selectElement, {
        searchEnabled: false,
        shouldSort: false,
        placeholder: false,
    });

    const accordionItems = document.querySelectorAll('.accordion__item')

    accordionItems.forEach((item) => {
        item.addEventListener('click', () => {
            accordionItems.forEach((el) => {
                el.open = false;
            });
            this.open = true;
        })
    })

    const sliderGallery = document.querySelector('.gallery__swiper');
    const sliderEvents = document.querySelector('.events__swiper');
    const sliderProjects = document.querySelector('.projects__partners');

    const gallerySwiper = new Swiper(sliderGallery, {
        slidesPerView: 1,

        loop: true,

        navigation: {
            nextEl: '.gallery__swiper .swiper-navy .swiper-button-next',
            prevEl: '.gallery__swiper .swiper-navy .swiper-button-prev',
        },

        pagination: {
            el: '.gallery__swiper .swiper-navy .swiper-pagination',
            type: 'fraction',
        },

        breakpoints: {
            500: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 34,
            },

            1700: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50,
            },
        },
    });

    const eventsSwiper = new Swiper(sliderEvents, {
        slidesPerView: 3,
        loop: false,
        spaceBetween: 50,

        navigation: {
            nextEl: '.events__container .swiper-button-next',
            prevEl: '.events__container .swiper-button-prev',
        },

    });

    const projectsSwiper = new Swiper(sliderProjects, {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 50,

        navigation: {
            nextEl: sliderProjects.previousElementSibling,
            prevEl: sliderProjects.nextElementSibling,
            // nextEl: '.projects__partners .swiper-button-next',
            // prevEl: '.projects__partners .swiper-button-prev',
        },

    });

    ymaps.ready(init);

    function init() {

        const myMap = new ymaps.Map("map", {
            center: [55.758477143701604,37.601175001240634],
            zoom: 14
        });

        const myGeoObject = new ymaps.GeoObject({});

        const myPlacemark = new ymaps.Placemark([55.758477143701604,37.601175001240634], {}, {
            iconLayout: 'default#image',
            draggable: true,
            iconImageHref: 'img/marker.svg',
            iconImageSize: [30, 42],
            iconImageOffset: [0, -42]
        });

        myMap.geoObjects.add(myGeoObject);
        myMap.geoObjects.add(myPlacemark);
    }

    window.addEventListener('resize', () => {
        gallerySwiper.update();
        eventsSwiper.update();
        projectsSwiper.update();
    });

    document.querySelector('.hero__btn').addEventListener('click', () => {
        console.log('button')
        window.scrollTo({
            behavior: "smooth",
            top: 5061});
    });

})