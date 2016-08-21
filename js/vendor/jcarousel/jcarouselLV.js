var $thumbs = $('#thumb-carousel'); //variables
       
       
       function slideshowInit(){
       //slideshow
       $thumbs.wrap('<div id="stage-wrap"></div>');
       $('#stage-wrap').prepend('<div id="slideshow-next"></div><div id="slideshow-prev"></div><div id="stage"></div>');
       
       var $stage = $('#stage');
       $stage.css('opacity');
       var $imageLinks = $thumbs.find('a');
       var $src;
       
       $imageLinks.each(function(i){
       //
       $src= $(this).attr('href');
       var $img = $('<img/>',{ src: $src, css:{display:'none'}, class:'outdoorShadow'  });
       //$img.addClass('innerShadow');
       $img.appendTo($stage);
       });//imageLinks
       $stage.css('opacity',1);
       
       $imageLinks.bind('click', function(){
       var index = $(this).data('index');
     $(this).parents('li').addClass('current').siblings('.current').removeClass('current');
       
       var nextImage = $stage.find('img:eq(' + index +') ');
       $stage.find('img.active').fadeOut().removeClass('.active');
       nextImage.fadeIn().addClass('active');
       return false;
       })
       .filter(':first').click();//endbindImg
       }//endSlide
       
       
/*action carousel vertical*/
$(document).ready(function(){
       //si plus que mobil                
       if( $( window ).width() > 500 ){
       
       
       //ajout de la classe pour action carousel
       $('div.toto').addClass('jcarousel-skin-tango').removeClass('noCarousel');
  
       //creation de lien image si >580px
       /*$('li').each(function(index){
            $(this).wrapInner('<a href="images/ac_slides/ac'+ index +'.jpg" ></a>');
        });
        */
       // recuperation de src pour l'attribuer à href
       $('#thumb-carousel img').each(function(){
          $(this).wrap('<a href="'+$(this).attr('src')+'">','</a>');
       });
       //
       $thumbs.find('a').each(function(index){
       $(this).data('index', (index));
       });//endfind
       
       slideshowInit();
       
       //action jcarousel  
       $thumbs.jcarousel(
               {
               vertical:true,
               wrap: 'circular',
               animation: 1500,
               auto: 2
               }
           );
       }//endWidth
});//endready
