$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        }else{
            $(".navbar").removeClass("sticky");
        }
    });

    // Palanca (toggle) para el boton menu
    $(".menu-btn").click(function(){
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");//poner el X
    });

});