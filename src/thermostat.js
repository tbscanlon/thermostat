function Thermostat() {
  this.temp = 20;
  this.min = 10;
  this.powerSave = true;
  this.max = 25;
}

Thermostat.prototype.increase = function () {
  if (this.temp >= this.max) {
    throw new Error("Temperature too high");
  } else {
    this.temp++;
  }
};

Thermostat.prototype.decrease = function () {
  if (this.temp <= this.min) {
    throw new Error("Temperature too low");
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
