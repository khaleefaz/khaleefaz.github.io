const gallery = document.querySelector('#gallery');
const single  = document.querySelector('#page_container');

const urlAllImg= "https://script.google.com/macros/s/AKfycbxbq55KNvvg64TZRjfQOqLEp-q-5iyZL53PuedR29Jkdimjk0vH/exec"

var allData = null;

function singleImg(item){
	return `
	 	<div class="card">
 				<img class="img-fluid" src="${item.url}" alt="${item.name}">
				<div class="" style="padding:5px;">
					<i class="fas fa-heart" style="font-size:30px;color:#ff0000"></i>
					<i class="far fa-comment" style="font-size:30px;color:#000000"></i>
					<i class="far fa-paper-plane" style="font-size:30px;color:#000000"></i>
				</div>
 		</div>
	`
}

function OneImg(item){
	return `
	<div class="row text-center text-lg-left">
	 	<div class="col-lg-3 col-md-4 col-xs-6">
 			<a href="#${item.id}" class="d-block mb-4 h-100" >
 				<img class="img-fluid img-thumbnail" src="${item.url}" alt="${item.name}">
 			</a>
 		</div>
</div>
	`
}

function Routing() {
  if(location.hash != '') {
  	var hashed = location.hash;
  	var Id = hashed.replace('#', '')
  	if(allData == null) {
  	getSingle(Id);
  	} else {
  		allData.forEach((item) => {
  			if(item.id == Id) {
 				var op = singleImg(item);
 				 single.innerHTML = op;
  			}
 		});
  	}
  } 
  else {
  	if(allData == null) {
  	getData(urlAllImg);
  	} else {
			let output = "";

 			allData.forEach((item) => {
 				output +=OneImg(item);
 			});

 			single.innerHTML = output;
  	}
  }
  
}

window.onhashchange = Routing;

Routing();


// Get data from json api
 function getData(url){
 	const xhr = new XMLHttpRequest();
 	console.log("Clicked");

 	xhr.open("GET", url, true);

 	xhr.onload = function(){
 		if(this.status === 200){
 			const res = JSON.parse(this.responseText);
 			allData = res;

 			let output = "";

 			res.forEach((item) => {
 				output += OneImg(item);
 			});

 			single.innerHTML = output;
 		}
 		else{
 			single.innerHTML = `<li>Something went wrong</li>`
 		}
 	}

 	xhr.send();

 	e.preventDefault();
 }
 
 // Get data from json api
 function getSingle(id){
 	const url = "https://script.google.com/macros/s/AKfycbwpkB4Z8jZbKDx4EOazOJm6vVlrMHdDHnhedCF1xvpugPq397QF/exec?id=" + id;
 	const xhr = new XMLHttpRequest();

 	xhr.open("GET", url, true);

 	xhr.onload = function(){
 		if(this.status === 200){
 			const res = JSON.parse(this.responseText);

 			let output = "";

 				output = singleImg(res);

 			single.innerHTML = output;
 		}
 		else{
 			single.innerHTML = `<li>Something went wrong</li>`
 		}
 	}

 	xhr.send();

 	e.preventDefault();
 }
