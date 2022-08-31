type DailyWeather = {
    days: Date[] | undefined;
    temperature_2m_max: number[] | undefined;
    weathercode: WeatherCode[] | undefined;
};

export default DailyWeather;
