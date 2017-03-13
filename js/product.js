//get buttons
var addFHToCart = document.getElementById("addFHToCart");
var addSpaceShipToCart = document.getElementById("addSpaceShipToCart");
var addAlienToCart = document.getElementById("addAlienToCart");
var addPredatorToCart = document.getElementById("addPredatorToCart");
var addLogoToCart = document.getElementById("addLogoToCart");

//set shirt price and initiate subtotal, total, and tax variables
localStorage.setItem('subtotal','0');
localStorage.setItem('total', '0');
var subtotalStorage = localStorage.getItem('subtotal');
var totalStorage = localStorage.getItem('total');
var shirtPrice = 19.99;
var subtotal = 0;
var total = 0;
var tax = 1.065;

//variables to check if item is in the cart
var faceHuggerInCart = false;
var spaceShipInCart = false;
var alienInCart = false;
var predatorInCart = false;
var logoInCart = false;

//fuction to calculate the after tax total
function calcTotal(totalSub, taxes) {
	return((totalSub * taxes).toFixed(2));
}

//add event listeners to buttons to add them to the cart
addFHToCart.addEventListener("click", function(){
	if (faceHuggerInCart === false) {
		subtotal += shirtPrice;
		document.getElementById("subtotal").innerHTML = subtotal;
		faceHuggerInCart = true;
		total = calcTotal(subtotal,tax)
		document.getElementById("total").innerHTML = total;
	}
	else {
		subtotal -= shirtPrice;
		document.getElementById("subtotal").innerHTML = subtotal;
		faceHuggerInCart = false;
		total = calcTotal(subtotal,tax)
		document.getElementById("total").innerHTML = total;
	}
})

addSpaceShipToCart.addEventListener("click", function(){
	if (spaceShipInCart === false) {
		subtotal += shirtPrice;
		document.getElementById("subtotal").innerHTML = subtotal;
		spaceShipInCart = true;
		total = calcTotal(subtotal,tax)
		document.getElementById("total").innerHTML = total;
	}
	else {
		subtotal -= shirtPrice;
		document.getElementById("subtotal").innerHTML = subtotal;
		spaceShipInCart = false;
		total = calcTotal(subtotal,tax)
		document.getElementById("total").innerHTML = total;
	}
})

addAlienToCart.addEventListener("click", function(){
	if (alienInCart === false) {
		subtotal += shirtPrice;
		document.getElementById("subtotal").innerHTML = subtotal;
		alienInCart = true;
		total = calcTotal(subtotal,tax)
		document.getElementById("total").innerHTML = total;
	}
	else {
		subtotal -= shirtPrice;
		document.getElementById("subtotal").innerHTML = subtotal;
		alienInCart = false;
		total = calcTotal(subtotal,tax)
		document.getElementById("total").innerHTML = total;
	}
})

addPredatorToCart.addEventListener("click", function(){
	if (predatorInCart === false) {
		subtotal += shirtPrice;
		document.getElementById("subtotal").innerHTML = subtotal;
		predatorInCart = true;
		total = calcTotal(subtotal,tax)
		document.getElementById("total").innerHTML = total;
	}
	else {
		subtotal -= shirtPrice;
		document.getElementById("subtotal").innerHTML = subtotal;
		predatorInCart = false;
		total = calcTotal(subtotal,tax)
		document.getElementById("total").innerHTML = total;
	}
})

addLogoToCart.addEventListener("click", function(){
	if (logoInCart === false) {
		subtotal += shirtPrice;
		document.getElementById("subtotal").innerHTML = subtotal;
		logoInCart = true;
		total = calcTotal(subtotal,tax)
		document.getElementById("total").innerHTML = total;
	}
	else {
		subtotal -= shirtPrice;
		document.getElementById("subtotal").innerHTML = subtotal;
		logoInCart = false;
		total = calcTotal(subtotal,tax)
		document.getElementById("total").innerHTML = total;
	}
})

//vars to grab selects
var logoSelect = document.getElementById("logoColor");
var spaceShipSelect = document.getElementById("spaceShipColor");
var alienSelect = document.getElementById("alienColor");
var predatorSelect = document.getElementById("predatorColor");
var faceHuggerSelect = document.getElementById("faceHuggerColor");

var logoSelect = document.getElementById("logoColor");

//change backgroud color of select and product image
logoSelect.addEventListener('change',function(e) {
  var color = e.target.selectedOptions[0].innerText;
	switch(color) {
	    case "Black":
	        e.target.style.backgroundColor = "black";
	        document.getElementById("logo").innerHTML = '<img src="black_shirt_front.jpg"/>';
	        break;
	    case "Red":
	        e.target.style.backgroundColor = "#f03337";
	       	document.getElementById("logo").innerHTML = '<img src="red_shirt_front_f03337.jpg"/>';
	        break;
        case "Blue":
        	e.target.style.backgroundColor = "#3390f0";
        	document.getElementById("logo").innerHTML = '<img src="blue_shirt_front_3390f0.jpg"/>';
        	break;
    	case "Grey":
    		e.target.style.backgroundColor = "#3d7877";
    		document.getElementById("logo").innerHTML = '<img src="gray_shirt_front_3d7877.jpg"/>';
    		break;
    	case "White":
    		e.target.style.backgroundColor = "white";
    		document.getElementById("logo").innerHTML = '<img src="white_shirt_front.jpg"/>';
    		break;
	    default:
	         e.target.style.backgroundColor = "white";
	}
})

spaceShipSelect.addEventListener('change',function(e) {
  var color = e.target.selectedOptions[0].innerText;
	switch(color) {
	    case "Black":
	        e.target.style.backgroundColor = "black";
	        document.getElementById("spaceShip").innerHTML = '<img src="black_shirt_front.jpg"/>';
	        break;
	    case "Red":
	        e.target.style.backgroundColor = "#f03337";
	       	document.getElementById("spaceShip").innerHTML = '<img src="red_shirt_front_f03337.jpg"/>';
	        break;
        case "Blue":
        	e.target.style.backgroundColor = "#3390f0";
        	document.getElementById("spaceShip").innerHTML = '<img src="blue_shirt_front_3390f0.jpg"/>';
        	break;
    	case "Grey":
    		e.target.style.backgroundColor = "#3d7877";
    		document.getElementById("spaceShip").innerHTML = '<img src="gray_shirt_front_3d7877.jpg"/>';
    		break;
    	case "White":
    		e.target.style.backgroundColor = "white";
    		document.getElementById("spaceShip").innerHTML = '<img src="white_shirt_front.jpg"/>';
    		break;
	    default:
	         e.target.style.backgroundColor = "white";
	}
})

alienSelect.addEventListener('change',function(e) {
  var color = e.target.selectedOptions[0].innerText;
	switch(color) {
	    case "Black":
	        e.target.style.backgroundColor = "black";
	        document.getElementById("alien").innerHTML = '<img src="black_shirt_front.jpg"/>';
	        break;
	    case "Red":
	        e.target.style.backgroundColor = "#f03337";
	       	document.getElementById("alien").innerHTML = '<img src="red_shirt_front_f03337.jpg"/>';
	        break;
        case "Blue":
        	e.target.style.backgroundColor = "#3390f0";
        	document.getElementById("alien").innerHTML = '<img src="blue_shirt_front_3390f0.jpg"/>';
        	break;
    	case "Grey":
    		e.target.style.backgroundColor = "#3d7877";
    		document.getElementById("alien").innerHTML = '<img src="gray_shirt_front_3d7877.jpg"/>';
    		break;
    	case "White":
    		e.target.style.backgroundColor = "white";
    		document.getElementById("alien").innerHTML = '<img src="white_shirt_front.jpg"/>';
    		break;
	    default:
	         e.target.style.backgroundColor = "white";
	}
})

predatorSelect.addEventListener('change',function(e) {
  var color = e.target.selectedOptions[0].innerText;
	switch(color) {
	    case "Black":
	        e.target.style.backgroundColor = "black";
	        document.getElementById("predator").innerHTML = '<img src="black_shirt_front.jpg"/>';
	        break;
	    case "Red":
	        e.target.style.backgroundColor = "#f03337";
	       	document.getElementById("predator").innerHTML = '<img src="red_shirt_front_f03337.jpg"/>';
	        break;
        case "Blue":
        	e.target.style.backgroundColor = "#3390f0";
        	document.getElementById("predator").innerHTML = '<img src="blue_shirt_front_3390f0.jpg"/>';
        	break;
    	case "Grey":
    		e.target.style.backgroundColor = "#3d7877";
    		document.getElementById("predator").innerHTML = '<img src="gray_shirt_front_3d7877.jpg"/>';
    		break;
    	case "White":
    		e.target.style.backgroundColor = "white";
    		document.getElementById("predator").innerHTML = '<img src="white_shirt_front.jpg"/>';
    		break;
	    default:
	         e.target.style.backgroundColor = "white";
	}
})

faceHuggerSelect.addEventListener('change',function(e) {
  var color = e.target.selectedOptions[0].innerText;
	switch(color) {
	    case "Black":
	        e.target.style.backgroundColor = "black";
	        document.getElementById("faceHugger").innerHTML = '<img src="black_shirt_front.jpg"/>';
	        break;
	    case "Red":
	        e.target.style.backgroundColor = "red";
	       	document.getElementById("faceHugger").innerHTML = '<img src="red_shirt_front_f03337.jpg"/>';
	        break;
        case "Blue":
        	e.target.style.backgroundColor = "blue";
        	document.getElementById("faceHugger").innerHTML = '<img src="blue_shirt_front_3390f0.jpg"/>';
        	break;
    	case "Grey":
    		e.targt.style.backgroundColor = "grey";
    		document.getElementById("faceHugger").innerHTML = '<img src="gray_shirt_front_3d7877.jpg"/>';
    		break;
    	case "White":
    		e.target.style.backgroundColor = "white";
    		document.getElementById("faceHugger").innerHTML = '<img src="white_shirt_front.jpg"/>';
    		break;
	    default:
	         e.target.style.backgroundColor = "white";
	}
})
