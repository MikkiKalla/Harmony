$(document).ready(() => {
    
	  $(".menu").hover(function(){
		$(this).toggleClass('active');
		return false;
	});

	$(".menu-item").click(function() {
	 	$(".canvas-temp").hide().eq( $(this).index() ).show();
	 	console.log($(this).attr("href").slice(1));
	 	element($(this).attr("href").slice(1));
	 });

	 $(function() {
	 	setTimeout(function() {
				$("#first-wrapper").fadeOut(2400);
				console.log("Landing page fadeOut done");
			}, 7000);

	 	setTimeout(function() {
	 		$(".second-wrapper").delay(10000).fadeIn(2400);
	 		console.log("Headphone fadeIn done ");
	 		$(function() {
      			$(".second-wrapper").delay(2000).fadeOut(2450);
      			console.log("Headphone fadeOut done");
      		}, 1000);
	 	});
		setTimeout(function () {
	      	$(".third-wrapper").delay(17000).fadeIn(2450);
	    }); 
			console.log("third-wrapper fadeIn done");
		 	console.log("nav activate");
	 });

	 $(".player").hover(function() {
	 	$(".element-overlay").toggleClass("showing");
	 	return false;
	 });

	//  let soundIsPlaying = false;

	//  document.querySelector("ambience").innerHTML = "audio";

	// 	$('#pauseSound').on('click', function() {
 //    	$("audio")[0].play();
     
 //    	$('#playSound').show(); //icon for sound
 //  		$('#pauseSound').hide(); //icon for soundoff
	// });

	// 	$('#playSound').on('click', function() {
 //    	$("audio")[0].pause();
  
 // 		$('#pauseSound').show();
 //  		$('#playSound').hide();
	// });

	 /*let soundIsPlaying = false;
	 
	 $('#playSound').on('click', function() {
	 	if (soundIsPlaying){
	 		$("audio")[0].pause();
	 		$('#playSound').hide(); //icon for sound
  			$('#pauseSound').show(); //icon for soundoff
	 	}
	 	else {
	 		$("audio")[0].play();
	 		$('#playSound').show(); //icon for sound
  			$('#pauseSound').hide(); //icon for soundoff
	 	}*/
    	
     


	 const quoteList = [ //random quote generator array
        {
			quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
			name:"-Francis of Assisi-"
	    },
	    {
			quote: "Music is the expression of harmony in sound. Love is the expression of harmony in life.",
			name:"-Stephen-"
	    },
	    {
	    	quote:"Believe you can and you're halfway there.",
	    	name:"-Theodore Roosevelt-"
	    },
	    {
	    	quote:"It does not matter how slowly you go as long as you do not stop.",
	    	name:"-Confucius-"
	    },
	    {
	    	quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
	    	name:"-Thomas A. Edison-"
	    },
	    {
	    	quote:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
	    	name:"-Confucius-"
	    },
	    {
	    	quote:"Don't watch the clock; do what it does. Keep going.",
	    	name:"-Sam Levenson-"
	    },
	    {
	    	quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
	    	name:"-Ayn Rand-"
	    },
	    {
	    	quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
	    	name:"-Ayn Rand-"
	    },
	    {
	    	quote:"Expect problems and eat them for breakfast.",
	    	name:"-Alfred A. Montapert-"
	    },
	    {
	    	quote:"Start where you are. Use what you have. Do what you can.",
	    	name:"-Arthur Ashe-"
	    },
	    {
	    	quote:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
	    	name:"-Samuel Beckett-"
	    },
	    {
	    	quote:"Be yourself, everyone else is already taken.",
	    	name:"-Oscar Wilde-"
	    },
	    {
	    	quote:"Two things are infinite. The universe and human stupidity, and I'm not sure about the universe.",
	    	name:"-Albert Einstein-"
	    },
	    {
	    	quote:"Always remember that you are absolutely unique. Just like everyone else.",
	    	name:"-Margaret Mead-"
	    },
	    {
	    	quote:"Do not take life too seriously. You will never get out of it alive.",
	    	name:"-Elbert Hubbard-"
	    },
	    {
	    	quote:"People who think they know everything are a great annoyance to those of us who do.",
	    	name:"-Isaac Asimov-"
	    },
	    {
	    	quote:"Procrastination is the art of keeping up with yesterday.",
	    	name:"-Don Marquis-"
	    },
	    {
	    	quote:"Get your facts first, then you can distort them as you please.",
	    	name:"-Mark Twain-"
	    },
	    {
	    	quote:"A day without sunshine is like, you know, night.",
	    	name:"-Steve Martin-"
	    },
	    {
	    	quote:"My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
	    	name:"-Ellen DeGeneres-"
	    },
	    {
	    	quote:"Don't sweat the petty things and don't pet the sweaty things.",
	    	name:"-George Carlin-"
	    },
	    {
	    	quote:"Always do whatever's next.",
	    	name:"-George Carlin-"
	    },
	    {
	    	quote:"Atheism is a non-prophet organization.",
	    	name:"-George Carlin-"
	    },
	    {
	    	quote:"Hapiness is not something ready made. It comes from your own actions.",
	    	name:"-Dalai Lama-"
	    }
      ];
    function quoteGenerate() { //random quote generator function
    	let quoteRandomize = Math.floor(Math.random() * quoteList.length);
    	let quoteMain = quoteList[quoteRandomize].quote;
    	let quoteAuthor = quoteList[quoteRandomize].name;

    	$("#quote").text(quoteMain);
    	$("#author").text(quoteAuthor);
    };

  	quoteGenerate(); //END RANDOM QUOTE GENERATOR

});   //END (DOCUMENT).READY FUNCTION


      