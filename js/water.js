var HEIGHT,WIDTH;
var lake = document.getElementById("lake");
window.addEventListener('resize', handleResize, false);
handleResize();

function handleResize(){
  HEIGHT = window.innerHeight,
  WIDTH = window.innerWidth;
}

document.addEventListener('keydown', (e) => {
      switch(e.keyCode) {
        case 90: loadSoundFiles('../audio/kmb1.wav');
        case 90: createColorRipples("Aquamarine ");
        break;
        case 88: loadSoundFiles('../audio/kmb2.wav');
        case 88: createColorRipples("CornflowerBlue");         
        break;
        case 67: loadSoundFiles('../audio/kmb3.wav');
        case 67: createColorRipples("DarkCyan");
        break;
        case 86: loadSoundFiles('../audio/kmb4.wav');
        case 86: createColorRipples("Turquoise");
        break;
        case 66: loadSoundFiles('../audio/kmb5.wav');
        case 66: createColorRipples("Teal");
        break;
        case 78: loadSoundFiles('../audio/kmb6.wav');
        case 78: createColorRipples("SteelBlue");
        break;
        case 77: loadSoundFiles('../audio/kmb7.wav');
        case 77: createColorRipples("darkblue");
        break;
        case 188: loadSoundFiles('../audio/kmb8.wav');
        case 188: createColorRipples("aqua");
        break;
        case 74: loadSoundFiles('../audio/kmb9.wav');
        case 74: createColorRipples("coral");
        break;
        case 75: loadSoundFiles('../audio/kmb10.wav');
        case 75: createColorRipples("crimson");
        break;
        default: console.log('halló');
      }
    });


function createColorRipples(color){
  var tx =  Math.random()*WIDTH;
  var ty = (Math.random()+.5)*HEIGHT*.5;
  var spltch = document.getElementById("sploutch");

  var c = document.getElementsByClassName("color");
  var bc = document.getElementsByClassName("bordercolor");
  var cln = spltch.cloneNode(true);
  cln.querySelectorAll('.ripple').forEach(function(ripple){
    ripple.style.borderColor = color;
    ripple.style.borderWidth = (Math.floor(Math.random() * 10)+2)+'px';
  });
  cln.querySelectorAll('.splash').forEach(function(splash){
    splash.style.backgroundColor = color;
  });
  cln.querySelectorAll('.drop').forEach(function(drop){
    drop.style.backgroundColor = color;
  });

  cln.style.left=(tx-150) +"px";
  cln.style.top=(ty-150) +"px";
  lake.appendChild(cln);
  // remove it from the dom after a while
  setTimeout(function(){
    lake.removeChild(cln);
  }, 4000);
}

setInterval(createColorRipples, 300);