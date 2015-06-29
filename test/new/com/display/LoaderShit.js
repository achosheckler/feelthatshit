var LoaderShit = (function() {

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

    var backColors;
    var TextView;

    var backInterval;
    
    

   

    function openView()
    {
        if( isOpen === false ) {

            isOpen = true;
            addEventListeners()
           
           
        }
       
    }
    

    function closeView() {

        if( isOpen === true ) {

            isOpen = false;
            removeEventListeners();
             clearInterval(backInterval)
        }
        
    }

   

 

    function addEventListeners()
    {
       
        

        



    }

    function removeEventListeners()
    {
       
      
    }

   

    function centerView ( event )
    {
      
     
        
    }
   
    
 
    
    function init() 
    {
       initDomPointers()
    }

   

   function initDomPointers()
    {
        
        
        backColors = document.getElementById( "js-loaderWrapper" );
        TextView  = document.getElementById( "js-loader" );
        changeDatColor( )
        backInterval = setInterval( changeDatColor , 500 )

    }

    function changeDatColor( ) {
      TweenMax.to(backColors , .5 , { backgroundColor:Math.random()*0xffffff} )
    }

    
    
    return {

    	// public functions
        
        init: init,
        closeView: closeView,       
        openView: openView
       
        // public vars

       
    };

})();