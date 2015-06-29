var Group8 = function () {

    'use strict';
    
    
    var isOpen = false;

    var view;
    
     var rollOverElements = [ document.getElementById( "js-feelthatshit_8d" ) , document.getElementById( "js-feelthatshit_8c" ) ,  document.getElementById( "js-feelthatshit_8b" )  ,document.getElementById( "js-feelthatshit_8a" ) ];
    var rollOverImages = [ "assets/group8/t_8d.jpg"                         , "assets/group8/t_8c.jpg"                          ,  "assets/group8/t_8b.jpg"                        ,  "assets/group8/t_8a.jpg"];
    var rollOverURLs = [ "http://feel.thatsh.it/"                           , "http://feel.thatsh.it/"                          , "http://feel.thatsh.it/"                          , "http://feel.thatsh.it/"];

    
  
    var controller;

    var scene;
    

  
    function openView() 
    {
        
       
        if( isOpen === false  )
        {
            
            addEventListeners();
            /*
            TweenMax.set(".hero",  { backgroundColor: "#442e2e" })
            TweenLite.to( skullShadow, 1 , { opacity:.5, delay:.5} )
            TweenLite.to( skull, 1 , { opacity:.5, delay:.5} )
            TweenLite.to( headerWrapper, 1 , { opacity:1, delay:.7} )
            TweenLite.set( whiteAboutModule, { opacity:0} )
            TweenLite.to( whiteAboutModule, .5 , { top:-100, opacity:1 , delay:1} )
            */
            

        }
        
       
    }

   

    function closeView() {
        if( isOpen === true )
        {
            isOpen = false;
            removeEventListeners();
          
           
        }
    }

    function closeComplete() {
       
       
        //completeFunction();
    }


     function initDomPointers() {
        view = document.getElementById( "js-group8");
       
        for( var i = 0 ; i < rollOverElements.length ; i ++ )
                {
                    trace( i + "i ")
                    var btn = rollOverElements[i]
                    btn.id = i;
                    btn.addEventListener( "mouseenter" , mouseOverEventHandler )
                    btn.addEventListener( "mouseleave" , mouseOutEventHandler )
                    btn.addEventListener( "mousedown" , linkThatShit )
                    
                    btn.style.cursor = "pointer"
                }

        
    }

    
    function mouseOverEventHandler( e ) {
        trace( "mouseOverEventHandler")
        var id = e.currentTarget.id;
        var el = rollOverElements[id]
        TweenLite.to( el , .3,  {  scale:.9 })
        HolyShirtRollOverView.openView( e.currentTarget , rollOverImages[id])
    }

    function mouseOutEventHandler( e ) {
        trace( "mouseOUUUTEventHandler")
        var id = e.currentTarget.id;
        var el = rollOverElements[id]
        TweenLite.to( el , .3,  {  scale:1 })
        HolyShirtRollOverView.closeView()
    }

    function linkThatShit( e ) {
        var id = e.currentTarget.id;
        window.open( rollOverURLs[id] , "blank" );
    }

    

  
    function addEventListeners()
    {

    }

    function removeEventListeners()
    {

    }

   


    
    function getIsOpen()
    {
        return isOpen;
    }

   
    function resizeEvent( w , h )
    {
        scene.duration( view.clientHeight )
      // view.style.height = h-100 + "px"
    }

   

   

   
    function init( controller_ ) {

            controller = controller_;
            initDomPointers();

  
         
            var tween = new TimelineMax ()
                            .add([

                                TweenMax.fromTo(".feelthatshit_8b", 1, {  y: 600}, {y: -600, ease: Linear.easeNone}),
                                TweenMax.fromTo(".feelthatshit_8c", 1, {  y: 100}, {y: -100, ease: Linear.easeNone}),
                                TweenMax.fromTo(".feelthatshit_8a", 1, {  y: 300}, {y: -300, ease: Linear.easeNone}),
                                TweenMax.fromTo(".feelthatshit_8d", 1, {  y: 50}, {y: -300, ease: Linear.easeNone}),
                                TweenMax.fromTo(".feelthatshit_8e", 1, {  y: 0}, {y: -400, ease: Linear.easeNone}),
                                TweenMax.fromTo(".feelthatshit_8f", 1, {  y: 0}, {y: -300, ease: Linear.easeNone}),
                                TweenMax.fromTo(".feelthatshit_8g", 1, {  y: 0}, {y: -500, ease: Linear.easeNone})
                               
                                
                                
                                

                                
                                
                            ]);

                        // build scene
             scene = new ScrollMagic.Scene({triggerElement: ".group8", duration: view.clientHeight , triggerHook: "onCenter" })
                                        .setTween(tween)
                                       // .addIndicators() // add indicators (requires plugin)
                                         .addTo(controller);

       /*     var tween = new TimelineMax ()
                            .add([
                                TweenMax.to(".skullShadow", .5, {y: "170", z:.01  ,scaleX:1.2 , scaleY:1.2, opacity:.4}),
                                TweenMax.to(".skull", .5, { y: "150" , z:.01 , opacity:1  , scaleX:1.2 , scaleY:1.2})
                               

                            ]);

            // build scene
            var scene = new ScrollMagic.Scene({triggerElement: ".hero",  offset: 60 , triggerHook:0})
                            .setTween(tween)
                          //  .setPin("#parallaxContainer")
                           // .addIndicators({ name: "hero skull" }) // add indicators (requires plugin)
                            .addTo(controller);

            var tween = new TimelineMax ()
                            .add([
                                TweenMax.to(".heroHeaderWrapper", .5, {y: "260", z:.01 , opacity:.4})
                                

                            ]);

            // build scene
            var scene = new ScrollMagic.Scene({triggerElement: ".hero",  offset: 60 , triggerHook:0})
                            .setTween(tween)
                          //  .setPin("#parallaxContainer")
                           // .addIndicators({ name: "hero type" }) // add indicators (requires plugin)
                            .addTo(controller);


            var tween = new TimelineMax ()
                            .add([
                                 TweenMax.to(".hero", 1, { backgroundColor: "#333333" })
                                

                            ]);

            // build scene
            var scene = new ScrollMagic.Scene({triggerElement: ".hero",  offset: 60 , triggerHook:0})
                            .setTween(tween)
                          //  .setPin("#parallaxContainer")
                          //  .addIndicators({ name: "hero type" }) // add indicators (requires plugin)
                            .addTo(controller);


           */



       
    }

   


    


    return {

        // return getter and setter methods, no varibales, variables are accessible through getter and setter funtion listed in the return object ONLY!
        openView: openView,
        closeView: closeView,
        resizeEvent: resizeEvent, 
       
        init: init
        
        
    };
}

