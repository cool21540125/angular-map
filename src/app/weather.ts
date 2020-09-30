
export interface Weather {
  pid: string;
  data: WeatherData;
}

export interface WeatherData {
  time_duration: string[];
  temperature: number[];
  body_temperature: number[];
  humidity: number[];
  chance_of_rain: number[];
}
