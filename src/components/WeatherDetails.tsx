import { ScrollView, StyleSheet, Text, Dimensions, View } from 'react-native';
import React from 'react';
import HourlyWeather from '../types/HourlyWeather';
import { observer } from 'mobx-react';
import { WeatherStoreImpl } from '../stores/WeatherStoreImpl';

type WeatherDetailsProps = {
    weatherStore: WeatherStoreImpl;
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const WeatherDetails: React.FC<WeatherDetailsProps> = observer(({ weatherStore }) => {
    let hourlyWeatherList: JSX.Element[];
    console.log(weatherStore.hourlyWeather);
    if (!weatherStore.hourlyWeather) {
        hourlyWeatherList = [<Text key={0}>Select a date for more details...</Text>];
    } else {
        hourlyWeatherList = weatherStore.hourlyWeather.time.map((time, index) => {
            return (
                <Text key={index}>
                    {time} - {weatherStore.hourlyWeather.temperature_2m[index]}-
                    {weatherStore.hourlyWeather.weathercode[index]}
                </Text>
            );
        });
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {hourlyWeatherList}
            </ScrollView>
        </View>
    );
});

export default WeatherDetails;

const styles = StyleSheet.create({
    container: {
        height: height / 4,
        width: width,
        backgroundColor: '#D9D9D9',
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});
