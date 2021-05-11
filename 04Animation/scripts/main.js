

// changing individual properties with code and using setInterval
var rotationSpeed = 0.01;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.xyz -= rotationSpeed;
	console.log(myOtherBox.object3D.rotation.xyz);
}

setInterval(spin, 16); //equivalent to 60 fps