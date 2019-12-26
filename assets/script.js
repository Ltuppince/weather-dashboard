window.addEventListener('load', ()=> {
    let lon;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            console.log(position);
            console.log(queryURL);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            var APIKey ="89bb7ee36d7c6fd2b66da3633eaa25fc";
            
            var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139" + $("#inputCity"). val() + "&appid=" + APIKey;
            +APIKey;
            console.log(queryURL)
             $.ajax({
                url: queryURL,
                method: "GET"
             })
             .then(function(response) {
                 $("#cityInput").text("City:"+response.name);
                 console.log(response)
             })
        
         
             .then(response => {
                return response .json();
             })
             .then(data => {
                console.log(data);
            })
            $("#cityInput").text();
        })
       
    }  
});

function getWeather(){
var queryURL = "https://api.openweathermap.org/data/2.5/weather?id=2172797";
var APIKey ="89bb7ee36d7c6fd2b66da3633eaa25fc";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?id=2172797" + $("#inputCity").val() + "&appid="+ APIKey;

}
$(document).ready(function () {
    $("#submitBtn").click(function (event) {
        var APIKey ="89bb7ee36d7c6fd2b66da3633eaa25fc";
        var input = $("#inputCity").val();
        console.log(input)
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + $("#inputCity").val() + "&appid="+ APIKey;

        event.preventDefault()
        var validate = Validate();
        $("#message").html(validate);
        if (validate.length == 0) {
            $.ajax({
                method: "GET",
                url: queryURL,
        
            })
            .then(function(response) {
                console.log(response);


                $("#cityInput").text();
       
                console.log(queryURL)
            
        // })
       
           $("#cityInput").text("City:" + response.name);

        //    console.log(response.timezone);
        //    $("#timezoneInput").text("Timezone:" + response.timezone);

           var ktemp = response.main.temp;
           console.log(ktemp);

           var ftemp = (((ktemp - 273.15) * 1.8) + 32);
           console.log(ftemp);
           $("#temperatureInput").text("Temperature:" + ftemp.toFixed());

           console.log(response.main.humidity);
           $("#humidityInput").text("Humidity:" + response.main.humidity);

           console.log(response.wind.speed);
           $("#windSpeedInput").text("Wind Speed:" + response.wind.speed);
           
            $("#temp").html(cel);
            
            $("#results").html(table);
        
            alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)

            })
            .then(response => {
                return response .json();
             })
             .then(data => {
                console.log(data);
            })
            
                }

                var uVInput
                var queryURL = "http://api.openweathermap.org/data/2.5/uvi?appid=89bb7ee36d7c6fd2b66da3633eaa25fc&lat=37.68&lon=-77.89";

                $.ajax({
                    url: queryURL, 
                    method:  "GET"         
                })
                .then(function(response) {
                    console.log(response);
                // })
                

                    console.log(response.date_iso);
                    $("#dateInput").text("Date:" + response.date_iso);

                    console.log(response.value);
                    $("#uVInput").text("UV Index:" + response.value);

            });

            var fiveDay
            var queryURL = "https://api.openweathermap.org/data/2.5/forecast?id=5387428&units=imperial&APPID=349502f2a4f0d6ec4cf04d1a6f9b5eb3"

            $.ajax({
                url:  queryURL,
                method:  "GET"
            })
    
            .then(function(response) {
                console.log(response)
    
                $("fiveDay").text("Five Day Forecast" + result.value);
            })
            function generateList() {
                var x = localStorage.getItem("index");
                for (var i = 0; i < x; i++) {
                    var getListItem = localStorage.getItem("cityInput" + i);
                    var newListItem = $("<li class='list-group-item'>").text(getListItem);
                    $("#cityList").append(newListItem);
                }
        }
        generateList()

        function lastSearched() {
            var last = parseInt(localStorage.getItem("index"));
            console.log(last);
            if (localStorage.getItem("index") === null) { 
                var cityDefault = $("#cityDefault").text();
                $("#submitBtn").val(cityDefault).text();
                getWeather();
            }
            else {
                last -= 1;
                var result = localStorage.getItem("cityInput" + last);
                $("#searchInput").val(result).text();
                getWeather();
            }
        }
        
        lastSearched();
    });

   
 
    // $(document).ajaxStart(function () {
        // $("img").show();
    // });
 
    // $(document).ajaxStop(function () {
        // $("img").hide();
    // });
 
    function Validate() {
        var errorMessage = "";
        if ($("#inputCity").val() == "Select") {
            errorMessage += "► Select City";
        }
        return errorMessage;
    }
});