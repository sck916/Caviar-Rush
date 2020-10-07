var searchBTN = $("#searchBTN");
var searchInput= $("#findlocate");

searchBTN.on("click",function(e){
 e.preventDefault();
 var cityName = searchInput.val();
 console.log(cityName);
 var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location="+ cityName,
    "method": "GET",
    "headers": {
      "Authorization": "Bearer vIvEN8jcE-vIxP2rqSxSj4eBClBASSxHExYLte4QRR5hbMHGYj6mHwdW9zQ7RKyCvM70Xt20DAuBOnUIndmCrpowMyqr2hZE0Lvw70Zy8n0bhm5dWJMMtoxejIJ7X3Yx",
    }
  }
  $.ajax(settings).done(function (response) {
    console.log(response);
  });


});

/* var cityName = searchInput.val(); */


/* var queryurl= "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + cityName+"&appid=vIvEN8jcE-vIxP2rqSxSj4eBClBASSxHExYLte4QRR5hbMHGYj6mHwdW9zQ7RKyCvM70Xt20DAuBOnUIndmCrpowMyqr2hZE0Lvw70Zy8n0bhm5dWJMMtoxejIJ7X3Yx"

$.ajax({
    url: queryurl,
    method: "GET"
}).then(function(response){
    console.log(response);
}) */

