function randomColor() {
            var colors = [ "#BC565E", "#FA9C6C", "#50224E", "#FFCB8D", "#7D5685", "#BA846A", "#316591", "#58A0AA" ]
            var currentcolor = colors[Math.floor(Math.random() * 8)];
            return currentcolor;
        }

document.addEventListener('keydown', (e) => {
      switch(e.keyCode) {
        case 90: loadSoundFiles('../audio/kh1.wav');
        case 90: document.querySelector('.st22').style.fill = randomColor();
        break;
        case 88: loadSoundFiles('../audio/kh2.wav');
        case 88: document.querySelector('.st33').style.fill = randomColor();      
        break;
        case 67: loadSoundFiles('../audio/kh3.wav');
        case 67: document.querySelector('.st23').style.fill = randomColor();  
        break;
        case 86: loadSoundFiles('../audio/kh4.wav');
        case 86: document.querySelector('.st12').style.fill = randomColor(); 
        break;
        case 66: loadSoundFiles('../audio/kh5.wav');
        case 66: document.querySelector('.st11').style.fill = randomColor(); 
        break;
        case 78: loadSoundFiles('../audio/kh6.wav');
        case 78: document.querySelector('.st16').style.fill = randomColor(); 
        break;
        case 77: loadSoundFiles('../audio/kh7.wav');
        case 77: document.querySelector('.st7').style.fill = randomColor(); 
        break;
        case 188: loadSoundFiles('../audio/kh8.wav');
        case 188: document.querySelector('.st26').style.fill = randomColor(); 
        break;
        case 74: loadSoundFiles('../audio/kh9.wav');
        case 74: document.querySelector('.st19').style.fill = randomColor(); 
        break;
        case 75: loadSoundFiles('../audio/kh10.wav');
        case 75: document.querySelector('.st29').style.fill = randomColor(); 
        break;
        // default: console.log('halló');
      }
    });