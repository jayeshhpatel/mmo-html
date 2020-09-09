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

    $(window).scroll(function() {    
        if( $(window).scrollTop()  > 54) {
            $('.navbar-main .job-menu').removeClass('alert-arrow');
        } else {  
            if($('.main-container .notification-alert').length == 1)
            $('.navbar-main .job-menu').addClass('alert-arrow');
        }
    });

    if ($('.notification-alert').length) {
        $('.notification-alert .close').click(function(){ 
            $('.navbar-main .job-menu').removeClass('alert-arrow');
        });
    }         
    if ($('.sliding-navbar').length) {
        $('.hamburger-menu').click(function(){ 
            $('.notification-menu').removeClass('active');
            $('.sliding-navbar ul').removeClass('active'); 
            var id = $(this).attr('data-id');
            $('.sliding-navbar').find('#'+ id).addClass('active');
            if($('.hamburger.menu-opened').length == 1) {         
                $('.sliding-navbar').removeClass('sliding-navbar--open');
                $('.mask').removeClass('show');
                $('.hamburger').removeClass('menu-opened');
                $('.notification-menu').removeClass('active');
            } else if($('.hamburger.menu-opened').length == 0) {
                $('.sliding-navbar').addClass('sliding-navbar--open');
                $('.mask').addClass('show');
                $('.hamburger').addClass('menu-opened');
            }
        })
        $('.notification-menu').click(function(){ 
            $('.hamburger').removeClass('menu-opened');
            $('.sliding-navbar ul').removeClass('active'); 
            var id = $(this).attr('data-id');
            $('.sliding-navbar').find('#'+ id).addClass('active');
            if($('.notification-menu.active').length == 1) {         
                $('.sliding-navbar').removeClass('sliding-navbar--open');
                $('.mask').removeClass('show');
                $('.notification-menu').removeClass('active');
            } else {
                $('.sliding-navbar').addClass('sliding-navbar--open');
                $('.mask').addClass('show');
                $('.notification-menu').addClass('active');
            }
        })
        $('.mask').click(function(){            
            $('.sliding-navbar').removeClass('sliding-navbar--open');
            $('.mask').removeClass('show');
            $('.hamburger').removeClass('menu-opened');
            $('.notification-menu').removeClass('active');
        })        
    }

    if ($('.__wishlist-toggle').length) {
        $('.__wishlist-toggle').click(function(){ 
            if($(this).hasClass("liked")){
                $(this).html('<i class="fa fa-heart-o" aria-hidden="true"></i>');
                $(this).removeClass("liked");
              }else{
                $(this).html('<i class="fa fa-heart" aria-hidden="true"></i>');
                $(this).addClass("liked");
              }
        });
    }
    
    if ($('.filter-toggle').length) {
        $('.filter-toggle .filter-title').on('click', function(){
            $(this).toggleClass('open');
            $(this).parents('.filter-toggle').find('.filter-body').slideToggle();
        });
    }

    if ($('.sub-filter-toggle').length) {
        $('.sub-filter-toggle .sub-filter-title').on('click', function(){
            $(this).toggleClass('open');
            $(this).parents('.sub-filter-toggle').find('.sub-filter-body').slideToggle();
        });
    }
    /* Invite Page - View More Information */
    if ($('.invite-box').length) {
        $('.view-full-link').on('click', function(){
            $(this).toggleClass('active');
            $(this).parent('.job-information').find('.view-full-desc').toggleClass('active');
        });
    }


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
        //$(".btn-ripple, .btn, .custom-switch, .nav-theme .nav-link, .__wishlist-toggle, .filter-title").click(function (e) {
        $(".btn-ripple, .btn, .custom-checkbox, .custom-radio, .button-check, .custom-switch,  .nav-theme .nav-link, .__wishlist-toggle, .filter-title").click(function (e) {
        //$( "body" ).delegate( ".btn-ripple, .btn, .custom-checkbox", "click", function(e) {
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
    if ($('.custom-dropdown-select').length) {
        $(".custom-dropdown-select .dropdown-menu .select-item").click(function() {
            var selected_value = $(this).html();
            var first_li = $(this).parents('.custom-dropdown-select').find('.custom-select-label span').html(); 
            console.log(selected_value);
            console.log(first_li);
            $(this).parents('.custom-dropdown-select').find('.select-item').removeClass('selected');
            $(this).addClass('selected');
            $(this).parents('.custom-dropdown-select').find('.custom-select-label span').removeClass('text-placeholder');
            $(this).parents('.custom-dropdown-select').find('.custom-select-label span').html(selected_value);
          
          });
    }

    /* Filter Navbar in Mobile */
    if ($('.mobile-filter-nav').length) {
        $('.filter-menu').click(function(){ 
            $('.mobile-filter-nav').addClass('mobile-filter-nav--open');
            $('body').addClass('overflow-hidden');
        })        
        $('.mobile-filter--close').click(function(){ 
            $('.mobile-filter-nav').removeClass('mobile-filter-nav--open');
            $('body').removeClass('overflow-hidden');
        }) 

        $(".mobile-filter-nav nav li a").on('click', function(){		
            var parentLevel = $(this).parents('ul').length -1;
            var currentMenu = $(this).closest('ul');
            var currentListItem = $(this).parent('li');
            var parentMenu = $('.level-' + parentLevel);
            var subMenu = $(this).next('ul');

            if(currentListItem.hasClass('back')) {
                // back button hit	
                currentMenu.removeClass('active');
                parentMenu.removeClass('hidden');
            } else if (currentListItem.children('ul').length > 0) {
                // menu item has children - expand the menu
                subMenu.toggleClass('active');
                currentMenu.addClass('hidden');
            }
        });

        $(".btn.back").on('click', function(){ 
            var parentLevel = $(this).parents('ul').length -1;
            $(this).closest('ul').removeClass('active');
            $('.level-' + parentLevel).removeClass('hidden');
        });
    }

    if ($('.slider').length) {
        $('.slider').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: '50px',
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        settings: "slick",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        arrows: false,
                        centerPadding: '50px',
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        arrows: false,
                        centerPadding: '50px',
                    }
                }
            ]
        });
    }

    if ($('.form-group-label').length) {
    var input = $('.form-group-label .form-control');    
      input.focus(function(){
          $(this).parents('.form-group').addClass('focused').removeClass('has-data');
      });
      input.focusout(function(){
          $(this).parents('.form-group').removeClass('focused');
          if(this.value == "") {
              $(this).parents('.form-group').removeClass('focused');
              $(this).parents('.form-group').removeClass('has-data');
          } else {
              $(this).parents('.form-group').removeClass('focused').addClass('has-data');
          }
      });
    }
   
    /* Similer Job Sider in */
    if($('.similar-slider').length){
        $('.similar-slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                    }
                },
            ]
        });
    }
    if($('.job-description-block').length){
        $('.view-more-link').on('click', function(){
            $(this).hide();
            $('.view-more-block').slideDown();
            $('.apply-through-block').addClass('active');
            $('.match-details-block').show();
            $('.appliction-block').show();
        })

        // match-details - Popup
        if($('.mpopup-link').length){
            $('.mpopup-link a').on('click', function(){
                // $('body').addClass('overflow-hidden');   
                $('.mpopup-target').addClass('active');
            })
        }
        if($('.match-back-link').length){
            $('.mpopup-back').on('click', function(){
                // $('body').removeClass('overflow-hidden');   
                $('.mpopup-target').removeClass('active');
            })
        }

        // slider
        $slick_slider = $('.similar-job-slider');
        settings_slider = {
            dots: false,
            arrows: false,
            infinite: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                    }
                },
            ]
            // more settings
        }
        slick_on_mobile( $slick_slider, settings_slider);

        // slick on mobile
        function slick_on_mobile(slider, settings){
            $(window).on('load resize', function() {
            if ($(window).width() > 992) {
                if (slider.hasClass('slick-initialized')) {
                slider.slick('unslick');
                }
                return
            }
            if (!slider.hasClass('slick-initialized')) {
                return slider.slick(settings);
            }
            });
        };
    }

    /* Live Application */
    if ($('.live-application-dropdown').length) {
        $('.live-application-dropdown .dropdown-menu li button').on('click', function(){
            $('.application-block').removeClass('active');                 
            $("div[id=" + $(this).attr("data-id") + "]").addClass("active");
        })
    }

});