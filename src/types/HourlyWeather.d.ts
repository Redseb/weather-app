type HourlyWeather = {
    time: Date[] | undefined;
    temperature_2m: number[] | undefined;
    weathercode: WeatherCode[] | undefined;
};

export default HourlyWeather;
