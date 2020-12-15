let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	
	if(mySrc === 'img/javascript1.png') myImage.setAttribute('src','img/javascript2.png');
	else myImage.setAttribute('src','img/javascript1.png');
}