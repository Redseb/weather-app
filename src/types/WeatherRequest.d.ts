type WeatherRequest = {
    latitude: number;
    longitude: number;
    hourly: boolean;
    day?: Date;
};

export default WeatherRequest;
