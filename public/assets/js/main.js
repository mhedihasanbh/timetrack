//jquery
$(document).ready(function(){
  
  //select2
  
   // $('.js-example-basic-multiple').select2();
   
   //lightbox image]
  window.onload = function(){
   //image light box plugin
   $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      }
    }
  });
   
 
 
 //sidebar toggle
 $("#dropDown").click(function(){
   $('.side-dropdown').removeClass("side-dropdown");
 });
 
 $("#toggleSidebar").click(function(){
 $(".left-menu").toggleClass("hide");
 $(".content-wrapper").toggleClass("hide");
 })
 
  }
 });
 
 
  
 










 




