type WeatherRequest = {
    latitude: number;
    longitude: number;
    hourly?: boolean = false;
    day?: Date;
};

export default WeatherRequest;
