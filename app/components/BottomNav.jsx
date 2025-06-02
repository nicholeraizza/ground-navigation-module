import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function BottomNav({ active, setActive }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => setActive('explore')}>
                <Text style={[styles.icon, active === 'explore' ? styles.active : styles.inactive]}>
                    🔍
                </Text>
                <Text style={[styles.label, active === 'explore' ? styles.active : styles.inactive]}>
                    Explore
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => setActive('saved')}>
                <Text style={[styles.icon, active === 'saved' ? styles.active : styles.inactive]}>
                    🔖
                </Text>
                <Text style={[styles.label, active === 'saved' ? styles.active : styles.inactive]}>
                    Saved
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 12,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60, // explicitly define height
    },
    button: {
        alignItems: 'center',
    },
    icon: {
        fontSize: 20,
    },
    label: {
        fontSize: 12,
    },
    active: {
        color: '#dc2626', // red-600
    },
    inactive: {
        color: '#4b5563', // gray-600
    },
});
