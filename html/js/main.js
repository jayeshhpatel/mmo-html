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

    if ($('.sliding-navbar').length) {
        $('.hamburger-menu').click(function(){
            $('.sliding-navbar').toggleClass('sliding-navbar--open');
            $('.mask').toggleClass('show')
            $('.hamburger').toggleClass('menu-opened');
        });
        $('.mask').click(function(){            
            $('.sliding-navbar').removeClass('sliding-navbar--open');
            $('.mask').removeClass('show');
            $('.hamburger').removeClass('menu-opened');
        })
    }
    if($('.notification-menu').length) {         
        $('.notification-menu').click(function(){
            $(this).toggleClass('active');
            $('.notification-bar').toggleClass('notification-bar--open');
            $('.mask').toggleClass('show')
        });
        $('.mask').click(function(){  
            $(this).removeClass('active');          
            $('.notification-bar').removeClass('notification-bar--open');
            $('.mask').removeClass('show');
        })
    }
    if($('.filter-box').length) { 
        $('.filter-box .filter-title .arrow').on('click', function(){
            $(this).toggleClass('open');
            $(this).parents('.filter-box').find('.filter-body').slideToggle();
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