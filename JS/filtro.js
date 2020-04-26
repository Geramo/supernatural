$(function(){
    $('.filter').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if(valor == 'todos'){
            $('.cont-work').show('1000');
        }else{
            $('.cont-work').not('.'+ valor).hide('1000');
            $('.cont-work').filter('.'+ valor).show('1000');
        }
    });

    let personajes = $('#personajes').offset().top;
        informaciongeneral = $('#informaciongeneral').offset().top;
        galeria = $('#galeria').offset().top;
        contacto = $('#contacto').offset().top;

        window.addEventListener('resize', function(){
            let personajes = $('#personajes').offset().top;
            informaciongeneral = $('#informaciongeneral').offset().top;
            galeria = $('#galeria').offset().top;
            contacto = $('#contacto').offset().top;
        });

        $('#enlace-personajes').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: personajes -100
            },600);
        });

        $('#enlace-informaciongeneral').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: informaciongeneral -100
            },600);
        });

        $('#enlace-galeria').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: galeria -100
            },600);
        });

        $('#enlace-contacto').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: contacto -100
            },600);
        });
});