

$(document).ready(function (){

              $(window).scroll(function () {
                if ($(window).scrollTop() > 280) {
                  $('.navbar').removeClass('is-fixed-top');
                  $('.uparrowframe').show();
                }
                if ($(window).scrollTop() < 281) {
                  $('.navbar').addClass('is-fixed-top');
                  $('.uparrowframe').hide();
                }
            });

            (function() {
                var burger = document.querySelector('.burger');
                var menu = document.querySelector('#'+burger.dataset.target);
                burger.addEventListener('click', function() {
                    burger.classList.toggle('is-active');
                    menu.classList.toggle('is-active');
                });
            })();

            $(".navbar-item").click(function (){
                var gotoelement = $(this).attr("targett")
               $('html, body').animate({
                   scrollTop: $("#"+gotoelement).offset().top
               }, 2000);
           });
            console.log("done")
        });
