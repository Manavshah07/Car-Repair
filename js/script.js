///**
// * scripts.js
// * Contains Script for basic static website named "Home-car Repair"
// */


/****************************************************************************************************************************************************************
                                                                SERVICES SECTION
****************************************************************************************************************************************************************/
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


/****************************************************************************************************************************************************************
                                                                CLIENT SECTION
****************************************************************************************************************************************************************/
$(document).ready(function(){
    $("#clients").owlCarousel({
        items:9,
        autoplay:true,
        loop:true,
        nav:false,
        autoplayHoverPause:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            380:{
                items:1
            },
            760:{
                items:3
            }
        }
    });
});


/****************************************************************************************************************************************************************
                                                                SERVICES SECTION
****************************************************************************************************************************************************************/
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


/****************************************************************************************************************************************************************
                                                                SMOOTH SCROLL
****************************************************************************************************************************************************************/

$(function(){
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();
        var section_id = $(this).attr("href");
        $("html,body").animate({
            scrollTop:$(section_id).offset().top +50
        },1250,"easeInOutExpo")
    });
});

$(document).ready(function(){ 
		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 100) { 
				$('#back-to-top').fadeIn(); 
			} else { 
				$('#back-to-top').fadeOut(); 
			} 
		}); 
		$('#back-to-top').click(function(){ 
			$("html, body").animate({ scrollTop: 0 }, 600); 
			return false; 
		}); 
	});

/****************************************************************************************************************************************************************
                                                                NAVBAR RESPONSIVE
****************************************************************************************************************************************************************/
const burger = document.getElementsByClassName('burger')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]

burger.addEventListener('click',function(){
    navbarlinks.classList.toggle('active')
});

//burger animation
burger.addEventListener('click',function(){
   burger.classList.toggle('toggle'); 
});



































	