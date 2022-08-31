import { StatusBar } from 'expo-status-bar';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import WeatherCard from '../components/WeatherCard';
import WeatherDetails from '../components/WeatherDetails';
import { weatherStore, WeatherStoreImpl } from '../stores/WeatherStoreImpl';

type WeatherScreenProps = {
    weatherStore: WeatherStoreImpl;
};

const width = Dimensions.get('window').width;

const WeatherScreen: React.FC<WeatherScreenProps> = observer(({ weatherStore }) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        weatherStore
            .requestNewWeather({ latitude: 33.86, longitude: 151.2, hourly: false })
            .then(() => {
                setIsLoading(false);
            });
    }, []);

    let weatherCards: JSX.Element[];
    if (isLoading) {
        weatherCards = [<Text key={0}>Fetching weather...</Text>];
    } else {
        weatherCards = weatherStore.dailyWeather.time.map((day, index) => {
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
                <Text style={styles.subtitleText}>Showing weather for: </Text>
            </View>
            {weatherCards}

            <WeatherDetails weatherStore={weatherStore} />
            <StatusBar style="auto" />
        </View>
    );
});

export default WeatherScreen;

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
