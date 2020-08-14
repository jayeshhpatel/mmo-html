/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip()

    $("[data-toggle=popover]").popover({
        html : true,
        trigger: 'click',
        content: function() {
            var content = $(this).attr("data-popover-content");
            return $(content).children(".popover-body").html();
        }
    });


    /* Login - Password */
    if ($('.toggle-password').length) {
        $(".toggle-password").click(function() {
                $(this).toggleClass("_hide");
                var input = $($(this).attr("data-toggle"));
            if (input.attr("type") == "password") {
                input.attr("type", "text");
                $(this).find(".fa").removeClass("fa-eye-slash").addClass("fa-eye");
            } else {
                input.attr("type", "password");
                $(this).find(".fa").removeClass("fa-eye").addClass("fa-eye-slash");
            }
        });
    }

   /* CSS3 ripple Animation effect in Button */
    if ($(".btn, .btn-ripple").length) {
        //$(".btn-ripple").click(function (e) {
        $( "body" ).delegate( ".btn-ripple, .btn", "click", function(e) {
        // Remove any old one
        $(".ripple").remove();
        
            // Setup
            var posX = $(this).offset().left,
                posY = $(this).offset().top,
                buttonWidth = $(this).width(),
                buttonHeight =  $(this).height();
            
            // Add the element
            $(this).prepend("<span class='ripple'></span>");
            
            // Make it round!
            if(buttonWidth >= buttonHeight) {
                buttonHeight = buttonWidth;
            } else {
                buttonWidth = buttonHeight; 
            }
            
            // Get the center of the element
            var x = e.pageX - posX - buttonWidth / 2;
            var y = e.pageY - posY - buttonHeight / 2;
            
            // Add the ripples CSS and start the animation
            $(".ripple").css({
                width: buttonWidth,
                height: buttonHeight,
                top: y + 'px',
                left: x + 'px'
            }).addClass("rippleEffect");
        });
    } 

    /* Fixed Header - light header */
	if ($('.sticky-header').length) {
        var wheight = $( window ).height();
        var hheight = $('.sticky-header').outerHeight();
        var dheight = $( document ).height();
        if(dheight > (wheight+hheight)) {
            var stickyHeaderTop = $('.sticky-header .menu-header').offset().top;
            $(window).scroll(function() {
                if($(this).scrollTop() > stickyHeaderTop){
                    $("body").addClass("is--fixed");
                    $(".sticky-header .menu-header").addClass("is-fixed");
                }
                else if($(this).scrollTop() <= stickyHeaderTop){
                    $("body").removeClass("is--fixed");
                    $(".sticky-header .menu-header").removeClass("is-fixed");
                }
            });
            $(window).scroll();
        }
    }
    

    /* Show/Hide Div with  [data-related]*/
    $('[data-related]').on("click", function(e) {
        e.preventDefault();
        $("[id=" + $(this).attr("data-related") + "]").addClass("active");
        $("._showhide").hide();
        $("[id=" + $(this).attr("data-related") + "]").fadeIn(1200);
        return false;
    });

    /* Slider - Card View */
    if ($('.card-slider').length) {
        $('.card-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            focusOnSelect: false,
            infinite: true,
            responsive: [
                {
                  breakpoint: 1300,
                  settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 4
                  }
                },
                {
                    breakpoint: 1280,
                    settings: {
                      arrows: false,
                      dots: true,
                      slidesToShow: 3
                    }
                },
                {
                  breakpoint: 1024,
                  settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: true,
                    centerPadding: '80px',
                  }
                },
                {
                    breakpoint: 767,
                    settings: {
                      arrows: false,
                      dots: true,
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      centerMode: true,
                      centerPadding: '50px',
                    }
                  },
                {
                    breakpoint: 600,
                    settings: {
                      arrows: false,
                      dots: true,
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      centerMode: true,
                      centerPadding: '50px',
                    }
                  },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '50px',
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
        });
    }


    /* FAQs */
    if($('.faq-container').length) {
        $('.faq-action').click(function(j) {
            var dropDown = $(this).closest('.faq-container').find('.faq-box-body');
            $('.faq-container').find('.faq-box-body').not(dropDown).slideUp();
            
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).closest('.faq-container').find('.faq-box-header').removeClass('active');
            } else {
                $(this).closest('.faq-container').find('.faq-action.active').removeClass('active');
                $(this).addClass('active');
                $(this).closest('.faq-container').find('.faq-box-header').addClass('active');
            }

            var faqtop = $(this).closest('.faq-container');
            var offsetMenu = $('.navbar-mainmenu').height();
            dropDown.stop(false, true).slideToggle(500,"swing", function(){
                $('html,body').animate({
                    scrollTop: faqtop.offset().top-offsetMenu-30
                }, 300);
            });
            j.preventDefault();
        });
    }

    /* Collapse +/- */
    if($('.collapse-container').length) {
        $('.collapse-action').click(function(j) {
            var dropDown = $(this).closest('.collapse-container').find('.collapse-box-body');
            $('.collapse-container').find('.collapse-box-body').not(dropDown).slideUp();
            
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).closest('.collapse-container').find('.collapse-box-header').removeClass('active');
            } else {
                //$(this).closest('.collapse-container').find('.collapse-action.active').removeClass('active');
                $(this).addClass('active');
                $(this).closest('.collapse-container').find('.collapse-box-header').addClass('active');
            }

            var collapsetop = $(this).closest('.collapse-container');
            var offsetMenu = $('.navbar-mainmenu').height();
            dropDown.stop(false, true).slideToggle(500,"swing", function(){
                $('html,body').animate({
                    scrollTop: collapsetop.offset().top-offsetMenu-30
                }, 300);
            });
            j.preventDefault();
        });
    }

});