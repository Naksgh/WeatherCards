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

    $("#search-button").click(function () {

        // Fetch input value for weather query

        let searchedLocation = $("input[name=search-field]").val();

        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchedLocation + "&units=metric&APPID=4cec047c557bff34558b1d7ae6547462",
            success: function (data) {
                console.log(data);

                // Check which Weather IMG has been received + create new variable with custom IMG

                if (data.weather[0].icon == "01d") {
                    image = clearDay;
                } else if (data.weather[0].icon == "01n") {
                    image = clearNight;
                } else if (data.weather[0].icon == "02d") {
                    image = sunClouds;
                } else if (data.weather[0].icon == "02n") {
                    image = moonClouds;
                } else if (data.weather[0].icon == "03d" || data.weather[0].icon == "03n") {
                    image = scatteredClouds;
                } else if (data.weather[0].icon == "04d" || data.weather[0].icon == "04n") {
                    image = brokenClouds;
                } else if (data.weather[0].icon == "09d" || data.weather[0].icon == "09n") {
                    image = showerRain;
                } else if (data.weather[0].icon == "10d" || data.weather[0].icon == "10n") {
                    image = rain;
                } else if (data.weather[0].icon == "11d" || data.weather[0].icon == "11n") {
                    image = thunder;
                } else if (data.weather[0].icon == "13d" || data.weather[0].icon == "13n") {
                    image = snow;
                } else if (data.weather[0].icon == "50d" || data.weather[0].icon == "50n") {
                    image = mist;
                } else {
                    image = errorImg;
                }

                // Create only up to 6 weather card divs. 

                let currentCards = $(".inner-card-wrapper");
                console.log(currentCards.length);

                if (currentCards.length) {
                    if (currentCards.length > 5) {
                        currentCards[0].remove();
                        document.getElementById("outer-card-wrapper").innerHTML +=
                            `<div class="inner-card-wrapper">
                    <p class="country-name">${data.name} in ${data.sys.country}</p>
                    <img src="${image}">
                    <p class="weather-temp">${Math.floor(data.main.temp)} °C</p>
                    <p class="but-feels">but feels like... ${data.main.feels_like} °C</p>
                    <p class="weather-description">${data.weather[0].description}</p>
                    
                    </div>
                    `;
                    } else {
                        document.getElementById("outer-card-wrapper").innerHTML +=
                            `<div class="inner-card-wrapper">
                    <p class="country-name">${data.name} in ${data.sys.country}</p>
                    <img src="${image}">
                    <p class="weather-temp">${Math.floor(data.main.temp)} °C</p>
                    <p class="but-feels">but feels like... ${data.main.feels_like} °C</p>
                    <p class="weather-description">${data.weather[0].description}</p>
                    
                    </div>
                    `;

                    }

                } else {
                    document.getElementById("outer-card-wrapper").innerHTML +=
                        `<div class="inner-card-wrapper">
                    <p class="country-name">${data.name} in ${data.sys.country}</p>
                    <img src="${image}">
                    <p class="weather-temp">${Math.floor(data.main.temp)} °C</p>
                    <p class="but-feels">but feels like... ${data.main.feels_like} °C</p>
                    <p class="weather-description">${data.weather[0].description}</p>
                    
                    </div>
                    `;

                }






            },
            error: function (error) {
                console.log(error);
                var errorMsg = error.responseJSON.message;
                alert(`Woops, something went wrong... ${errorMsg}`);
            }
        });




    });

});