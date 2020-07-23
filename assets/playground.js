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



        var searchedLocation = $("input[name=search-field]").val();

        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchedLocation + "&units=metric&APPID=4cec047c557bff34558b1d7ae6547462",
            success: function (data) {
                console.log(data);


            
                document.getElementById("card-wrapper").innerHTML += 
                    `
                    <p class="country.name">${data.name} in ${data.sys.country}</p>
                    <img class="weather-img">

                    `;

                if (data.weather[0].icon == "01d") {
                    $(".weather-img").attr("src", clearDay);
                } else if (data.weather[0].icon == "01n") {
                    $(".weather-img").attr("src", clearNight);
                } else if (data.weather[0].icon == "02d") {
                    $(".weather-img").attr("src", sunClouds);
                } else if (data.weather[0].icon == "02n") {
                    $(".weather-img").attr("src", moonClouds);
                } else if (data.weather[0].icon == "03d" || data.weather[0].icon == "03n") {
                    $(".weather-img").attr("src", scatteredClouds);
                } else if (data.weather[0].icon == "04d" || data.weather[0].icon == "04n") {
                    $(".weather-img").attr("src", brokenClouds);
                } else if (data.weather[0].icon == "09d" || data.weather[0].icon == "09n") {
                    $(".weather-img").attr("src", showerRain);
                } else if (data.weather[0].icon == "10d" || data.weather[0].icon == "10n") {
                    $(".weather-img").attr("src", rain);
                } else if (data.weather[0].icon == "11d" || data.weahter[0].icon == "11n") {
                    $(".weather-img").attr("src", thunder);
                } else if (data.weather[0].icon == "13d" || data.weahter[0].icon == "13n") {
                    $(".weather-img").attr("src", snow);
                } else if (data.weather[0].icon == "50d" || data.weahter[0].icon == "50n") {
                    $(".weather-img").attr("src", mist);
                } else {
                    $(".weather-img").attr("src", errorImg);
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