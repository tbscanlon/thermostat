function Thermostat() {
  this.temp = 20;
  this.min = 10;
}

Thermostat.prototype.increase = function () {
  this.temp++;
};

Thermostat.prototype.decrease = function () {
  if (this.temp <= this.min) {
    throw new Error("Temperature too low");
  }
  else {
    this.temp--;
  }
};
