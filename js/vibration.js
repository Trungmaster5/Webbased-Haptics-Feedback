/*

*/
navigator.vibrate = navigator.vibrate ||
                  navigator.webkitVibrate ||
                  navigator.mozVibrate ||
                  navigator.msVibrate;

if (navigator.vibrate) {
  console.log('we can vibrate');
} else {
  console.log('no vibration for you :-(');
};

$(document).on("pagecreate","#pageone",function(){

  //* Swipe left and right vibration *//
  $('#vib-bar-100').on("swipe",function(){
      $(this).css({"background-color":"red"});
      navigator.vibrate(100);
      // window.navigator.vibrate(1000);
      window.setTimeout(function() {
        $('#vib-bar-100').css({"background-color":"#9E9E9E"});
      }, 100);
    });

    $('#vib-bar-200').on("swipe",function(){
        $(this).css({"background-color":"red"});
        navigator.vibrate(200);
        // window.navigator.vibrate(1000);
        window.setTimeout(function() {
          $('#vib-bar-200').css({"background-color":"#9E9E9E"});
        }, 200);
      });

      $('#vib-bar-300').on("swipe",function(){
          $(this).css({"background-color":"red"});
          navigator.vibrate(300);
          // window.navigator.vibrate(1000);
          window.setTimeout(function() {
            $('#vib-bar-300').css({"background-color":"#9E9E9E"});
          }, 300);
        });

        $('#vib-bar-400').on("swipe",function(){
          $(this).css({"background-color":"red"});
            navigator.vibrate(400);
            // window.navigator.vibrate(1000);
            window.setTimeout(function() {
              $('#vib-bar-400').css({"background-color":"#9E9E9E"});
            }, 400);
          });

          $('#vib-bar-500').on("swipe",function(){
              $(this).css({"background-color":"red"});
              navigator.vibrate(500);
              // window.navigator.vibrate(1000);
              window.setTimeout(function() {
                $('#vib-bar-500').css({"background-color":"#9E9E9E"});
              }, 500);
            });

   //* Swipe down vibration *//
   $(".bar").swipe({
     swipeUp:function(event, direction, distance, duration, fingerCount) {
       $(this).css({"background-color":"red"});
       navigator.vibrate(100);
       // window.navigator.vibrate(1000);
       window.setTimeout(function() {
         $(".bar").css({"background-color":"#9E9E9E"});
       }, 100);
      }
    });

    //* Scroll vibration *//
    $(".bar").scroll(function() {
        $(this).css({"background-color":"red"});
        navigator.vibrate(100);
        // window.navigator.vibrate(1000);
        window.setTimeout(function() {
          $(".bar").css({"background-color":"#9E9E9E"});
        }, 100);
       });
});
// window.navigator = window.navigator || {};
// navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
// document.getElementById('vib-bar-100').addEventListener('click',function(){
//   navigator.vibrate(100);
//   // window.navigator.vibrate(1000);
// });

// document.getElementById('vib-bar-200').addEventListener('click',function(){
//   navigator.vibrate(100);
//   // window.navigator.vibrate(1000);
// });
//
// document.getElementById('vib-bar-300').addEventListener('click',function(){
//   navigator.vibrate(100);
//   // window.navigator.vibrate(1000);
// });
//
// document.getElementById('vib-bar-400').addEventListener('click',function(){
//   navigator.vibrate(100);
//   // window.navigator.vibrate(1000);
// });
//
// document.getElementById('vib-bar-500').addEventListener('click',function(){
//   navigator.vibrate(100);
//   // window.navigator.vibrate(1000);
// });
      // if (navigator.vibrate === undefined) {
      //     document.getElementById('v-unsupported').classList.remove('hidden');
      //     ['button-play-v-once', 'button-play-v-thrice', 'button-stop-v'].forEach(function(elementId) {
      //       document.getElementById(elementId).setAttribute('disabled', 'disabled');
      //     });
      // } else {
      //     document.getElementById('button-play-v-once').addEventListener('click', function() {
      //       navigator.vibrate(1000);
      //     });
      //     document.getElementById('button-play-v-thrice').addEventListener('click', function() {
      //       navigator.vibrate([1000, 500, 1000, 500, 2000]);
      //     });
      //     document.getElementById('button-stop-v').addEventListener('click', function() {
      //       navigator.vibrate(0);
      //     });
      // }
