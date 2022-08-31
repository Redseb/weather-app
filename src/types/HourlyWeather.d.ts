type HourlyWeather = {
    time: number[] | undefined;
    temperature_2m: number[] | undefined;
    weather_code: WeatherCode[] | undefined;
};

export default HourlyWeather;
