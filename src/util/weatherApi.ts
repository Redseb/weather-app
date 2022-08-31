import DailyWeather from '../types/DailyWeather';

const API_URL = 'https://api.open-meteo.com/v1/forecast?';

const getDailyWeather = async (latitude: number, longitude: number) => {
    const response = await fetch(
        `${API_URL}latitude=${latitude}&longitude=${longitude}&timezone=auto&daily=weathercode,temperature_2m_max`
    );
    const data = await response.json();
    return data.daily;
};

const getHourlyWeather = async (latitude: number, longitude: number) => {
    const response = await fetch(
        `${API_URL}latitude=${latitude}&longitude=${longitude}&&hourly=weathercode,temperature_2m`
    );
    const data = await response.json();
    return data.hourly;
};

export { getDailyWeather, getHourlyWeather };
