require 'sinatra/base'
require './lib/thermostat.rb'

class ThermostatApp < Sinatra::Base
enable :sessions

before do
  @thermostat = Thermostat.create
end

get '/' do
  "testing"
end

post '/temp' do
  Thermostat.update(params)
  p Thermostat.temp
  p Thermostat.power_save
end

get '/temp' do
  headers 'Access-Control-Allow-Origin' => '*'
  content_type :json
  Thermostat.send_json
  p Thermostat.send_json
end

run! if app_file == $0
end
