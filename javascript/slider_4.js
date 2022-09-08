let images = new Array;
let dots = document.getElementsByClassName('dots');
let dot = document.getElementById('dot');
let slide1 = document.getElementById('slide1');
let slide2 = document.getElementById('slide2');
let i = 0;
let j = 0;
let k = quantity.options[quantity.selectedIndex].value;
let select = document.getElementById('exhaustiveImg');

arrayFormation();

function arrayFormation(){
	for (j=k-1; j>=0; j--) {
	images[j] = 'javascript\\'+j+'k.jpg';
	}
	slide1.src = images[i];
	for (j=0; j<k; j++) {
	dot.innerHTML+='<span class="dots" onclick="currentSlide('+j+')"></span>';
	}
	dots[0].className += " dotCurrent";
	j=0;
}

select.onclick = function(){
	k = quantity.options[quantity.selectedIndex].value;
	dot.innerHTML = '';
	images = [];
	i=0;
	arrayFormation();
}

function showSlide(n) {
	dots[i].className = dots[i].className.replace("dotCurrent", "");
	i+=n;
	i = indexArr(i);
	slide1.src = images[i];
	dots[i].className += " dotCurrent";
}

function newSlide(n) {
	if (j==0){
		j=n;
		let timer = setInterval(function() {
			j+=n;
			slide1.style.marginLeft = j+'px';
			slide2.style.marginLeft = -500*n+j+'px';
			if (slide2.style.marginLeft == '0px') {
				showSlide(n);
				clearInterval(timer);
				j=0;
				slide1.style.marginLeft = 0;
			}
		});
		slide2.src = images[indexArr(i+n)];
	}
}

function currentSlide(n){
	dots[i].className = dots[i].className.replace("dotCurrent", "");
	slide1.src = images[n];
	dots[n].className += " dotCurrent";
	i=n;
}

function indexArr(z) {
	if (z == images.length) {
    z = 0;
  }
	if (z<0) {
		z = images.length-1;
	}
	return z;
}