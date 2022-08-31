type WeatherRequest = {
    latitude: number;
    longitude: number;
    hourly: boolean;
    current_weather: boolean | undefined;
};

export default WeatherRequest;
