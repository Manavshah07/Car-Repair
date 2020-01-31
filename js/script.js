///**
// * scripts.js
// * Contains Script for basic static website named "Home-car Repair"
// */


/*****************************************************************************************************************************************************************
                                                                SERVICES SECTION
*****************************************************************************************************************************************************************/
$(document).ready(function(){
    $("#service-wrapper").magnificPopup({
        delegate:'a',
        type:'image',
        mainClass: 'mfp-fade',
//        mainClass: 'mfp-img-mobile'
        gallery:{
            enabled:true,
            navigateByImgClick: true,
            preload: [1,2]
        },
        zoom:{
            enabled:true,
            duration:300,
            easing:'ease-in-out',
            opener:function(openerElement){
                return openerElement.is('img') ? openerElement:openerElement.find('img');
            }
        }
    })
});


/*****************************************************************************************************************************************************************
                                                                CLIENT SECTION
*****************************************************************************************************************************************************************/
$(document).ready(function(){
    $("#clients").owlCarousel({
        items:1,
        autoplay:true,
        loop:true,
        nav:false,
        autoplayHoverPause:true,
        dots:true
    });
});


/*****************************************************************************************************************************************************************
                                                                SERVICES SECTION
*****************************************************************************************************************************************************************/
$(document).ready(function(){
    $("#about-service-wrapper").magnificPopup({
        delegate:'a',
        type:'image',
        mainClass: 'mfp-fade',
//        mainClass: 'mfp-img-mobile'
        gallery:{
            enabled:true,
            navigateByImgClick: true,
            preload: [1,2]
        },
        zoom:{
            enabled:true,
            duration:300,
            easing:'ease-in-out',
            opener:function(openerElement){
                return openerElement.is('img') ? openerElement:openerElement.find('img');
            }
        }
    })
});