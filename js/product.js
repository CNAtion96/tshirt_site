//get buttons
var addFHToCart = document.getElementById("addFHToCart");
var addSpaceShipToCart = document.getElementById("addSpaceShipToCart");
var addAlienToCart = document.getElementById("addAlienToCart");
var addPredatorToCart = document.getElementById("addPredatorToCart");
var addLogoToCart = document.getElementById("addLogoToCart");

//set shirt price and initiate subtotal, total, and tax variables
var subtotalBox = document.getElementById("subtotal");
var totalBox = document.getElementById("total")

//vars to grab selects (color & number)
//colors
var logoColor = document.getElementById("logoColor");
var spaceShipColor = document.getElementById("spaceShipColor");
var alienColor = document.getElementById("alienColor");
var predatorColor = document.getElementById("predatorColor");
var faceHuggerColor = document.getElementById("faceHuggerColor");
//numbers
var logoNum = document.getElementById("logoNum");
var spaceShipNum = document.getElementById("spaceShipNum");
var alienNum = document.getElementById("alienNum");
var predatorNum = document.getElementById("predatorNum");
var faceHuggerNum = document.getElementById("faceHuggerNum");

//constructor to create tshirt
function shirt(name, color, price, numInCart, numToAdd){
    this.name = name;
    this.color = color;
    this.price = price;
    this.numInCart = numInCart;
	this.numToAdd = numToAdd;
}

//create shirts
logo = new shirt("Logo","black",19.99,0);
spaceShip = new shirt("Spaceship","black",19.99, 0, 0);
alien = new shirt("Alien","black",19.99, 0, 0);
predator = new shirt("Predator","black",19.99, 0, 0);
faceHugger = new shirt("Face Hugger","black",19.99, 0, 0);

//array to hold items in cart
var cartItems = [];


//fuction to calculate the after tax total
function calcTotal(totalSub, taxes) {
	return((totalSub * taxes).toFixed(2));
}

//change backgroud color of select and product image
logoColor.addEventListener('change',function(e) {
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

spaceShipColor.addEventListener('change',function(e) {
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

alienColor.addEventListener('change',function(e) {
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

predatorColor.addEventListener('change',function(e) {
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

faceHuggerColor.addEventListener('change',function(e) {
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

//change number of items to add to cart
logoNum.addEventListener('change',function(e){
	var num = e.target.selectedOptions[0].innerText;
	switch(num) {
		case "1":
			logo.numToAdd = 1;
			break;
		case "2":
			logo.numToAdd = 2;
			break;
		case "3":
			logo.numToAdd = 3;
			break;
		case "4":
			logo.numToAdd = 4;
			break;
		case "5":
			logo.numToAdd = 5;
			break;
		case "10":
			logo.numToAdd = 10;
			break;
		case "15":
			logo.numToAdd = 15;
			break;
		case "20":
			logo.numToAdd = 20;
			break;
		case "25":
			logo.numToAdd = 25;
			break;
		case "50":
			logo.numToAdd = 50;
			break;
		default:
			logo.numToAdd = 0;
	}
})

spaceShipNum.addEventListener('change',function(e){
	var num = e.target.selectedOptions[0].innerText;
	switch(num) {
		case "1":
			spaceShip.numToAdd = 1;
			break;
		case "2":
			spaceShip.numToAdd = 2;
			break;
		case "3":
			spaceShip.numToAdd = 3;
			break;
		case "4":
			spaceShip.numToAdd = 4;
			break;
		case "5":
			spaceShip.numToAdd = 5;
			break;
		case "10":
			spaceShip.numToAdd = 10;
			break;
		case "15":
			spaceShip.numToAdd = 15;
			break;
		case "20":
			spaceShip.numToAdd = 20;
			break;
		case "25":
			spaceShip.numToAdd = 25;
			break;
		case "50":
			spaceShip.numToAdd = 50;
			break;
		default:
			spaceShip.numToAdd = 0;
	}
})

alienNum.addEventListener('change',function(e){
	var num = e.target.selectedOptions[0].innerText;
	switch(num) {
		case "1":
			alien.numToAdd = 1;
			break;
		case "2":
			alien.numToAdd = 2;
			break;
		case "3":
			alien.numToAdd = 3;
			break;
		case "4":
			alien.numToAdd = 4;
			break;
		case "5":
			alien.numToAdd = 5;
			break;
		case "10":
			alien.numToAdd = 10;
			break;
		case "15":
			alien.numToAdd = 15;
			break;
		case "20":
			alien.numToAdd = 20;
			break;
		case "25":
			alien.numToAdd = 25;
			break;
		case "50":
			alien.numToAdd = 50;
			break;
		default:
			logo.numToAdd = 0;
	}
})

predatorNum.addEventListener('change',function(e){
	var num = e.target.selectedOptions[0].innerText;
	switch(num) {
		case "1":
			predator.numToAdd = 1;
			break;
		case "2":
			predator.numToAdd = 2;
			break;
		case "3":
			predator.numToAdd = 3;
			break;
		case "4":
			predator.numToAdd = 4;
			break;
		case "5":
			predator.numToAdd = 5;
			break;
		case "10":
			predator.numToAdd = 10;
			break;
		case "15":
			predator.numToAdd = 15;
			break;
		case "20":
			predator.numToAdd = 20;
			break;
		case "25":
			predator.numToAdd = 25;
			break;
		case "50":
			predator.numToAdd = 50;
			break;
		default:
			predator.numToAdd = 0;
	}
})

faceHuggerNum.addEventListener('change',function(e){
	var num = e.target.selectedOptions[0].innerText;
	switch(num) {
		case "1":
			faceHugger.numToAdd = 1;
			break;
		case "2":
			faceHugger.numToAdd = 2;
			break;
		case "3":
			faceHugger.numToAdd = 3;
			break;
		case "4":
			faceHugger.numToAdd = 4;
			break;
		case "5":
			faceHugger.numToAdd = 5;
			break;
		case "10":
			faceHugger.numToAdd = 10;
			break;
		case "15":
			faceHugger.numToAdd = 15;
			break;
		case "20":
			faceHugger.numToAdd = 20;
			break;
		case "25":
			faceHugger.numToAdd = 25;
			break;
		case "50":
			faceHugger.numToAdd = 50;
			break;
		default:
			faceHugger.numToAdd = 0;
	}
})

//add items to cart div
function cartAdd(){
	subtotal = 0;
	cartItems.forEach(function(item){
		subtotal += item.price * item.numToAdd;
	})
	subtotalBox.innerHTML = subtotal.toFixed(2);
	var total = subtotal*1.065;
	totalBox.innerHTML = total.toFixed(2);
}

//add event listeners to buttons to add them to the cart
addFHToCart.addEventListener("click", function(){
	cartItems.push(faceHugger);
	cartAdd();
})

addSpaceShipToCart.addEventListener("click", function(){
	cartItems.push(spaceShip);
	cartAdd();
})

addAlienToCart.addEventListener("click", function(){
	cartItems.push(alien);
	cartAdd();
})

addPredatorToCart.addEventListener("click", function(){
	cartItems.push(predator);
	cartAdd();
})
addLogoToCart.addEventListener("click", function(){
	cartItems.push(logo);
	cartAdd();
})