var HolyShirtRollOverView = (function() {

    // Just so you can see what "this" refers to. It's the global window object.
    // Never attach anything to "this" because then it's a global var/method
    // and you start polluting the global namespace.
  

    // This pattern gives you closure privacy. This is self executing which
    // means you don't have to use the new operator but this is a static/singleton
    // class. Only one instance is created.

    // All methods are private. You don't have to worry about scoping or using
    // "this". If you were to trace out "this", you would get an instance of
    // the global window object. Never use "this" within the module pattern.
    'use strict';


    

    var isOpen = false;

    var view;
    var images;
    var element;

   

    function openView( element_ , path  )
    {
        if( isOpen === false ) {

            isOpen = true;

            TweenLite.set( view , { opacity:0 , scale:.5 })
            
            element = element_
            addEventListeners()
             images.onload = function() {
                trace( "thumb loaded playa")
                images.style.width = "175px"
                images.style.height = "175px"
            }
            images.src = path //+(new Date().getTime()) ;

            element.appendChild( view )
            setPosition( element.clientWidth/2 - view.clientWidth/2, element.clientHeight/2 - view.clientWidth/2 ) 
            TweenLite.to( view , .3,  { opacity:1 , scale:1 })
               
        }
       
    }
    

    function closeView() {

        if( isOpen === true ) {

            isOpen = false;
            removeEventListeners();
            element.removeChild( view )
        }
        
    }

   

 

    function addEventListeners()
    {
        //element.addEventListener("mousemove", centerView );
        

        



    }

    function removeEventListeners()
    {
       // element.removeEventListener("mousemove", centerView );
      
    }

   

    function centerView ( event )
    {
        trace( "mouse moves")
        view.style.left =   element.clientX + "px"
        
    }
   
    function setPosition( x , y ) {
        view.style.left = x + "px"
        view.style.top = y + "px"
    }
 
    
    function init() 
    {
       initDomPointers()
    }

   

   function initDomPointers()
    {
        
        
        view = document.createElement( "div");
        view.className = "shirts"
        images = new Image();
        images.style.width = "175px"
        images.style.height = "175px"
        view.appendChild( images )
       

    }

    function show( element_ , path ){
        trace( element + " path " + path)
        
    }

    
    
    
    return {

    	// public functions
        
        init: init,
        show: show,
        setPosition: setPosition,
        closeView: closeView,       
        openView: openView
       
        // public vars

       
    };

})();