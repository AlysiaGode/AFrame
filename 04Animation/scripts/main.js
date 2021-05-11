

// changing individual properties with code and using setInterval
var rotationSpeed = 0.01;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	console.log(myOtherBox.object3D.rotation.x);
	myOtherBox.object3D.rotation.set(
  		THREE.Math.degToRad(15),
  		THREE.Math.degToRad(30),
  		THREE.Math.degToRad(90)
		);
	myOtherBox.object3D.rotation.x -= rotationSpeed;
}

setInterval(spin, 16); //equivalent to 60 fps