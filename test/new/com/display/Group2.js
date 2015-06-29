var Group2 = function () {

    'use strict';
    
    
    var isOpen = false;

    var view;
    
    
    var rollOverElements = [ document.getElementById( "js-feelthatshit_2k" ) , document.getElementById( "js-feelthatshit_2b" ) ,  document.getElementById( "js-feelthatshit_2g" ) , document.getElementById( "js-feelthatshit_2i"), document.getElementById( "js-feelthatshit_2d" ), document.getElementById( "js-feelthatshit_2e" )   ];
    var rollOverImages = [ "assets/group2/t_2k.jpg"                         , "assets/group2/t_2k.jpg"                          ,  "assets/group2/t_2g.jpg"                         , "assets/group2/t_2b.jpg"                      , "assets/group2/t_2e.jpg"                      , "assets/group2/t_2a.jpg" ];
    var rollOverURLs = [ "http://feel.thatsh.it/"                           , "http://feel.thatsh.it/"                          , "http://feel.thatsh.it/"                          , "http://feel.thatsh.it/"                      , "http://feel.thatsh.it/"                      , "http://feel.thatsh.it/" ];

  
    var controller;

    
    var scene;

  
    function openView() 
    {
        
       
        if( isOpen === false  )
        {
            
            addEventListeners();
            
            

        }
        
       
    }

   

    function closeView() {
        if( isOpen === true )
        {
            isOpen = false;
            removeEventListeners();
          
           
        }
    }

    function addEventListeners()
    {

    }

    function removeEventListeners()
    {

    }

    function closeComplete() {
       
       
        //completeFunction();
    }


    function initDomPointers() {
        view = document.getElementById( "js-group2");
       
        for( var i = 0 ; i < rollOverElements.length ; i ++ )
                {
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

                                TweenMax.fromTo(".feelthatshit_2d", 1, {  y: 200}, {y: -900, ease: Linear.easeNone}),
                                TweenMax.fromTo(".feelthatshit_2c", 1, {  y: 200}, {y: -900, ease: Linear.easeNone}),
                                TweenMax.fromTo(".feelthatshit_2e", 1, {  y: 600}, {y: -600, ease: Linear.easeNone}),
                                TweenMax.fromTo(".feelthatshit_2f", 1, {  y: 300}, {y: -300, ease: Linear.easeNone}),
                                TweenMax.fromTo(".feelthatshit_2a", 1, {  y: 340}, {y: -340, ease: Linear.easeNone}),
                                TweenMax.fromTo(".feelthatshit_2g", 1, {  y: 440}, {y: -440, ease: Linear.easeNone}),
                                TweenMax.fromTo(".feelthatshit_2i", 1, {  y: 240}, {y: -240, ease: Linear.easeNone}),
                                TweenMax.fromTo(".feelthatshit_2j", 1, { rotation:-40 ,  y: 640}, {rotation:80 , y: -640, ease: Linear.easeNone}),
                                TweenMax.fromTo(".feelthatshit_2k", 1, {  y: 640}, {y: -10, ease: Linear.easeNone}),
                                 TweenMax.fromTo(".feelthatshit_2b", 1, {  y: 340}, {y: -40, ease: Linear.easeNone}),
                                  TweenMax.fromTo(".feelthatshit_2h", 1, {   rotation:-190 ,  y: 740}, {rotation:190 , y: -740, ease: Linear.easeNone}),


                                
                                

                                
                                
                            ]);

                        // build scene
             scene = new ScrollMagic.Scene({triggerElement: ".group2", duration: view.clientHeight , triggerHook: "onCenter" })
                                        .setTween(tween)
                                       // .addIndicators() // add indicators (requires plugin)
                                        .addTo(controller);
/*
            
            var tween = new TimelineMax ()
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

