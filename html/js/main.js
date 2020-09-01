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
        })
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

    if ($('.mobile-filter-nav').length) {
        $('.filter-menu').click(function(){ 
            $('.mobile-filter-nav').addClass('mobile-filter-nav--open');
            $('body').addClass('overflow-hidden');
        })        
        $('.mobile-filter--close').click(function(){ 
            $('.mobile-filter-nav').removeClass('mobile-filter-nav--open');
            $('body').removeClass('overflow-hidden');
        })        
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
        $(".btn-ripple, .btn, .custom-checkbox, .custom-radio, .button-check, .custom-switch,  .nav-theme .nav-link").click(function (e) {
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
            $(this).parents('.custom-dropdown-select').find('.custom-select-label span').html(selected_value);
          
          });
    }


   

});