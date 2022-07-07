//only runs ones page loaded
$(document).ready(function(){

var search = $("#search")
var cityInput = $("#cityInput").html;

    
search.click(function() {
    var cInput = $('#cityInput').val();
    $("ul").append("<li></li>").text(cInput)

    var url1 = "http://api.openweathermap.org/geo/1.0/direct?q="+cInput+"&limit=1&appid=50264aa9ddadbf6ae7e3c2c0f0352af2"
    fetch(url1).then(function(response) {
        return response.json();
    }).then (function (data) {
        console.log(data);

        var lat = data.list;
        var lon = data.list;

        console.log(lat);
        console.log(lon);


        var url2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cInput + "&units=imperial&appid=50264aa9ddadbf6ae7e3c2c0f0352af2";
        fetch(url2).then(function(response) {
            return response.json();
        }).then (function (data) {
            console.log(data);

            var cityName = data.city.name;
            var temperature = data.list[0].main.temp + " °F";
            var wind = data.list[0].wind.speed + " MPH";
            var humidity = data.list[0].main.humidity + " %";

            console.log(cityName);
            console.log(temperature);
            console.log(wind);
            console.log(humidity);

            $("h2").text(cityName)
            $(".temp").text(temperature)
            $(".wind").text(wind)
            $(".humidity").text(humidity)
        });
    });
});

});