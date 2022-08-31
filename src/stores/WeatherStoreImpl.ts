import { action, makeAutoObservable, observable } from 'mobx';
import WeatherRequest from '../types/WeatherRequest';
import { getDailyWeather, getHourlyWeather } from '../util/weatherApi';

class WeatherStoreImpl {
    currentWeather: Weather | undefined;

    constructor() {
        makeAutoObservable(this, {
            currentWeather: observable,
            requestNewWeather: action,
        });
    }

    async requestNewWeather(request: WeatherRequest) {
        if (request.hourly) {
            this.currentWeather = await getHourlyWeather(request.latitude, request.longitude);
        } else {
            this.currentWeather = await getDailyWeather(request.latitude, request.longitude);
        }
    }
}

// Export singleton instance of WeatherStoreImpl
const weatherStore = new WeatherStoreImpl();
export default weatherStore;
