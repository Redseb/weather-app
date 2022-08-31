import { action, makeAutoObservable, makeObservable, observable } from 'mobx';
import DailyWeather from '../types/DailyWeather';
import HourlyWeather from '../types/HourlyWeather';
import WeatherRequest from '../types/WeatherRequest';
import { getDailyWeather, getHourlyWeather } from '../util/weatherApi';

class WeatherStoreImpl {
    dailyWeather: DailyWeather | undefined = undefined;
    hourlyWeather: HourlyWeather | undefined = undefined;

    constructor() {
        makeObservable(this, {
            dailyWeather: observable,
            hourlyWeather: observable,
            requestDailyWeather: action,
            requestHourlyWeather: action,
            setDailyWeather: action,
            setHourlyWeather: action,
        });
    }

    async requestDailyWeather(request: WeatherRequest) {
        if (request.hourly) {
            throw 'Cannot request daily weather when hourly weather is requested';
        }
        this.setDailyWeather(await getDailyWeather(request.latitude, request.longitude));
    }

    async requestHourlyWeather(request: WeatherRequest) {
        if (!request.hourly) {
            throw 'Cannot request hourly weather when daily weather is requested';
        }
        if (!request.day) {
            throw 'Cannot request hourly weather without a day specified';
        }
        this.setHourlyWeather(
            await getHourlyWeather(request.latitude, request.longitude, request.day)
        );
    }

    setDailyWeather(dailyWeather: DailyWeather | undefined) {
        this.dailyWeather = dailyWeather;
    }

    setHourlyWeather(hourlyWeather: HourlyWeather | undefined) {
        this.hourlyWeather = hourlyWeather;
    }
}

// Export singleton instance of WeatherStoreImpl
const weatherStore = new WeatherStoreImpl();
export { weatherStore, WeatherStoreImpl };
