var searchBTN = $("#searchBTN");
var searchInput = $("#findlocate");

searchBTN.on("click", function (e) {
  e.preventDefault();
  var cityName = searchInput.val();
  console.log(cityName);
  var settings = {
    async: true,
    crossDomain: true,
    url:
      "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" +
      cityName,
    method: "GET",
    headers: {
      Authorization:
        "Bearer uYiXPDKaT7WGhv2IiyHMIspnpwCYhdMtmMx-evY72HPrl5Q2dYYK4IdGjOWz56SqTF-aaIit1Ke5qwHcX7lH-1wASlG4CVuTQhQhqD2uDUKKxbu_sctJlQsHgEB_X3Yx",
    },
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
    var cityHeading= $("#destination");
    cityHeading.text(response.businesses[0].location.city);
  });
  var settings2 = {
    async: true,
    crossDomain: true,
    url:
     "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=3d8323a40962f87fcaa6667244e7b268",
    
    method: "GET",
    
  };
  $.ajax(settings2).done(function (response2) {
    console.log(response2);
    var weatherDisp = $("#degrees");
    var actualTemp = Math.floor((response2.list[0].main.temp- 273.15) * 1.80 + 32);
   weatherDisp.text("The current temperature is " + actualTemp +"°F");


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
