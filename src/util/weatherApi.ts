const API_URL = 'https://api.open-meteo.com/v1/forecast?';

const getDailyWeather = async (latitude: number, longitude: number) => {
    const response = await fetch(
        `${API_URL}/latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max`
    );
    const data: Weather = await response.json();
    return data;
};

const getHourlyWeather = async (latitude: number, longitude: number) => {
    const response = await fetch(
        `${API_URL}/latitude=${latitude}&longitude=${longitude}&&hourly=weathercode,temperature_2m`
    );
    const data: Weather = await response.json();
    return data;
};

export { getDailyWeather, getHourlyWeather };
