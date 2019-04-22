$(function() {

  var header = $("#header"),
      introH = $("#intro").innerHeight(),
      scrollOffset = $(window).scrollTop();

      /*fixed scroll*/
  checkScroll(scrollOffset);

  $(window).on("scroll", function() {

    scrollOffset = $(this).scrollTop();

   checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  /*smooth scroll*/
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data("scroll"),
        blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({
      scrollTop: blockOffset
    }, 700);
  });

  /*menu nav toggle*/

  $("#nav_toggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });

  //accordion
  $("[data-collapse]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('collapse');

    $(blockId).slideToggle();
  });


  //slider
  $("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });
    
});