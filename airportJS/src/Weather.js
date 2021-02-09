class Weather {
  constructor(){
    this.weatherReport = "sunny";
  }
  generateWeather(weather) {
    if (weather === 0) {
      if (Math.random() * 10 > 7) {
        this.weatherReport = "stormy";
      } else {
        this.weatherReport = "sunny";
      }
    } else {
      this.weatherReport = weather 
    }
  }
}
