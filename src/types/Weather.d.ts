type Weather = {
    latitude: number;
    longitude: number;
    elevation: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    hourly: HourlyWeather | undefined;
    hourly_units: HourlyUnits | undefined;
    daily: DailyWeather | undefined;
};
