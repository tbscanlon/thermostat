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

    it("throws an error if temperature is at or above the max", function () {
      spyOn(window, 'alert');
      for (var i = 20; i <= 25; i++) {
        thermostat.increase();
      }
      expect(window.alert).toHaveBeenCalledWith("Temperature too high");
    });
  });

  describe("#decrease", function () {
    it("decreases the thermostat's temperature by 1 degree", function () {
      thermostat.decrease();
      expect(thermostat.temp).toEqual(19);
    });

    it("throws an error if temperature is at 10 degrees or below", function () {
      spyOn(window, 'alert');
      for (var i = 20; i >= 10; i--) {
        thermostat.decrease();
      }
      expect(window.alert).toHaveBeenCalledWith("Temperature too low")
    });
  });

  describe("#togglePowerSave", function () {
    describe("turning off", function () {

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

    describe("turning on", function () {

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

  describe("#reset", function () {
    beforeEach(function () {
      for (var i = 20; i > 15; i--) {
        thermostat.decrease();
      }
    });

    it("changes the temperature to its default value", function () {
      thermostat.reset();
      expect(thermostat.temp).toEqual(20);
    });
  });

  describe("#usage", function () {
    describe("Low Usage", function () {
      beforeEach(function () {
        for (var i = 20; i > 17; i--) {
          thermostat.decrease();
        }
      });

      it("Reports low usage when temp is under 18 degrees", function () {
        expect(thermostat.usage()).toEqual("low-usage");
      });
    });

    describe("Medium Usage", function () {
      it("Reports medium usage when temp is between 18-25 degrees", function () {
        expect(thermostat.usage()).toEqual("medium-usage");
      });
    });

    describe("High Usage", function () {
      beforeEach(function () {
        thermostat.togglePowerSave();
        for (var i = 20; i < 26; i++) {
          thermostat.increase();
        }
      });

      it("Reports high usage when temp is over 25 degrees", function () {
        expect(thermostat.usage()).toEqual("high-usage");
      });
    });
  });
});
