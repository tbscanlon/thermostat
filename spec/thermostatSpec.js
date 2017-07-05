describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("Initialisation", function() {
    it("has a default temperature", function() {
      expect(thermostat.temp).toEqual(20);
    });

    it("has a minimum temperature", function () {
      expect(thermostat.min).toEqual(10);
    });

    it("has powerSave switched on as default", function () {
      expect(thermostat.powerSave).toBeTruthy();
    });

    it("has a maximum temperature", function () {
      expect(thermostat.max).toEqual(25);
    });
  });

  describe("#increase", function() {
    it("increases the thermostat's temperature by 1 degree",function () {
      thermostat.increase();
      expect(thermostat.temp).toEqual(21);
    });
  });

  describe("#decrease", function () {
    it("decreases the thermostat's temperature by 1 degree", function () {
      thermostat.decrease();
      expect(thermostat.temp).toEqual(19);
    });

    it("throws an error if temperature is at 10 degrees or below", function () {
      for (var i = 20; i > 10; i--) {
        thermostat.decrease();
      }
      expect(function () { thermostat.decrease() }).toThrowError("Temperature too low");
    });
  });

  describe("#togglePowerSave", function () {
    describe("#turning off", function () {

      beforeEach(function() {
        thermostat.togglePowerSave();
      });

      it("sets powerSave to false", function () {
        expect(thermostat.powerSave).toBeFalsy();
      });
      it("sets max temperature to 32", function () {
        expect(thermostat.max).toEqual(32);
      });
    });

    describe("#turning on", function () {

      beforeEach(function() {
        thermostat.togglePowerSave();
        thermostat.togglePowerSave();
      });

      it("sets powerSave to true", function () {
        thermostat.togglePowerSave();
        thermostat.togglePowerSave();
        expect(thermostat.powerSave).toBeTruthy();
      });
      it("sets max temperature to 25", function () {
        expect(thermostat.max).toEqual(25);
      });
    });
  });
});
