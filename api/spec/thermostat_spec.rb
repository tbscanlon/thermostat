require "./lib/thermostat.rb"

describe Thermostat do
  let(:thermostat) { Thermostat.create }

  it { is_expected.to be_a Thermostat }

  describe 'Initialisation' do
    it 'has a temperature' do
      expect(thermostat.temp).to eq 20
    end

    it 'has a power saving indicator' do
      expect(thermostat.power_save).to be true
    end
  end

  describe '#self.update' do
    context "Updating thermostat status" do
      before do
        params = {
          current_temp: 25,
          power_save: false
        }

        thermostat.update(params)
      end

      it 'updates the temperature' do
        expect(thermostat.temp).to eq 25
      end

      it 'updates the power saving status' do
        expect(thermostat.power_save).to be false
      end
    end
  end

  describe '#self.send' do
    it 'returns JSON' do
      expect(Thermostat.send_json).to eq "{\"temp\":25,\"power_save\":false}"
    end
  end
end
