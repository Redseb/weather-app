import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDoCard from './src/components/ToDoCard/ToDoCard';
import ToDoList from './src/components/ToDoList/ToDoList';
import { ToDoStore } from './src/stores/ToDoStore';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ToDo App With MobX</Text>
      <ToDoList toDoStore={ToDoStore} />
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
