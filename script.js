var searchBTN = $("#searchBTN");
var searchInput = $("#findlocate");

function getBreweries(cityName) {
  console.log(cityName);
  var settings = {
    async: true,
    crossDomain: true,
    url:
      "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" +
      cityName + "&categories=breweries",
    method: "GET",
    headers: {
      Authorization:
        "Bearer ajiK8lEyrwTd3zrvz8EWzy8vgjLgQrSlaAGU0Mjdb0Ax_GFqJRJZoMIUKEJ99izPtUQb7qwDiJqAoUgICmuO3s4fV9Hvnzub6N1PdbOTaD7Nc18dyjW_d0nGBPmBX3Yx",
    }
  };

  console.log('about to do ajax call here our seetings', settings);
  apiSmack(settings);
};

function getFood(cityName) {
  var settings = {
    async: true,
    crossDomain: true,
    url:
      "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" +
      cityName + "&categories=food",
    method: "GET",
    headers: {
      Authorization:
        "Bearer ajiK8lEyrwTd3zrvz8EWzy8vgjLgQrSlaAGU0Mjdb0Ax_GFqJRJZoMIUKEJ99izPtUQb7qwDiJqAoUgICmuO3s4fV9Hvnzub6N1PdbOTaD7Nc18dyjW_d0nGBPmBX3Yx",
    }
  };

  console.log('about to do ajax call here our seetings', settings)
  apiSmack(settings);
}

function getWeather(cityName){
  var settings = {
    async: true,
    crossDomain: true,
    url:
     "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=55df6ba985df89d7a4dfeb476e2f03bb",

    method: "GET",
  };
  console.log("Getting the weather...");
  apiSmack(settings);

};

  

function apiSmack(settings) {
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    var destName = $("#destName");
    var cityHeading = $("#destination");
    
    if(response.businesses){
    cityHeading.text(response.businesses[0].location.city);
    console.log("Im in the response.business if statement");

    for (var i = 0; i < 5; i++) {
      // 1 make a piece of html with jquery
      console.log("IM in the for loop about to create content");
      var resterauntContainer = $("<div class = 'placeContainer'>");
      var resterauntTitle = $('<h4>')

      var imageDiv = $("<div class='imageDiv'>");
      var resterauntImage = $('<img>');

      var phone = $('<p>');
      var address = $('<p>');

      var detailContainer = $("<div class = 'detail-container'>");
      var price = $('<p>');
      var rating = $('<p>');
      var reviewCount = $('<p>');
      var getimgUrl = response.businesses[i].image_url;
    console.log("Made div content in loop");

      //getReviews(cityId)
      //2 dress it up how u want classess text ect.

      resterauntTitle.text(response.businesses[i].name)
      resterauntImage.attr("src", getimgUrl);
      resterauntImage.addClass("images");
      var addressDiv = $("<div class = 'address'>");
      phone.text(response.businesses[i].display_phone);
      phone.addClass('phone');
      // review.text(response)
      resterauntContainer.addClass('searchResult-Container');
      address.text("Address: " + response.businesses[i].location.display_address[0] +  " " + response.businesses[i].location.display_address[1]);

      price.text("Expected Cost: " + response.businesses[i].price);
      rating.text("Rating: " + response.businesses[i].rating + " ⭐️");
      reviewCount.text("Review Count: " + response.businesses[i].review_count);
      console.log("dressed up the content in loop");
      
      //3 .append that sucker to the page!!
      imageDiv.append(resterauntImage);
      detailContainer.append(price, rating, reviewCount);
      addressDiv.append(phone, address)
      resterauntContainer.append(resterauntTitle, detailContainer, imageDiv, addressDiv);
       $('#foodDiv').append(resterauntContainer);
      console.log("appended created content in loop");
    }
    
    };

    if(response.list){
    
    var weatherDiv = $("#weatherDiv");
    var weather = $("<p>");
    var dataTemp = Math.floor((response.list[0].main.temp - 273.15) * 1.80 + 32);
    weather.text("Temperature: " + dataTemp + " °F");
    weatherDiv.append(weather);
    destName.append(weatherDiv);
    };
  
  });
};


searchBTN.on("click", function (e) {
  console.log('we got clciked!!!');
  e.preventDefault();
  $('#foodDiv').html("");
  $('#weatherDiv').html("");
  $("#cityInfos").css("visibility", "visible");
  var cityName = searchInput.val();
  getBreweries(cityName)
  getFood(cityName)
  getWeather(cityName);
  
});



  // var settings2 = {
  //   async: true,
  //   crossDomain: true,
  //   url:
  //    "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=3d8323a40962f87fcaa6667244e7b268",

  //   method: "GET",

  // };
  



/* var cityName = searchInput.val(); */

/* var queryurl= "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + cityName +"&appid=vIvEN8jcE-vIxP2rqSxSj4eBClBASSxHExYLte4QRR5hbMHGYj6mHwdW9zQ7RKyCvM70Xt20DAuBOnUIndmCrpowMyqr2hZE0Lvw70Zy8n0bhm5dWJMMtoxejIJ7X3Yx"

$.ajax({
    url: queryurl,
    method: "GET"
}).then(function(response){
    console.log(response);
}) */
