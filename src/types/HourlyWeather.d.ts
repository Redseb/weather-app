type HourlyWeather = {
    time: string[] | undefined;
    temperature_2m: number[] | undefined;
    weathercode: WeatherCode[] | undefined;
};

export default HourlyWeather;
