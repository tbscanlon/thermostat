function Thermostat() {

  $.get('http://api.openweathermap.org/data/2.5/weather?id=2643743&APPID=d67b6ea31078ccea4bd77846d9569c02');
  this.DEFAULT_TEMP = 20,
  this.MIN_TEMP = 10,
  this.MAX_TEMP_POWERSAVE = 25,
  this.MAX_TEMP_NO_POWERSAVE = 32,

  this.LOW_USAGE_THRESHOLD = 18,
  this.MEDIUM_USAGE_THRESHOLD = 25,

  this.temp = this.DEFAULT_TEMP,
  this.min = this.MIN_TEMP,
  this._currentUsage = "medium-usage",
  this.powerSave = true,
  this.max = this.MAX_TEMP_POWERSAVE;
}

Thermostat.prototype.increase = function () {
  if (this.temp >= this.max) {
    alert("Temperature too high");
  } else {
    this.temp++;
    this.setUsage();
  }
};

Thermostat.prototype.decrease = function () {
  if (this.temp <= this.min) {
    alert("Temperature too low");
  } else {
    this.temp--;
    this.setUsage();
  }
};

Thermostat.prototype.getCurrentUsage = function() {
  return this._currentUsage;
};

Thermostat.prototype.togglePowerSave = function () {
  this.powerSave = !this.powerSave;
  if (this.powerSave) {
  this.max = this.MAX_TEMP_POWERSAVE;
  } else {
    this.max = this.MAX_TEMP_NO_POWERSAVE;
  };
};

Thermostat.prototype.resetTemp = function () {
  this.temp = this.DEFAULT_TEMP;
  this.setUsage();
};

Thermostat.prototype.setUsage = function () {
  if (this.temp < this.LOW_USAGE_THRESHOLD) {
    this._currentUsage = "low-usage"
  } else if (this.temp < this.MEDIUM_USAGE_THRESHOLD) {
    this._currentUsage = "medium-usage"
  } else {
    this._currentUsage = "high-usage"
  }
};
