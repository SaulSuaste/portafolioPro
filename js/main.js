$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        }else{
            $(".navbar").removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
        }else{
            $(".scroll-up-btn").removeClass("show");
        }
    });

    // animacion de boton scroll up
    $(".scroll-up-btn").click(function(){
        $("html").animate({scrollTop: 0})
    });

    // Palanca (toggle) para el boton menu
    $(".menu-btn").click(function(){
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");//poner el X
    });


    // Cambio de palabrasen inicio
    var typed = new Typed(".typing", {
        strings: ["Front Developer","Desarrollador", "Diseñador WEB", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Cambio de palabras en acerca de
    var typed = new Typed(".typing2", {
        strings: ["Front Developer","Desarrollador", "Diseñador WEB", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl Carousel
    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut:2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

});