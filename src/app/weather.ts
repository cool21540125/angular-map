export interface Weather {
  pid: string;
  data: Data;
}

export interface Data {
  time_duration: string;
  temperature: number;
  body_temperature: number;
  humidity: number;
  chance_of_rain: number;
}
