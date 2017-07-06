function Thermostat() {
  this.temp = 20;
  this.min = 10;
  this.powerSave = true;
  this.max = 25;
}

Thermostat.prototype.increase = function () {
  if (this.temp >= this.max) {
    alert("Temperature too high");
  } else {
    this.temp++;
  }
};

Thermostat.prototype.decrease = function () {
  if (this.temp <= this.min) {
    alert("Temperature too low");
  } else {
    this.temp--;
  }
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

Thermostat.prototype.usage = function () {
  if (this.temp < 18) {
    return "low-usage"
  } else if (this.temp < 25) {
    return "medium-usage"
  } else {
    return "high-usage"
  }
};
