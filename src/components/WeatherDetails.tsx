import { ScrollView, StyleSheet, Text, Dimensions, View } from 'react-native';
import React from 'react';
import HourlyWeather from '../types/HourlyWeather';

type WeatherDetailsProps = {
    hourlyWeather: HourlyWeather | undefined;
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ hourlyWeather }) => {
    let hourlyWeatherList: JSX.Element[];
    if (!hourlyWeather) {
        hourlyWeatherList = [<Text>Select a date for more details...</Text>];
    } else {
        hourlyWeatherList = hourlyWeather.time.map((time, index) => {
            return (
                <Text>
                    {time.getTime()} - {hourlyWeather.temperature_2m.at(index)}-
                    {hourlyWeather.weather_code.at(index)}
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
};

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
