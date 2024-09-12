import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity
                    style={[styles.square, props.completed && styles.checkedSquare]}
                    onPress={props.onCheck}
                    accessibilityLabel="Mark task as complete"
                />
                <View style={styles.textContainer}>
                    <Text style={styles.itemTitle}>{props.title}</Text>
                    <Text style={styles.itemDescription}>{props.description}</Text>
                </View>
            </View>
            <View style={styles.iconWrapper}>
                {/* Edit button */}
                <TouchableOpacity onPress={props.onEdit} accessibilityLabel="Edit task">
                    <Text style={styles.edits}>Edit</Text>
                </TouchableOpacity>
                {/* Delete button */}
                <TouchableOpacity onPress={props.onDelete} accessibilityLabel="Delete task">
                    <Text style={styles.icon}>🗑️</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#6EACDA',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#03346E',
        borderRadius: 5,
        marginRight: 15,
    },
    checkedSquare: {
        backgroundColor: '#4CAF50', 
    },
    textContainer: {
        maxWidth: '80%',
    },
    itemTitle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    itemDescription: {
        fontSize: 14,
        color: '#555',
    },
    iconWrapper: {
        flexDirection: 'row',
    },
    icon: {
        fontSize: 18,
        marginLeft: 10,
    },
    edits: {
        fontSize: 18,
        marginLeft: 10,
        color: '#03346E',
    }
});

export default Task;
