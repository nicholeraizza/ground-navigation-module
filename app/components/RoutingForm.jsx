import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity, } from "react-native";

export default function RoutingForm({ onStart }) {
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Starting Location"
                placeholderTextColor="#999"
                value={start}
                onChangeText={setStart}
            />
            <TextInput
                style={styles.input}
                placeholder="Ending Location"
                placeholderTextColor="#999"
                value={end}
                onChangeText={setEnd}
            />
            <TouchableOpacity style={styles.startButton} onPress={onStart}>
                <Text style={styles.startButtonText}>Start</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 5, // A little padding at the top of the form
    },
    input: {
        height: 45, // Slightly taller inputs
        borderColor: "#e0e0e0", // Lighter border
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 15, // More horizontal padding
        borderRadius: 8, // More rounded corners
        backgroundColor: '#fff', // White background for inputs
        fontSize: 16,
        color: '#333',
        shadowColor: '#000', // Subtle shadow for inputs
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 2,
    },
    startButton: {
        backgroundColor: '#dc2626', // Red color
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10, // Space after inputs
        width: 100, // Fixed width for the start button as in the image
        alignSelf: 'flex-end', // Align to the right
        marginBottom: 10, // Space before the map placeholder
    },
    startButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});