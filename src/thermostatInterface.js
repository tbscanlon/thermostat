$( document ).ready(function() {
  thermostat = new Thermostat();

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
