  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instanceFloatinActionButton = M.FloatingActionButton.init(elems);

    var elemCarou = document.querySelectorAll('.carousel');
    var options = {
      dist: 0,
      padding: 100
    };
    var instanceCarousel = M.Carousel.init(elemCarou, options);
  });



