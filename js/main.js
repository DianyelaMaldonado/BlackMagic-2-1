document.addEventListener('DOMContentLoaded', function() {
    slickSlider();
    const puzzles = document.querySelectorAll('.puzzle-trigger');
    puzzles.forEach((puzzle) => {
        puzzle.addEventListener('click', expandPuzzle);
    })
});

function expandPuzzle(clickedPuzzle){
    let target = clickedPuzzle.target.dataset.target;
    showDescription(target);
    $('.slider__slick').slick('resize'); 
}

function showDescription(target){
    var divTarget = document.getElementsByClassName(target);
    for (var i = 0; i < divTarget.length; i ++) {
        divTarget[i].style.display = 'block';
    }
}

function slickSlider() {
    $('.slider__slick').slick(
      {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 300,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding: '50px',
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding: '50px',
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '40px',
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '40px',
              }
            }
          ]
      }
    );
}