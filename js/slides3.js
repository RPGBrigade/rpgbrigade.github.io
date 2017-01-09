$(document).ready(function(){
$($('#slidewrapper > .slide').get().reverse()).css('z-index', function(index) {
    return index+1;
}); 

$(window).load(function() {
 $slideheight = $(".slide.current").innerHeight();
	$( "#slidewrapper" ).css( "height", $slideheight);
});

var timer;
slideTimer();
next();
previous();
pause();
play();
slideHeight();

function next() {
	$("#next").click(function() { 
		clearInterval(timer);
		currentSlide();	
		var paused = $(".paused").addClass('current').removeClass('paused');
		var showpause = $("#pause").removeClass('hidden');
		var hideplay = $("#play").removeClass('visible');
		slideHeight();
		slideTimer();
	
        });
		
			};
			
	function previous() {
	$("#previous").click(function() { 
		clearInterval(timer);
		var current = $(".current").removeClass('current');
		var paused = $(".paused").addClass('current').removeClass('paused');
		var showpause = $("#pause").removeClass('hidden');
		var hideplay = $("#play").removeClass('visible');
         if(current.prev() && current.prev().length){
             current.prev().addClass('current');
    }
	else{
      current.siblings(":last").addClass('current');
    }
		slideHeight();
		slideTimer();
	
        });
		
			};
			
function play() {
	$("#play").click(function() { 
		clearInterval(timer);
		var current = $(".current").removeClass('current');
		var paused = $(".paused").addClass('current').removeClass('paused');
		var showpause = $("#pause").removeClass('hidden');
		var hideplay = $("#play").removeClass('visible');
		
         if(current.prev() && current.prev().length){
             current.prev().addClass('current');
    }
	else{
      current.siblings(":last").addClass('current');
    }
	
		slideTimer();
	
        });
		
			};	
			
function pause() {
	$("#pause").click(function() { 
		clearInterval(timer);
		var current = $(".current").removeClass('current').addClass('paused');
		var hidepause = $("#pause").addClass('hidden');
		var displayplay = $("#play").addClass('visible');
        });
		
			};

/* slideshow timer */
function slideTimer()
	{	
	timer = setInterval(function(){
           currentSlide();	
		   slideHeight();
 	 }, 6000);

		};
		/* end function */

/* set the current slide */
function currentSlide ()
	{
		 var current = $(".current").removeClass('current');

         if(current.next() && current.next().length){
             current.next().addClass('current');
    }
    else{
      current.siblings(":first").addClass('current');
    }

		}; 
		/* end function */ 
});

function slideHeight( ) {
	$slideheight = $(".slide.current").innerHeight();
	$( "#slidewrapper" ).css( "height", $slideheight);

	$( window ).resize(function() {
	$slideheight = $(".slide.current").innerHeight();
	$( "#slidewrapper" ).css("height", $slideheight);
		});

			};