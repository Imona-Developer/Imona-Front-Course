/*=============== SHOW MENU ===============*/
    const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

    /* MENU SHOW */
       // validate if constant exists
    if(navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }

    /* MENU HIDDEN */
    // validate if constant exists
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    }

    /*=============== REMOVE MENU MOBILE ===============*/
   const navlink = document.querySelectorAll('.nav__link')

   

    /*=============== SWIPER WACTHES ===============*/

    const swiperWatches = new Swiper('.home__swiper', {
        loop: true,
        spaceBetween: 32,
        grabCursor: true,
        effect: 'creative',
        creativeEffect: {
            prev: {
                transiate: [-100, 0, -500],
                rotate: [0, 0, 15,],
                opacity: 0
            },
            next: {
                transiate: [100, 0, -15],
                rotate: [0, 0, 15,],
                opacity: 0
            },
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    })


    /*=============== GSAP ANIMATION ===============*/
    gsap.from('.home__images', 1.5, { opacity: 0, y: 150, delay: .1 })
    gsap.from('.home__data', 1.8, { opacity: 0, x: -100, delay: .8 })
    gsap.from('.home__info', 1.8, { opacity: 0, x: -100, delay: 1 })

})  