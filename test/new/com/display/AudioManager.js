var AudioManager = (function() {

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

    var currentSoundName;
    var lastSoundName;

    var bed1;
    var bed2;
    var bed3;
    var bed4;
    var bed5;
    var bed6;
    var bed7;
    var bed8;
    var bed9;
    
    var bedsArr = [];
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
        

        



    }

    function removeEventListeners()
    {
      
    }

   

    
    function playSoundByName( soundName ) {
     // trace( " playSoundByName " + soundName )
       lastSoundName = currentSoundName;
       currentSoundName = soundName;


    }

    function checkForNextLoop( bedName ) {
     // trace( currentSoundName.name + " checkForNextLoop(); " + bedName.name )

      if( currentSoundName.name === bedName.name ) {
        bedName.play()
      }else{
        currentSoundName.play();
       // trace( "stopsounds")
        bedName.pause()
      }
    }
 
    
    function init() 
    {
      bed1 = new Howl({
          urls: ['assets/sound/BED1.mp3'],
          autoplay: false,
          loop: false,
          volume: 0.5,
          buffer:true,
          onend: function() {
            checkForNextLoop( bed1 );
            //alert('Finished!');
          },

          onpause: function() {
            trace( "onpause")
          },
          onplay: function() {
            trace( "onplay")
          },

          onload: function() {
            bed1.play();
            currentSoundName = bed4;
          }


        });

      bed1.name = "bed1"
      bed2 = new Howl({
          urls: ['assets/sound/BED2.mp3'],
          autoplay: false,
          loop: false,
          volume: 0.5,
          buffer:true,
          onend: function() {
            checkForNextLoop( bed2 );
          },

          onload: function() {
            //bed1.play();
          }


        });
        bed2.name = "bed2"
        bed3 = new Howl({
            urls: ['assets/sound/BED3.mp3'],
            autoplay: false,
            loop: false,
            volume: 0.5,
            buffer:true,
            onend: function() {
              checkForNextLoop( bed3 );
            },

            onload: function() {
              //bed1.play();
            }


          });

        bed3.name = "bed3"
        bed4 = new Howl({
            urls: ['assets/sound/BED4.mp3'],
            autoplay: false,
            loop: false,
            volume: 0.5,
            buffer:true,
            onend: function() {
              checkForNextLoop( bed4 );
            },

            onload: function() {
              //bed1.play();
            }


          });
        bed4.name = "bed4"
        bed5 = new Howl({
            urls: ['assets/sound/BED5.mp3'],
            autoplay: false,
            loop: false,
            volume: 0.5,
            buffer:true,
            onend: function() {
              checkForNextLoop( bed5 );
            },

            onload: function() {
              //bed1.play();
            }


          });
        bed5.name = "bed5"
        bed6 = new Howl({
            urls: ['assets/sound/BED6.mp3'],
            autoplay: false,
            loop: false,
            volume: 0.5,
            buffer:true,
            onend: function() {
              checkForNextLoop( bed6 );
            },

            onload: function() {
              //bed1.play();
            }


          });
        bed6.name = "bed6"
        bed7 = new Howl({
            urls: ['assets/sound/BED7.mp3'],
            autoplay: false,
            loop: false,
            volume: 0.5,
            buffer:true,
            onend: function() {
              checkForNextLoop( bed7 );
            },

            onload: function() {
              //bed1.play();
            }


          });
        bed7.name = "bed7"
        bed8 = new Howl({
            urls: ['assets/sound/BED8.mp3'],
            autoplay: false,
            loop: false,
            volume: 0.5,
            buffer:true,
            onend: function() {
              checkForNextLoop( bed8 );
            },

            onload: function() {
              //bed1.play();
            }


          });
        bed8.name = "bed8"
        bed9 = new Howl({
            urls: ['assets/sound/BED9.mp3'],
            autoplay: false,
            loop: false,
            volume: 0.5,
            buffer:true,
            onend: function() {
              checkForNextLoop( bed9 );
            },

            onload: function() {
              //bed1.play();
            }


          });
        bed9.name = "bed9"

        bedsArr = [ bed1, bed2, bed3, bed4, bed5, bed6, bed7, bed8, bed9 ]
        
    }

   

   function initDomPointers()
    {
        
        
      

        

    }

    function getBedById( id ) {
      
       return bedsArr[id];
     
    }

   

    
    
    return {

    	// public functions
        
        init: init,
        playSoundByName: playSoundByName,
        closeView: closeView,       
        openView: openView,
        getBedById:getBedById
       
        // public vars

       
    };

})();