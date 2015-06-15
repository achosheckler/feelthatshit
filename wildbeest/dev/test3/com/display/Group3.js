var Group3 = function () {

    'use strict';
    
    
    var isOpen = false;

    var view;
    
    //http://wildebee.st/dev/test/
    var rollOverElements = [ document.getElementById( "js-feelthatshit_3b" ) , document.getElementById( "js-feelthatshit_3f" ) ,  document.getElementById( "js-feelthatshit_3h" )  ,document.getElementById( "js-feelthatshit_3c" ) ];
    var rollOverImages = [ "assets/group3/t_3b.jpg"                         , "assets/group3/t_3f.jpg"                          ,  "assets/group3/t_3h.jpg"                        ,  "assets/group3/t_3a.jpg"];
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
        view = document.getElementById( "js-group3");
       
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

                                TweenMax.fromTo(".feelthatshit_3b", 1, {  y: 600}, {y: -600, ease: Linear.easeNone}),
                                TweenMax.fromTo(".feelthatshit_3c", 1, {  y: 200}, {y: -200, ease: Linear.easeNone}),  
                                TweenMax.fromTo(".feelthatshit_3d", 1, {  y: 400}, {y: -400, ease: Linear.easeNone}),
                                TweenMax.fromTo(".feelthatshit_3e", 1, {  y: 300}, {y: -300, ease: Linear.easeNone}), 
                                TweenMax.fromTo(".feelthatshit_3f", 1, {  y: 200}, {y: -200, ease: Linear.easeNone}),    
                                TweenMax.fromTo(".feelthatshit_3a", 1, {  y: 450}, {y: -450, ease: Linear.easeNone}), 
                                TweenMax.fromTo(".feelthatshit_3g", 1, {  y: 150}, {y: -150, ease: Linear.easeNone}), 
                                TweenMax.fromTo(".feelthatshit_3h", 1, {  y: 200}, {y: -200, ease: Linear.easeNone}), 
                                TweenMax.fromTo(".feelthatshit_3k", 1, {  y: 500}, {y: -500, ease: Linear.easeNone}), 
                                TweenMax.fromTo(".feelthatshit_3j", 1, {  y: 400}, {y: -400, ease: Linear.easeNone}),  
                                TweenMax.fromTo(".feelthatshit_3i", 1, {  y: 600}, {y: -600, ease: Linear.easeNone})                           
                                
                                

                                
                                
                            ]);

                        // build scene
             scene = new ScrollMagic.Scene({triggerElement: ".group3", duration: view.clientHeight , triggerHook: "onCenter" })
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

