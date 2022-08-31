import { ScrollView, StyleSheet, Text, Dimensions, View } from 'react-native';
import React from 'react';
import { observer } from 'mobx-react';
import { weatherStore } from '../stores/WeatherStoreImpl';
import weatherCodeToText from '../util/weatherCodeToText';

// type WeatherDetailsProps = {
//     weatherStore: WeatherStoreImpl;
// };

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const WeatherDetails: React.FC = observer(() => {
    let hourlyWeatherList: JSX.Element[];
    if (!weatherStore.hourlyWeather) {
        hourlyWeatherList = [<Text key={0}>Select a date for more details...</Text>];
    } else {
        hourlyWeatherList = weatherStore.hourlyWeather.temperature_2m.map((temp, index) => {
            if (temp == null) {
                return;
            }
            return (
                <View key={index} style={styles.rowContainer}>
                    <Text style={styles.text}>
                        {new Date(weatherStore.hourlyWeather.time[index]).toLocaleTimeString()}
                    </Text>
                    <Text style={styles.text}>{temp.toFixed(1)}°C</Text>
                    <Text style={styles.text}>
                        {weatherCodeToText(weatherStore.hourlyWeather.weathercode[index])}
                    </Text>
                </View>
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
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '80%',
    },
    text: {
        marginLeft: width / 15,
    },
});
