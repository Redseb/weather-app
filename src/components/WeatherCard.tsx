import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

type WeatherCardProps = {
    day: string;
    temperature: number;
};

const width = Dimensions.get('window').width;

const WeatherCard: React.FC<WeatherCardProps> = ({ day, temperature }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.dayText}>{day}</Text>
            <Text style={styles.temperatureText}>{temperature}C</Text>
        </View>
    );
};

export default WeatherCard;

const styles = StyleSheet.create({
    container: {
        width: width / 3,
        height: width / 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
    },
    dayText: {
        fontSize: width / 20,
        fontWeight: 'bold',
    },
    temperatureText: {
        fontSize: width / 25,
    },
});
