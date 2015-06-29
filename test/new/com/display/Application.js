var Application = (function() {

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

    var myGroup0;
    var myGroup2;
    var myGroup3;
    var myGroup4;
    var myGroup5;
    var myGroup6;
    var myGroup7;
    var myGroup8;

    var sceneArr = [];
    

    var controller = new ScrollMagic.Controller();

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
           
        }
        
    }

   

 

    function addEventListeners()
    {
        window.addEventListener("resize", centerView );
        

        



    }

    function removeEventListeners()
    {
        window.removeEventListener("resize", centerView );
      
    }

   

    function centerView ( event )
    {
        myGroup0.resizeEvent( 0 , 0 )
        myGroup2.resizeEvent( 0 , 0 )
        myGroup3.resizeEvent( 0 , 0 )
        myGroup4.resizeEvent( 0 , 0 )
        myGroup5.resizeEvent( 0 , 0 )
        myGroup6.resizeEvent( 0 , 0 )
        myGroup7.resizeEvent( 0 , 0 )
        myGroup8.resizeEvent( 0 , 0 )

        for( var i = 0 ; i < sceneArr.length ; i ++ ) {
          var ref = sceneArr[i].duration( document.getElementById( "js-BGgroup" + (i +1 )).clientHeight )
          ref
        }
     
        
    }
   
    
 
    
    function init() 
    {
       myGroup0 = new Group1()
       myGroup0.init( controller );
       myGroup0.openView();


       myGroup2 = new Group2()
       myGroup2.init( controller );
       myGroup2.openView();

       myGroup3 = new Group3()
       myGroup3.init( controller );
       myGroup3.openView();

       myGroup4 = new Group4()
       myGroup4.init( controller );
       myGroup4.openView();

       myGroup5 = new Group5()
       myGroup5.init( controller );
       myGroup5.openView();

       myGroup6 = new Group6()
       myGroup6.init( controller );
       myGroup6.openView();

        myGroup7 = new Group7()
       myGroup7.init( controller );
       myGroup7.openView();

       myGroup8 = new Group8()
       myGroup8.init( controller );
       myGroup8.openView();


       HolyShirtRollOverView.init();
      // HolyShirtRollOverView.openView( document.getElementById( "js-group1") , "assets/group1/t_1a.jpg")
        openView();
        centerView ( null )
        setAudioStuff()
    }

    function starts() {
      trace( "start sounds 1 trigger ")
      
    }
   
    function setAudioStuff() {

      //1
      var scene = new ScrollMagic.Scene({triggerElement: ".BGgroup1", duration: document.getElementById( "js-BGgroup1").clientHeight  })
                                       
                                        //.addIndicators() // add indicators (requires plugin)
                                        .addTo(controller);

      scene.on("end", function (event) {
        //console.log("Hit end point of scene.");
        AudioManager.playSoundByName( AudioManager.getBedById(0) )
        
      });

      scene.on("start", function (event) {
         AudioManager.playSoundByName( AudioManager.getBedById(0)  )
      });

      sceneArr.push( scene )




//2
       var scene = new ScrollMagic.Scene({triggerElement: ".BGgroup2", duration: document.getElementById( "js-BGgroup2").clientHeight  })
                                       
                                       // .addIndicators() // add indicators (requires plugin)
                                        .addTo(controller);

      scene.on("end", function (event) {
        //console.log("Hit end point of scene.");
        AudioManager.playSoundByName( AudioManager.getBedById(1) )
        
      });

      scene.on("start", function (event) {
         AudioManager.playSoundByName( AudioManager.getBedById(1)  )
      });

      sceneArr.push( scene )




//3
      var scene = new ScrollMagic.Scene({triggerElement: ".BGgroup3", duration: document.getElementById( "js-BGgroup3").clientHeight  })
                                       
                                      //  .addIndicators() // add indicators (requires plugin)
                                        .addTo(controller);

      scene.on("end", function (event) {
        //console.log("Hit end point of scene.");
        AudioManager.playSoundByName( AudioManager.getBedById(2) )
        
      });

      scene.on("start", function (event) {
         AudioManager.playSoundByName( AudioManager.getBedById(2)  )
      });
      sceneArr.push( scene )

//4
       var scene = new ScrollMagic.Scene({triggerElement: ".BGgroup4", duration: document.getElementById( "js-BGgroup4").clientHeight  })
                                       
                                       // .addIndicators() // add indicators (requires plugin)
                                        .addTo(controller);

      scene.on("end", function (event) {
        //console.log("Hit end point of scene.");
        AudioManager.playSoundByName( AudioManager.getBedById(3) )
        
      });

      scene.on("start", function (event) {
         AudioManager.playSoundByName( AudioManager.getBedById(3)  )
      });
      sceneArr.push( scene )



//5
       var scene = new ScrollMagic.Scene({triggerElement: ".BGgroup5", duration: document.getElementById( "js-BGgroup5").clientHeight  })
                                       
                                       // .addIndicators() // add indicators (requires plugin)
                                        .addTo(controller);

      scene.on("end", function (event) {
        //console.log("Hit end point of scene.");
        AudioManager.playSoundByName( AudioManager.getBedById(4) )
        
      });

      scene.on("start", function (event) {
         AudioManager.playSoundByName( AudioManager.getBedById(4)  )
      });
      sceneArr.push( scene )




//6
       var scene = new ScrollMagic.Scene({triggerElement: ".BGgroup6", duration: document.getElementById( "js-BGgroup6").clientHeight  })
                                       
                                        //.addIndicators() // add indicators (requires plugin)
                                        .addTo(controller);

      scene.on("end", function (event) {
        //console.log("Hit end point of scene.");
        AudioManager.playSoundByName( AudioManager.getBedById(5) )
        
      });

      scene.on("start", function (event) {
         AudioManager.playSoundByName( AudioManager.getBedById(5)  )
      });
      sceneArr.push( scene )


//7
       var scene = new ScrollMagic.Scene({triggerElement: ".BGgroup7", duration: document.getElementById( "js-BGgroup7").clientHeight  })
                                       
                                        //.addIndicators() // add indicators (requires plugin)
                                        .addTo(controller);

      scene.on("end", function (event) {
        //console.log("Hit end point of scene.");
        AudioManager.playSoundByName( AudioManager.getBedById(6) )
        
      });

      scene.on("start", function (event) {
         AudioManager.playSoundByName( AudioManager.getBedById(6)  )
      });

      sceneArr.push( scene )




//8
       var scene = new ScrollMagic.Scene({triggerElement: ".BGgroup8", duration: document.getElementById( "js-BGgroup8").clientHeight  })
                                       
                                       // .addIndicators() // add indicators (requires plugin)
                                        .addTo(controller);

      scene.on("end", function (event) {
        //console.log("Hit end point of scene.");
        AudioManager.playSoundByName( AudioManager.getBedById(7) )
        
      });

      scene.on("start", function (event) {
         AudioManager.playSoundByName( AudioManager.getBedById(7)  )
      });

      sceneArr.push( scene )



  //9
       var scene = new ScrollMagic.Scene({triggerElement: ".BGgroup9", duration: document.getElementById( "js-BGgroup9").clientHeight  })
                                       
                                        //.addIndicators() // add indicators (requires plugin)
                                        .addTo(controller);

      scene.on("end", function (event) {
        //console.log("Hit end point of scene.");
        AudioManager.playSoundByName( AudioManager.getBedById(8) )
        
      });

      scene.on("start", function (event) {
         AudioManager.playSoundByName( AudioManager.getBedById(8)  )
      });

      sceneArr.push( scene )



  //10
       var scene = new ScrollMagic.Scene({triggerElement: ".BGgroup10", duration: document.getElementById( "js-BGgroup10").clientHeight  })
                                       
                                        //.addIndicators() // add indicators (requires plugin)
                                        .addTo(controller);

      scene.on("end", function (event) {
        //console.log("Hit end point of scene.");
        AudioManager.playSoundByName( AudioManager.getBedById(1) )
        
      });

      scene.on("start", function (event) {
         AudioManager.playSoundByName( AudioManager.getBedById(1)  )
      });

      sceneArr.push( scene )


       //11
       var scene = new ScrollMagic.Scene({triggerElement: ".BGgroup11", duration: document.getElementById( "js-BGgroup11").clientHeight  })
                                       
                                        //.addIndicators() // add indicators (requires plugin)
                                        .addTo(controller);

      scene.on("end", function (event) {
        //console.log("Hit end point of scene.");
        AudioManager.playSoundByName( AudioManager.getBedById(2) )
        
      });

      scene.on("start", function (event) {
         AudioManager.playSoundByName( AudioManager.getBedById(2)  )
      });

      sceneArr.push( scene )



        //12
       var scene = new ScrollMagic.Scene({triggerElement: ".BGgroup12", duration: document.getElementById( "js-BGgroup12").clientHeight  })
                                       
                                        //.addIndicators() // add indicators (requires plugin)
                                        .addTo(controller);

      scene.on("end", function (event) {
        //console.log("Hit end point of scene.");
        AudioManager.playSoundByName( AudioManager.getBedById(3) )
        
      });

      scene.on("start", function (event) {
         AudioManager.playSoundByName( AudioManager.getBedById(3)  )
      });

      sceneArr.push( scene )

       //13
       var scene = new ScrollMagic.Scene({triggerElement: ".BGgroup13", duration: document.getElementById( "js-BGgroup13").clientHeight  })
                                       
                                        //.addIndicators() // add indicators (requires plugin)
                                        .addTo(controller);

      scene.on("end", function (event) {
        //console.log("Hit end point of scene.");
        AudioManager.playSoundByName( AudioManager.getBedById(4) )
        
      });

      scene.on("start", function (event) {
         AudioManager.playSoundByName( AudioManager.getBedById(4)  )
      });

      sceneArr.push( scene )


       //14
       var scene = new ScrollMagic.Scene({triggerElement: ".BGgroup14", duration: document.getElementById( "js-BGgroup14").clientHeight  })
                                       
                                        //.addIndicators() // add indicators (requires plugin)
                                        .addTo(controller);

      scene.on("end", function (event) {
        //console.log("Hit end point of scene.");
        AudioManager.playSoundByName( AudioManager.getBedById(5) )
        
      });

      scene.on("start", function (event) {
         AudioManager.playSoundByName( AudioManager.getBedById(5)  )
      });

      sceneArr.push( scene )


       //15
       var scene = new ScrollMagic.Scene({triggerElement: ".BGgroup15", duration: document.getElementById( "js-BGgroup15").clientHeight  })
                                       
                                        //.addIndicators() // add indicators (requires plugin)
                                        .addTo(controller);

      scene.on("end", function (event) {
        //console.log("Hit end point of scene.");
        AudioManager.playSoundByName( AudioManager.getBedById(6) )
        
      });

      scene.on("start", function (event) {
         AudioManager.playSoundByName( AudioManager.getBedById(6)  )
      });

      sceneArr.push( scene )


       //16
       var scene = new ScrollMagic.Scene({triggerElement: ".BGgroup16", duration: document.getElementById( "js-BGgroup16").clientHeight  })
                                       
                                        //.addIndicators() // add indicators (requires plugin)
                                        .addTo(controller);

      scene.on("end", function (event) {
        //console.log("Hit end point of scene.");
        AudioManager.playSoundByName( AudioManager.getBedById(7) )
        
      });

      scene.on("start", function (event) {
         AudioManager.playSoundByName( AudioManager.getBedById(7)  )
      });

      sceneArr.push( scene )

      //17
       var scene = new ScrollMagic.Scene({triggerElement: ".BGgroup17", duration: document.getElementById( "js-BGgroup17").clientHeight  })
                                       
                                        //.addIndicators() // add indicators (requires plugin)
                                        .addTo(controller);

      scene.on("end", function (event) {
        //console.log("Hit end point of scene.");
        AudioManager.playSoundByName( AudioManager.getBedById(8) )
        
      });

      scene.on("start", function (event) {
         AudioManager.playSoundByName( AudioManager.getBedById(8)  )
      });

      sceneArr.push( scene )








     
    }
   function initDomPointers()
    {
        
        
      

        

    }

   

    
    
    return {

    	// public functions
        
        init: init,
        closeView: closeView,       
        openView: openView
       
        // public vars

       
    };

})();