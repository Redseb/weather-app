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
            requestNewWeather: action,
            setDailyWeather: action,
            setHourlyWeather: action,
        });
    }

    async requestNewWeather(request: WeatherRequest) {
        if (request.hourly) {
            this.setHourlyWeather(
                await getHourlyWeather(request.latitude, request.longitude, request.day)
            );
        } else {
            this.setDailyWeather(await getDailyWeather(request.latitude, request.longitude));
        }
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
