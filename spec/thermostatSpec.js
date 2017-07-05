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
});
