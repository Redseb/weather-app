import DailyWeather from '../types/DailyWeather';

const API_URL = 'https://api.open-meteo.com/v1/forecast?';

const getDailyWeather = async (latitude: number, longitude: number) => {
    const response = await fetch(
        `${API_URL}latitude=${latitude}&longitude=${longitude}&timezone=auto&daily=weathercode,temperature_2m_max`
    );
    const data = await response.json();
    return data.daily;
};

const getHourlyWeather = async (latitude: number, longitude: number, day: Date) => {
    const start_date = day.toISOString().split('T')[0];
    var end_date: Date | string = new Date(day);
    end_date.setDate(end_date.getDate() + 1);
    end_date = end_date.toISOString().split('T')[0];
    console.log(start_date, end_date);

    const response = await fetch(
        `${API_URL}latitude=${latitude}&longitude=${longitude}&start_date=${start_date}&end_date=${end_date}&hourly=weathercode,temperature_2m`
    );
    const data = await response.json();
    return data.hourly;
};

export { getDailyWeather, getHourlyWeather };
