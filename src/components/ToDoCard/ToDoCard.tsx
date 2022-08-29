import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ToDoStore } from '../../stores/ToDoStore';

interface props {
    id: number;
    title: string;
    description: string;
    isComplete: boolean;
}

const ToDoCard: React.FC<props> = ({ id, title, description, isComplete }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                ToDoStore.toggleToDo(id);
            }}>
            <View style={[styles.container, isComplete ? styles.conatinerIsComplete : null]}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ToDoCard;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: 200,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },
    description: {
        fontSize: 16,
        fontFamily: 'monospace',
        color: 'gray',
    },
    conatinerIsComplete: {
        backgroundColor: 'green',
    },
});
