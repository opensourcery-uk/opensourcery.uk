/* activate scrollspy menu */
$('body').scrollspy({
  target: '#navbar-collapsible',
  offset: 52
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

new WOW().init();

/* var bcf_settings = { buttonText:'Contact Us', buttonTop:'30%', language:'en_US' }; // Better Contact Form Settings */
(function (d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0]; js = d.createElement(s); js.id = id;
js.src = "//bettercontactform.com/contact/media/e/3/e3b81f35d0a8622e36c1b6cafec9334b3908e538.js";
fjs.parentNode.insertBefore(js, fjs);
}(document, "script", "bcf-render"));
