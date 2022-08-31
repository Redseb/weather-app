type HourlyWeather = {
    time: Date[] | undefined;
    temperature_2m: number[] | undefined;
    weather_code: WeatherCode[] | undefined;
};

export default HourlyWeather;
