import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDoCard from './src/components/ToDoCard/ToDoCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ToDo App With MobX</Text>
      <ToDoCard title="test" description="description" isComplete={false} />
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
