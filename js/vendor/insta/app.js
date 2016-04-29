
$(document).ready(function(){
 
   //instafeed
   //Set up instafeed
   var userFeed = new Instafeed({
        userId : '2112923378',
        clientId: 'a26d284ad1224ceda0d9ce93447ce780',
        target: 'instafeed',
        get: 'tagged',
        tagName: 'LILYBURGER',
        links: true,
        limit: 1,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        
        template: '<div class="innerShadow" ><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a></div></div>'
   });
   userFeed.run();
    
});
