import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type WeatherCardProps = {
    day: string;
    temperature: number;
};

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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        elevation: 5,
        padding: 10,
    },
    dayText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    temperatureText: {
        fontSize: 15,
    },
});
