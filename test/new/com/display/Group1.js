var Group1 = function () {

    'use strict';
    
    
    var isOpen = false;

    var view;
    var scene;
    
    
  
    var controller;

    
    var rollOverElements = [ document.getElementById( "js-feelthatshit_1a" ) , document.getElementById( "js-feelthatshit_1c" )  ,  document.getElementById( "js-feelthatshit_1i" )  , document.getElementById( "js-feelthatshit_1f" )  ];
    var rollOverImages =   [ "assets/group1/t_1a.jpg"                           , "assets/group1/t_1f.jpg"                      ,  "assets/group1/t_1i.jpg"                         , "assets/group1/t_1b.jpg" ];
    var rollOverURLs =      [ "http://feel.thatsh.it/"                          ,  "http://feel.thatsh.it/"                     , "http://feel.thatsh.it/"                          , "http://feel.thatsh.it/"];

  
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
        view = document.getElementById( "js-group1");
       
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

                                TweenMax.fromTo(".feelthatshit_1a", 1, {  y: 75}, {y: -75, ease: Linear.easeNone}),

                                TweenMax.fromTo(".feelthatshit_1e", 1, {  y: 75}, {y: -75, ease: Linear.easeNone}),


                                TweenMax.fromTo(".feelthatshit_1b", 1, { y: 200}, {y: -200, ease: Linear.easeNone}),
                                TweenMax.fromTo(".feelthatshit_1c", 1, {  y: 200}, {y: -200, ease: Linear.easeNone}),
                                TweenMax.fromTo(".feelthatshit_1d", 1, {  y: 400}, {y: -400, ease: Linear.easeNone}),

                                TweenMax.fromTo(".feelthatshit_1i", 1, {  y: 600}, {y: -600, ease: Linear.easeNone}),


                                TweenMax.fromTo(".feelthatshit_1f", 1, {  y: 300}, {y: -300, ease: Linear.easeNone}),
                                TweenMax.fromTo(".feelthatshit_1g", 1, {rotation: -20,   y: 100}, {y: -100, rotation: 20, ease: Linear.easeNone}),
                                TweenMax.fromTo(".feelthatshit_1h", 1, {rotation: -20,   y: 200}, {y: -200, rotation: 20, ease: Linear.easeNone}),
                                TweenMax.fromTo(".feelthatshit_1j", 1, {    y: 100}, {y: -100, ease: Linear.easeNone})

                                
                                
                            ]);

                        // build scene
             scene = new ScrollMagic.Scene({triggerElement: ".group1", duration: view.clientHeight  })
                                        .setTween(tween)
                                      //  .addIndicators() // add indicators (requires plugin)
                                        .addTo(controller);

         



       
    }

   


    


    return {

        // return getter and setter methods, no varibales, variables are accessible through getter and setter funtion listed in the return object ONLY!
        openView: openView,
        closeView: closeView,
        resizeEvent: resizeEvent, 
       
        init: init
        
        
    };
}

