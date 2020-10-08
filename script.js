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
        "Bearer uYiXPDKaT7WGhv2IiyHMIspnpwCYhdMtmMx-evY72HPrl5Q2dYYK4IdGjOWz56SqTF-aaIit1Ke5qwHcX7lH-1wASlG4CVuTQhQhqD2uDUKKxbu_sctJlQsHgEB_X3Yx",
    },
  };

  console.log('about to do ajax call here our seetings', settings)
  apiSmack(settings)
}

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
        "Bearer uYiXPDKaT7WGhv2IiyHMIspnpwCYhdMtmMx-evY72HPrl5Q2dYYK4IdGjOWz56SqTF-aaIit1Ke5qwHcX7lH-1wASlG4CVuTQhQhqD2uDUKKxbu_sctJlQsHgEB_X3Yx",
    },
  };

  console.log('about to do ajax call here our seetings', settings)
  apiSmack(settings)
}

function apiSmack(settings) {
  $.ajax(settings).done(function (response) {
    console.log(response);
    var cityHeading = $("#destination");
    cityHeading.text(response.businesses[0].location.city);

    for (var i = 0; i < 5; i++) {
      // 1 make a piece of html with jquery
      var resterauntContainer = $("<div class = 'placeContainer'>");
      var resterauntTitle = $('<h2>')
      var resterauntImage = $('<img>')
      var phone = $('<p>')
      var getimgUrl = response.businesses[i].image_url;
      
      //2 dress it up how u want classess text ect.

      resterauntTitle.text(response.businesses[i].name)
      resterauntImage.attr("src", getimgUrl);
      resterauntImage.addClass("images");

      console.log("I got through after setting the image attribute");
      phone.text(response.businesses[i].display_phone)
      phone.addClass('phone')
      resterauntContainer.addClass('searchResult-Container')

      //3 .append that sucker to the page!!
      resterauntContainer.append(resterauntTitle, resterauntImage, phone);
      $('#foodDiv').append(resterauntContainer)
    }
  })
}


searchBTN.on("click", function (e) {
  console.log('we got clciked!!!')
  e.preventDefault();
  var cityName = searchInput.val();
  getBreweries(cityName)
  getFood(cityName)

});

//   var settings2 = {
//     async: true,
//     crossDomain: true,
//     url:
//      "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=3d8323a40962f87fcaa6667244e7b268",

//     method: "GET",

//   };
//   $.ajax(settings2).done(function (response2) {
//     console.log(response2);
//     var weatherDisp = $("#degrees");
//     var actualTemp = Math.floor((response2.list[0].main.temp- 273.15) * 1.80 + 32);
//    weatherDisp.text("The current temperature is " + actualTemp +"°F");

// });

//});



/* var cityName = searchInput.val(); */

/* var queryurl= "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + cityName +"&appid=vIvEN8jcE-vIxP2rqSxSj4eBClBASSxHExYLte4QRR5hbMHGYj6mHwdW9zQ7RKyCvM70Xt20DAuBOnUIndmCrpowMyqr2hZE0Lvw70Zy8n0bhm5dWJMMtoxejIJ7X3Yx"

$.ajax({
    url: queryurl,
    method: "GET"
}).then(function(response){
    console.log(response);
}) */
