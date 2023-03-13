$(document).ready(function(){
    let owl = $(".owl-carousel")
    owl.owlCarousel({
        items:3,
        loop:true,
        margin:30,
    });
// Go to the next item
    $('.owl-prev').click(function() {
        owl.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.owl-next').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel');
    })
});