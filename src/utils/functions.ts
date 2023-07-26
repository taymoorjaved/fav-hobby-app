import { WeatherData } from "../components/weather/types";

const key: string = process.env.REACT_APP_API_KEY as string;
const server: string = process.env.REACT_APP_API_URL as string;

if (key === undefined) {
  throw new Error(
    "No WeatherAPI Key defined - ensure you set a variable called REACT_APP_API_KEY"
  );
}

export async function readWeather(location: string): Promise<WeatherData> {
  const response = await fetch(
    `${server}/current.json?key=${key}&q=${location}`
  );
  if (response.status !== 200) throw new Error("Failed to fetch weather data");
  return await response.json();
}
