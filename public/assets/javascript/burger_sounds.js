$(document).ready(function() {

  // Pre-load sound effects
  var audioWhine0 = new Audio('http://soundjax.com/reddo/97396^Sound-Effect---Cheering.mp3');
  var audioWhine1 = new Audio('http://soundjax.com/reddo/65229^Sound-Effect---Crowd-Cheering.mp3');
  var audioWhine2 = new Audio('http://soundjax.com/reddo/20058^Bronx%20Cheer%2002.mp3');
  var audioWhine3 = new Audio('http://soundjax.com/reddo/68561^cheering.mp3');
  var audioWhine4 = new Audio('http://soundjax.com/reddo/38109^fireworks1.mp3');


  // Array of sounds
  var soundArray = [audioWhine0, audioWhine1, audioWhine2, audioWhine3, audioWhine4];


  // Click Listener for Whine Button
  $('.whine-button').on("click", function(){

    // Generate a random number (from 0 to length of array)
    var i = Math.floor(Math.random()*soundArray.length);

    // Play the random sound
    soundArray[i].play();

  });


});