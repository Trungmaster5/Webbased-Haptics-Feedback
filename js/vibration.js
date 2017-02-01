(function () {
'use strict';

window.navigator = window.navigator || {};
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
document.getElementById('vib_bar').addEventListener('click',function(){
  navigator.vibrate(100);
});
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

  })();
