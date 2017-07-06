function Thermostat() {
  this.temp = 20;
  this.min = 10;
  this._currentUsage = "medium-usage",
  this.powerSave = true;
  this.max = 25;
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
  this.max = 25;
  } else {
    this.max = 32;
  };
};

Thermostat.prototype.reset = function () {
  this.temp = 20;
};

Thermostat.prototype.setUsage = function () {
  if (this.temp < 18) {
    this._currentUsage = "low-usage"
  } else if (this.temp < 25) {
    this._currentUsage = "medium-usage"
  } else {
    this._currentUsage = "high-usage"
  }
};
