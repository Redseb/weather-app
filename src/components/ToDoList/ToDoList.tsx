import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { ToDoStoreImpl } from '../../stores/ToDoStore';
import ToDoCard from '../ToDoCard/ToDoCard';

interface ToDoListProps {
    toDoStore: ToDoStoreImpl;
}

const ToDoList: React.FC<ToDoListProps> = observer(({ toDoStore }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputField}
                value={title}
                onChangeText={(newTitle) => setTitle(newTitle)}
                placeholder="Title"
            />
            <TextInput
                style={styles.inputField}
                value={description}
                onChangeText={(newDescription) => setDescription(newDescription)}
                placeholder="Description"
            />
            <Button title="Add" onPress={() => toDoStore.addTodo(title, description)} />
            <ScrollView>
                {toDoStore.todos.map((toDo) => (
                    <ToDoCard
                        key={toDo.id}
                        id={toDo.id}
                        title={toDo.title}
                        description={toDo.description}
                        isComplete={toDo.completed}
                    />
                ))}
            </ScrollView>
        </View>
    );
});

export default ToDoList;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '75%',
    },
    inputField: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    },
});
