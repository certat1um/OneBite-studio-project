$(document).ready(() => {

   let position = 0; // current position among slides
   // const slidesToShow = 1;
   const slidesToScroll = 1;
   const container = $('.slider-container');
   const track = $('.slider-track');
   const slide = $('.slider-item');

   const btnPrev = $('.btn-prev');
   const btnNext = $('.btn-next');
   
   const amountOfSlides = $(".slider-track").children().length;
   const slideWidth = slide.outerWidth() + 50 * 2;
   const movePos = slideWidth * slidesToScroll;
   console.log(slideWidth);
   function checkPos() {
      let trackWidth = slideWidth * amountOfSlides - slideWidth;
         // Next:
      if (position < -trackWidth) {
         position = -trackWidth;
         // Prev:
      } else if (position > 0) {
         position = 0;
      }

      track.css({
         transform: `translateX(${position}px)`,
      });
   }

   btnPrev.click(() => {
      position += movePos;
      checkPos();

      track.css({
         transform: `translateX(${position}px)`,
      });
   });

   btnNext.click(() => {
      position -= movePos;
      checkPos(); 

      track.css({
         transform: `translateX(${position}px)`,
      });
   });

});