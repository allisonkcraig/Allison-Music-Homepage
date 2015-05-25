
// ribbons
$(document).ready(function(){
	$('.left img').hover(function () {
		$(this).stop().animate({
			right: "30px"
		}, {
			queue: false,
			duration: 'slow'
		});

	}, function () {
		$(this).stop().animate({
			right: "0px"
		}, {
			queue: false,
			duration: 'slow'
		});
	});

	$('.right img').hover(function () {
		$(this).stop().animate({
			left: "30px"
		}, {
			queue: false,
			duration: 'slow'
		});

	}, function () {
		$(this).stop().animate({
			left: "0px"
		}, {
			queue: false,
			duration: 'slow'
		});
	});

var counter = 0;

window.setInterval(function(){
	var picArray = [$('#pic1')[0], $('#pic2')[0], $('#pic3')[0], $('#pic4')[0], $('#pic5')[0], $('#pic6')[0]];
	picArray[counter].style.display = 'block';
	var picId = picArray[counter].id
	$( "#"+picId+"" ).siblings().css( 'display', 'none');
	counter = counter + 1;
	console.log(counter);
	console.log(picArray[counter]);

	if (counter > 5){
		counter = 0
	}

}, 5000);

});
