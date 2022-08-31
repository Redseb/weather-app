type WeatherRequest = {
    latitude: number;
    longitude: number;
    hourly: string[] | undefined;
    daily: string[] | undefined;
    current_weather: boolean | undefined;
};
