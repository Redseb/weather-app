import { StatusBar } from 'expo-status-bar';
import { observer } from 'mobx-react';
import WeatherScreen from './src/screens/WeatherScreen';
import { weatherStore } from './src/stores/WeatherStoreImpl';

const App: React.FC = () => {
    return <WeatherScreen weatherStore={weatherStore} />;
};

export default App;
