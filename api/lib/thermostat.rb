require 'json'

class Thermostat
  attr_reader :temp, :power_save

  def initialize
    @temp       = 25
    @power_save = false
  end

  def self.update(params)
    @thermostat.update(params)
  end

  def self.create
    @thermostat = Thermostat.new
  end

  def self.instance
    @thermostat
  end

  def self.temp
    @thermostat.temp
  end

  def self.power_save
    @thermostat.power_save
  end

  def self.send_json
    h = {
      temp: self.temp,
      power_save: self.power_save
    }

    JSON.generate(h)
  end

  def update(params)
    @temp   = params[:current_temp]
    @power_save = params[:power_save]
  end

end
