import DailyWeather from '../types/DailyWeather';
import HourlyWeather from '../types/HourlyWeather';

const API_URL = 'https://api.open-meteo.com/v1/forecast?';

const getDailyWeather = async (latitude: number, longitude: number): Promise<DailyWeather> => {
    const response = await fetch(
        `${API_URL}latitude=${latitude}&longitude=${longitude}&timezone=auto&daily=weathercode,temperature_2m_max`
    );
    const data = await response.json();
    return {
        temperature_2m_max: data.daily.temperature_2m_max,
        weathercode: data.daily.weathercode,
        days: data.daily.time.map((t) => new Date(t)),
    };
};

const getHourlyWeather = async (
    latitude: number,
    longitude: number,
    day: Date
): Promise<HourlyWeather> => {
    //Get start and end date for the requested day
    const start_date = day.toISOString().split('T')[0];
    var end_date: Date | string = new Date(day);
    end_date.setDate(end_date.getDate() + 1);
    end_date = end_date.toISOString().split('T')[0];

    const response = await fetch(
        `${API_URL}latitude=${latitude}&longitude=${longitude}&start_date=${start_date}&end_date=${end_date}&hourly=weathercode,temperature_2m`
    );
    const data = await response.json();
    return {
        temperature_2m: data.hourly.temperature_2m,
        weathercode: data.hourly.weathercode,
        time: data.hourly.time.map((t) => new Date(t)),
    };
};

export { getDailyWeather, getHourlyWeather };
