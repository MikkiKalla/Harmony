document.addEventListener('keydown', (e) => {
      switch(e.keyCode) {
        case 90: loadSoundFiles('../audio/kh1.wav');
        case 90: blink(90);
        break;
        case 88: loadSoundFiles('../audio/kh2.wav');      
        case 88: blink(88);
        break;
        case 67: loadSoundFiles('../audio/kh3.wav');
        case 67: blink(67);
        break;
        case 86: loadSoundFiles('../audio/kh4.wav');
        case 86: blink(86);
        break;
        case 66: loadSoundFiles('../audio/kh5.wav');
        case 66: blink(66);
        break;
        case 78: loadSoundFiles('../audio/kh6.wav');
        case 78: blink(78);
        break;
        case 77: loadSoundFiles('../audio/kh7.wav');
        case 77: blink(77);
        break;
        case 188: loadSoundFiles('../audio/kh8.wav');
        case 188: blink(188);
        break;
        case 74: loadSoundFiles('../audio/kh9.wav');
        case 74: blink(74);
        break;
        case 75: loadSoundFiles('../audio/kh10.wav');
        case 75: blink(75);
        break;
        default: console.log('Ótengdur lykill');
      }
    });

// var el = document.getElementById("star1");
// document.addEventListener('keydown', function(e) {
  // if(e.keyCode == 90) start();
// });

function blink(e) {
    document.getElementById('star1').classList.add("star1");
    console.log(e);
  }