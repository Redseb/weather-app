import WeatherCode from '../types/WeatherCode';

const weatherCodeToText = (weatherCode: WeatherCode) => {
    const index = Object.values(WeatherCode).indexOf(weatherCode as unknown as WeatherCode);
    const key = Object.keys(WeatherCode)[index];
    if (key) {
        //replace _ with space
        let formattedKey = key.split('_').join(' ');
        formattedKey = formattedKey.toLowerCase(); // Convert to lowercase
        formattedKey = formattedKey.charAt(0).toUpperCase() + formattedKey.slice(1); // Capitalize first letter
        return formattedKey;
    }
    return key;
};

export default weatherCodeToText;
