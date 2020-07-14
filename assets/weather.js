$(document).ready(function(){

    $("#search-button").click(function(){

        var searchedLocation = $("input[name=search-field]").val();

        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchedLocation + "&units=metric&APPID=4cec047c557bff34558b1d7ae6547462",
            success: function(data){
                console.log(data);
            },
            error: function(error){
                console.log(error);
                var errorMsg = error.responseJSON.message;
                alert(`Woops, something went wrong... ${errorMsg}`);
            }
        });



    });

});