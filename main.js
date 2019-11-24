const gallery = document.querySelector('#gallery');

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