function createColorRipples(color){
	const HEIGHT = window.innerHeight;
	 const WIDTH = window.innerWidth;
  var lake = document.getElementById("lake");
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

setInterval(createColorRipples, 2000);

function randomColor() {
            var colors = [ "#BC565E", "#FA9C6C", "#50224E", "#FFCB8D", "#7D5685", "#BA846A", "#316591", "#58A0AA" ]
            var currentcolor = colors[Math.floor(Math.random() * 8)];
            return currentcolor;
        }

const WaterkeyDownListener = (e) => {
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
        // default: console.log('halló');
      }
   }  
 const EtherKeyDownListener = (e) => {
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
        // default: console.log('Ótengdur lykill');
      }
    }  

const EarthKeyDownListener = (e) => {
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
    }     

const element = (elementName) => {
	document.removeEventListener("keydown", WaterkeyDownListener);
	document.removeEventListener("keydown", EarthKeyDownListener);
	document.removeEventListener("keydown", EtherKeyDownListener);
	if (elementName === "water") {
		getWater();
	} else if (elementName === "fire") {
		getFire();
	} else if (elementName === "ether") {
		getEther();
	}	else if (elementName === "air") {
		getAir();
	}	else if (elementName === "earth") {
		getEarth();
	}
}





const getWater = () => {

document.addEventListener('keydown', WaterkeyDownListener);

}

const getFire = () => {
	 /****************************** Video ****************************/ 

$( document ).ready(function() {
    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}

/************Deplar*****************/

    $(document).click((e) => {
        let x = e.pageX;
        let y = e.pageY;
        const color = randomColor()
        const scale = randomScale()
        // console.log(color, scale);
        let circle = $('<div class="circle"></div>').css({
            "position": "absolute",                    
            "left": x- (parseInt(scale)/2),
            "right":x,
            "top": y- (parseInt(scale)/2),
            "bottom": y,
            "background-color": color,
            "height": scale,
            "width": scale
        });
       
        $('.shell').append(circle);

        playRandomSound();

        function randomColor() {
            var colors = [ "#FFF6C2", "#FFE456", "#FC9F00", "#F06019", "#DB201C" ]
            var currentcolor = colors[Math.floor(Math.random() * 5)];
            return currentcolor;
        }

        function randomScale() {
            var scale = [ 99, 88, 66, 55, 33 ]
            var currentscale = scale[Math.floor(Math.random() * 5)]+'px';
            return currentscale;
        }

        function playRandomSound(){
            var sounds = [
                         "../audio/kh1.wav",
                         "../audio/kh2.wav",
                         "../audio/kh3.wav",
                         "../audio/kh4.wav",
                         "../audio/kh5.wav",
                         "../audio/kh6.wav",
                         "../audio/kh7.wav",
                         "../audio/kh8.wav",
                         "../audio/kh9.wav",
                         "../audio/kh10.wav"
                         ];

            var currentfile = sounds[Math.floor(Math.random() * 10)];
            
            loadSoundFiles    (currentfile);
        }
});



}

const getEther = () => {
	document.addEventListener('keydown', EtherKeyDownListener);

// var el = document.getElementById("star1");
// document.addEventListener('keydown', function(e) {
  // if(e.keyCode == 90) start();
// });

function blink(e) {
    document.getElementById('star1').classList.add("star1");
     console.log(e)
  }
}

const getAir= () => {
	var win = window,
	doc = document,
	body = doc.body;

var a = TweenMax;

var wrap = doc.getElementsByClassName('wrap')[0],
	title = doc.getElementsByClassName('title')[0];

var ops = {
	count: 12,
	ease: Power3.easeInOut,
	src: 'images/frae.png'
}

var items = [];
 
function Flower(i){
	
	var self = doc.createElement('span'),
		span = doc.createElement('span'),
		img = doc.createElement('img');
	
	self.className = 'flower';
	self.appendChild(span);
	span.appendChild(img);
	wrap.appendChild(self);
	img.src = ops.src;
	
	span.style.animationDelay = i+0.1+'s'; 

	if (i <= Math.floor(ops.count * 0.3)) {
		self.scale = parseFloat(randFloat(0.1, 0.3).toFixed(1));
	} else if (i <= Math.floor(ops.count * 0.6)) {
		self.scale = parseFloat(randFloat(0.4, 0.6).toFixed(1));
	} else {
		self.scale = parseFloat(randFloat(0.7, 0.9).toFixed(1));	
	}

	self.delay = i;
	self.blur = (self.scale <= 0.3 || self.scale >= 0.7) ? rand(10, 15) : 0;
	self.speed = Math.abs( (self.scale * 10) - 10) * 10;


	a.set(self, {
		rotation: rand(-10, 10)+'deg', 
		scaleX: rand(20, 10) % 2 ? self.scale : -self.scale,  
		scaleY: self.scale,
		x: '-50%',
		y: '-50%',
		top: rand(0, win.innerHeight),
		left: rand(i * 100, win.innerWidth * 1.5),
		filter: 'blur('+self.blur+'px)',
		zIndex: self.scale * 10
	});

	self.r_width = self.getBoundingClientRect().width;
	self.r_height = self.getBoundingClientRect().height;

	self.addEventListener('mouseover', poker);
	self.addEventListener('mouseleave', depoke);
	self.addEventListener('mouseover', function(){
												 playRandomSound();
	    										 });
	animateOff(self);
	
	return self;
}

for (var i = 0; i < ops.count-1; i++) {
	items.push(new Flower(i));
}

function playRandomSound(){
	var sounds = [
				 "../audio/vp1.wav",
				 "../audio/vp2.wav",
				 "../audio/vp3.wav",
				 "../audio/vp4.wav",
				 "../audio/vp5.wav",
				 "../audio/vp6.wav",
				 "../audio/vp7.wav",
				 "../audio/vp8.wav"
				 ];

	var currentsound = sounds[Math.floor(Math.random() * 8)];
	
	// console.log(currentsound);
	
	loadSoundFiles(currentsound);
}

function poker(e){
	var rect = this.getBoundingClientRect();
	var mouse = { x: e.clientX, y: e.clientY };
	
	if (mouse.x < rect.left + this.r_width / 2) {
		a.to(this.firstChild.firstChild, 2.5, {rotation: '40deg', ease: Power4.easeOut, overwrite: 'blur'});
	} else {
		// from right
		a.to(this.firstChild.firstChild, 2.5, {rotation: '-40deg', ease: Power4.easeOut, overwrite: 'blur'});
	}
}

function depoke(e) {
	a.to(this.firstChild.firstChild, 2.5, {rotation: '0deg', overwrite: 'all'});
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

function randFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function is_oob(el) {
	if (el.getBoundingClientRect().left < -el.r_width || el.getBoundingClientRect().left > win.innerWidth+el.r_width) {
		return true;
	}
	if (el.getBoundingClientRect().top < -el.r_height || el.getBoundingClientRect().top > win.innerHeight+el.r_height) {
		return true;
	}
}

function disperse(el){
	a.to(el, rand(10, 50), {
		top: (rand(10, 50) % 2) ? -el.r_height : win.innerHeight+el.r_height,
		left: (rand(10, 50) % 2) ? -el.r_width : win.innerWidth+el.r_width,
		onUpdate: function(){
			if (is_oob(el)) {
				animateOff(el);
			}
		}
	}); 
} 

function animateOff(el){
	a.to(el, el.speed, {
		top: rand(el.r_height, win.innerHeight),
		left: -el.r_width,
		scaleY: Math.abs(el.scale),
		onUpdate: function(){
			if (el.getBoundingClientRect().left < -el.r_width) {
				setOn(el);
			}
		}
	});
}

	function setOn(el){
		a.set(el, {
			left: win.innerWidth+el.r_width+'px',
			top: rand(-win.innerHeight, win.innerHeight),
		});
		
		animateOff(el);
	}

}

const getEarth = () => {
	
document.addEventListener('keydown', EarthKeyDownListener);
}
