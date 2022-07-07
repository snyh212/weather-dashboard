# weather-dashboard

[Deployable Link: https://snyh212.github.io/weather-dashboard/](https://snyh212.github.io/weather-dashboard/)

## Description

With this webpage a user can enter in a city name (if its within the US) & they will be shown the current weather conditions there as well as a 5-day forecast.


## Technologies used

Project done using HTML, CSS, JavaScript, DOM, Github, GitLab, JQuery, bootstrap, moment.js, and openweathersourceAPI on VS code and GitBash.


## Code and its function
In this code I add 'click' to the button, while simultaneously adding a list to be appended with the value of the input form-
```
var search = $("#search")
var cityInput = $("#cityInput").html;

    
search.click(function() {
    var cInput = $('#cityInput').val();
    $("ul").append("<li></li>").text(cInput)
```
The JavaScript code here is used to obtain and parse the data needed to be inputted in the correct fields-
```
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
```
The webpage-

<img src="assets\Screenshot 2022-07-06 235207.png">


## Contact

[E-mail: Snyh121@gmail.com](mailto:snyh121@gmail.com")  
[GitHub: snyh212](https://r.search.yahoo.com/_ylt=AwrJ6yegl7JipfcAzB5XNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1655900193/RO=10/RU=https%3a%2f%2fgithub.com%2fsnyh212/RK=2/RS=jAFa0VbZnIusPrwj.ZmIx9gZ3AA-)  
[LinkdIn: Shmuel-Hoffman](https://www.linkedin.com/in/shmuel-hoffman-254b0223b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BS2rg0PtBTLeG2szT2ZbGmg%3D%3D)