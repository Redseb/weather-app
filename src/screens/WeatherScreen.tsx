import { StatusBar } from 'expo-status-bar';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import WeatherCard from '../components/WeatherCard';
import WeatherDetails from '../components/WeatherDetails';
import { LocationStoreImpl } from '../stores/LocationStoreImpl';
import { WeatherStoreImpl } from '../stores/WeatherStoreImpl';
import * as Location from 'expo-location';

type WeatherScreenProps = {
    weatherStore: WeatherStoreImpl;
    locationStore: LocationStoreImpl;
};

const WeatherScreen: React.FC<WeatherScreenProps> = observer(({ weatherStore, locationStore }) => {
    //Request permission to access location, then get the current location, then get the weather data
    useEffect(() => {
        Location.requestForegroundPermissionsAsync().then((res) => {
            if (res.status === 'granted') {
                Location.getCurrentPositionAsync({}).then((res) => {
                    locationStore.setLatitude(res.coords.latitude);
                    locationStore.setLongitude(res.coords.longitude);
                    weatherStore.requestDailyWeather({
                        latitude: locationStore.latitude,
                        longitude: locationStore.longitude,
                    });
                });
            } else {
                alert('This app requires location permissions to work.');
            }
        });
    }, []);

    let weatherCards: JSX.Element[];
    if (!weatherStore.dailyWeather) {
        weatherCards = [<Text key={0}>Fetching weather...</Text>];
    } else {
        weatherCards = weatherStore.dailyWeather.days.map((day, index) => {
            return (
                <WeatherCard
                    key={index}
                    day={day}
                    temperature={weatherStore.dailyWeather.temperature_2m_max[index]}
                />
            );
        });
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titleText}>The Weather App</Text>
                <Text style={styles.subtitleText}>
                    Showing weather for: {locationStore.latitude.toFixed(2)}N{' '}
                    {locationStore.longitude.toFixed(2)}E
                </Text>
            </View>
            {weatherCards}
            <WeatherDetails />
            <StatusBar style="auto" />
        </View>
    );
});

export default WeatherScreen;

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        paddingTop: width / 7.5,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleText: {
        fontSize: width / 15,
        textAlign: 'center',
    },
    subtitleText: {
        fontSize: width / 30,
        textAlign: 'center',
    },
});
