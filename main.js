const gallery = document.querySelector('#gallery');

/*
function loadJSON(callback) {   
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', './database.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(JSON.parse(xobj.responseText));
    }
  };
  xobj.send(null);  
}
 
 loadJSON(function(json) {
 	var content = json.map((item) => {
    return `<div class="col-lg-3 col-md-4 col-xs-6">
          <a href="${item.image}" class="d-block mb-4 h-100">
            <img class="img-fluid img-thumbnail" src="${item.image}" alt="${item.title}">
          </a>
        </div>`;
}).join('');
  gallery.innerHTML = content
});

//gallery.innerHTML = 'Hello'

*/

const url = "https://script.google.com/macros/s/AKfycbxbq55KNvvg64TZRjfQOqLEp-q-5iyZL53PuedR29Jkdimjk0vH/exec"


// Get data from json api
 function getData(e){
 	const xhr = new XMLHttpRequest();
 	console.log("Clicked");

 	xhr.open("GET", url, true);

 	xhr.onload = function(){
 		if(this.status === 200){
 			const res = JSON.parse(this.responseText);

 			let output = "";

 			res.forEach((item) => {
 				output += `
 							<div class="col-lg-3 col-md-4 col-xs-6">
 							<a href="${item.url}" class="d-block mb-4 h-100" target="_blank">
 							<img class="img-fluid img-thumbnail" src="${item.url}" alt="${item.name}">
 							</a>
 							</div>
 				 		`
 			});

 			gallery.innerHTML = output;
 		}
 		else{
 			gallery.innerHTML = `<li>Something went wrong</li>`
 		}
 	}

 	xhr.send();

 	e.preventDefault();
 }
 
 getData()