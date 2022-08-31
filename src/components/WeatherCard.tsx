import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { weatherStore } from '../stores/WeatherStoreImpl';
import { observer } from 'mobx-react';
import { locationStore } from '../stores/LocationStoreImpl';

type WeatherCardProps = {
    day: Date;
    temperature: number;
};

const width = Dimensions.get('window').width;

const WeatherCard: React.FC<WeatherCardProps> = observer(({ day, temperature }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                weatherStore.requestNewWeather({
                    latitude: locationStore.latitude,
                    longitude: locationStore.longitude,
                    hourly: true,
                    day: day,
                });
            }}>
            <Text style={styles.dayText}>{day.toDateString()}</Text>
            <Text style={styles.temperatureText}>{temperature}C</Text>
        </TouchableOpacity>
    );
});

export default WeatherCard;

const styles = StyleSheet.create({
    container: {
        width: width - 50,
        height: width / 7.5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#D9D9D9',
    },
    dayText: {
        fontSize: width / 20,
        fontWeight: 'bold',
    },
    temperatureText: {
        fontSize: width / 25,
    },
});
