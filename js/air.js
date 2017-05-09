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
	
	console.log(currentsound);
	
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