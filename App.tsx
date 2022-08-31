import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import WeatherCard from './src/components/WeatherCard';
import WeatherDetails from './src/components/WeatherDetails';

const width = Dimensions.get('window').width;

export default function App() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titleText}>The Weather App</Text>
                <Text style={styles.subtitleText}>Showing weather for: </Text>
            </View>
            <WeatherCard day="Monday" temperature={18} />
            <WeatherDetails hourlyWeather={undefined} />
            <StatusBar style="auto" />
        </View>
    );
}

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
