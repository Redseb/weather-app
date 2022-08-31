import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WeatherCard from './src/components/WeatherCard';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>The Weather App</Text>
            <Text>Showing weather for: </Text>
            <WeatherCard day="Monday" temperature={18} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
