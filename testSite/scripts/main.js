var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc=== 'images/corralcoweb.jpg'){
		myImage.setAttribute('src','images/mountains.jpg');
	}
	else{
		myImage.setAttribute('src','images/corralcoweb.jpg')
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Duck is cool, '+ myName;
}

if(!localStorage.getItem('name')){
	setUserName();
}else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Duck is cool, '+ storedName;
}

myButton.onclick = function(){
	setUserName;
}