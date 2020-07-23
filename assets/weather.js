$(document).ready(function () {

    // Stored Weather Images 

    var clouds = "Images/clouds2.png";
    var clearDay = "Images/clearDay.png";
    var clearNight = "Images/clearNight.png";
    var sunClouds = "Images/sunClouds.png";
    var moonClouds = "Images/moonClouds.png";
    var scatteredClouds = "Images/scatteredClouds.png";
    var brokenClouds = "Images/brokenClouds.png";
    var rain = "Images/rain.png";
    var showerRain = "Images/showerRain.png";
    var thunder = "Images/thunder.png";
    var snow = "Images/snow.png";
    var mist = "Images/mist.png";
    var errorImg = "Images/errorImg.png"


    $("#search-button").click(function () {

        // Fetch input value for weather query

        var searchedLocation = $("input[name=search-field]").val();

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

                // add data to DOM

                document.getElementById("card-wrapper").innerHTML +=
                    `<div class="inner-card-wrap">
                    <p class="country-name">${data.name} in ${data.sys.country}</p>
                    <img src="${image}">
                    </div>
                    `;

            },
            error: function (error) {
                console.log(error);
                var errorMsg = error.responseJSON.message;
                alert(`Woops, something went wrong... ${errorMsg}`);
            }
        });




    });

});