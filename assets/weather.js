$(document).ready(function () {

    // Stored Weather Images 

    let clouds = "Images/clouds2.png";
    let clearDay = "Images/clearDay.png";
    let clearNight = "Images/clearNight.png";
    let sunClouds = "Images/sunClouds.png";
    let moonClouds = "Images/moonClouds.png";
    let scatteredClouds = "Images/scatteredClouds.png";
    let brokenClouds = "Images/brokenClouds.png";
    let rain = "Images/rain.png";
    let showerRain = "Images/showerRain.png";
    let thunder = "Images/thunder.png";
    let snow = "Images/snow.png";
    let mist = "Images/mist.png";
    let errorImg = "Images/errorImg.png"

    // Add ENTER click event for search

    var input = document.getElementById("search-field");

    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("search-button").click();
        }
    });

    // Remove all existing Data cards

    $("#remove-button").click(function() {
        $(".responsive-div").remove();
    })

    // Get Weather Data

    $("#search-button").click(function () {

        // Fetch input value for weather query

        let searchedLocation = $("input[name=search-field]").val();

        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchedLocation + "&units=metric&APPID=4cec047c557bff34558b1d7ae6547462",
            success: function (data) {
                console.log(data);

                // Check which Weather IMG has been received + create new variable with custom IMG

                let image = data.weather[0].icon;

                switch (image) {
                    case "01d":
                        image = clearDay;
                        break;
                    case "01n":
                        image = clearNight;
                        break;
                    case "02d":
                        image = sunClouds;
                        break;
                    case "02n":
                        image = moonClouds;
                        break;
                    case "03d":
                        image = scatteredClouds;
                        break;
                    case "03n":
                        image = scatteredClouds;
                        break;
                    case "04n":
                        image = brokenClouds;
                        break;
                    case "04d":
                        image = brokenClouds;
                        break;
                    case "09d":
                        image = showerRain;
                        break;
                    case "09n":
                        image = showerRain;
                        break;
                    case "10d":
                        image = rain;
                        break;
                    case "10n":
                        image = rain;
                        break;
                    case "11d":
                        image = thunder;
                        break;
                    case "11n":
                        image = thunder;
                        break;
                    case "13d":
                        image = snow;
                        break;
                    case "13n":
                        image = snow;
                        break;
                    case "50n":
                        image = mist;
                        break;
                    case "50d":
                        image = mist;
                        break;
                    default:
                        image = errorImg;
                        break;
                }

                // Create a new weather card div

                function createCard() {
                    document.getElementById("outer-card-wrapper").innerHTML +=
                        `<div class="col-md-4 col-sm-6 responsive-div">
                    <div class="inner-card-wrapper">
                    <p class="country-name">${data.name} in ${data.sys.country}</p>
                    <img src="${image}">
                    <p class="weather-temp">${Math.floor(data.main.temp)} °C</p>
                    <p class="but-feels d-sm-block d-none d-sm-block">but feels like... ${data.main.feels_like} °C</p>
                    <p class="weather-description">${data.weather[0].description}</p>
                    </div>
                    </div>
                    `}


                let currentDiv = $(".col-sm-6");
                let currentCards = $(".inner-card-wrapper");


                // Create only up to 6 weather card divs at any one time. 

                if (currentCards.length) {
                    if (currentCards.length > 5) {
                        currentDiv[0].remove();
                        createCard();
                    } else {
                        createCard();
                    }
                } else {
                    createCard();
                }

            }, 

            // Error handling
        
            error: function (error) {
                console.log(error);
                var errorMsg = error.responseJSON.message;
                alert(`Woops, something went wrong... ${errorMsg}`);
            }
        });
    });
});