describe('Weather', function() {
  beforeEach(function() {
    weather = new Weather();
  })
  describe('weatherReport', function() {
    it('can generate a forecase of sunny', function() {
      expect(weather.weatherReport).toBe("sunny");
    })

    it('can generate a forecase of stormy', function() {
      weather.generateWeather("stormy");
      expect(weather.weatherReport).toBe("stormy");
    })
  })
})
