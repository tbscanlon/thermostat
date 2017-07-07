$( document ).ready(function() {
  thermostat = new Thermostat();

   $.get('http://api.openweathermap.org/data/2.5/weather?id=2643743&APPID=d67b6ea31078ccea4bd77846d9569c02', function( weather ) {
    $("#forecast-city").html(weather.name);
    $("#forecast-country").html(weather.country);
    $("#forecast-temp").html(weather.main.temp);
    $("#forecast-outlook").html(weather.weather[0].main);
  });

  $.get('http://localhost:4567/temp', function ( data ) {
    $("#temp").html(data.temp);
    $("#save_power_save").html(data.power_save);
  });

  $( "#increase" ).click(function( event ) {
    thermostat.increase();
    updateTemp();
    checkCurrentUsage();
  });

  $( "#decrease" ).click(function ( event ) {
    thermostat.decrease();
    updateTemp();
    checkCurrentUsage();
  })

  $( "#power_saving" ).click(function( event ) {
    thermostat.togglePowerSave();
  })

  $( "#reset" ).click(function( event ) {
    thermostat.resetTemp();
    updateTemp();
    checkCurrentUsage();
  })

  function updateTemp() {
    $( "#temp" ).html(thermostat.temp);
  }

 function createUrl(cityName) {
   return "http://api.openweathermap.org/data/2.5/weather?" + cityName + "&APPID=d67b6ea31078ccea4bd77846d9569c02"
 }

 var url;
 var cityName;

 $( "#form" ).on( "submit", function( event ) {
   event.preventDefault();
   url = createUrl($( this ).serialize());
   $.get(url, function( weather ) {
    $("#forecast-city").html(weather.name);
    $("#forecast-country").html(weather.country);
    $("#forecast-temp").html(weather.main.temp);
    $("#forecast-outlook").html(weather.weather[0].main);
  });

 });


  function checkCurrentUsage() {
    if (thermostat.getCurrentUsage() == "low-usage") {
      $("#usage_display").removeClass("btn-warning");
      $("#usage_display").addClass("btn-success");
    } else if (thermostat.getCurrentUsage() == "medium-usage") {
      $("#usage_display").removeClass("btn-success");
      $("#usage_display").removeClass("btn-danger");
      $("#usage_display").addClass("btn-warning");
    } else {
      $("#usage_display").removeClass("btn-warning");
      $("#usage_display").addClass("btn-danger");
    }
  }
});
