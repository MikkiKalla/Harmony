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
        console.log(color, scale)
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


