export interface Location {
  name: string;
}

export interface Current {
  temp_c: number;
  feelslike_c: number;
  condition: Condition;
}

export interface Condition {
  icon: string;
}

export interface WeatherData {
  location: Location;
  current: Current;
}
