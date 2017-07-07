require 'sinatra/base'
require './lib/thermostat.rb'

class Thermostat < Sinatra::Base
enable :sessions

get '/' do
  "testing"
end


run! if app_file == $0
end
