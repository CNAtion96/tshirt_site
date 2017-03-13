//initiate variables
var imageNum = ['<img src="black_shirt_front.jpg"/>','<img src="red_shirt_front_f03337.jpg"/>','<img src="white_shirt_front.jpg"/>','<img src="blue_shirt_front_3390f0.jpg"/>','<img src="gray_shirt_front_3d7877.jpg"/>']
var imageLen = imageNum.length;
var currentIndex = 0;
var next = document.getElementById("next");
var prev = document.getElementById("previous");

//enable buttons to move to next/previous picture
next.addEventListener("click", function(){
	if(currentIndex >= imageLen - 1){
		currentIndex = 0;
		document.getElementById("images").innerHTML = imageNum[currentIndex];
	}
	else {
		currentIndex += 1;
		document.getElementById("images").innerHTML = imageNum[currentIndex];
	}
})

prev.addEventListener("click", function(){
	if(currentIndex <= 0){
		currentIndex = imageLen - 1;
		document.getElementById("images").innerHTML = imageNum[currentIndex];
	}
	else {
		currentIndex -= 1;
		document.getElementById("images").innerHTML = imageNum[currentIndex];
	}
})