import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, } from 'react-native';

const mockSuggestions = [
    { id: 1, name: "UNC Library", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Library' },
    { id: 2, name: "JH Building", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Building' },
    // Add more mock data as needed
];

export default function SuggestionList() {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.suggestionCard}>
            <View style={styles.cardImagePlaceholder} />
            <View style={styles.cardContent}>
                <Text style={styles.cardName}>{item.name}</Text>
                <Text style={styles.cardDesc}>{item.desc}</Text>
            </View>
            <View style={styles.bookmarkIconContainer}>
                <View style={styles.bookmarkIcon} />
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={mockSuggestions}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                scrollEnabled={false} // The parent BottomSheetScrollView will handle scrolling
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // No padding needed here as the parent BottomSheetScrollView handles it
    },
    suggestionCard: {
        flexDirection: 'row',
        backgroundColor: '#e0e0e0', // Light grey for the card background
        borderRadius: 8, // Rounded corners for the card
        marginBottom: 12,
        alignItems: 'center',
        overflow: 'hidden', // Ensures rounded corners clip children
        paddingRight: 16, // Padding on the right for the bookmark
        elevation: 2, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
    },
    cardImagePlaceholder: {
        width: 100, // Adjust as needed for the image area width
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 8, // Rounded corners for the inner white area
        marginRight: 10, // Space between image placeholder and text
    },
    cardContent: {
        flex: 1, // Allows content to take up available space
        paddingVertical: 12, // Vertical padding for text content
    },
    cardName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
        color: '#333', // Darker text for name
    },
    cardDesc: {
        fontSize: 12,
        color: '#555', // Slightly lighter text for description
    },
    bookmarkIconContainer: {
        position: 'absolute', // Position the bookmark absolutely
        top: 0,
        right: 0,
        width: 25, // Width of the bookmark area
        height: 35, // Height of the bookmark area
        overflow: 'hidden',
    },
    bookmarkIcon: {
        width: 25,
        height: 25,
        backgroundColor: 'red',
        transform: [{ rotate: '45deg' }], // Rotate to form the bookmark shape
        position: 'absolute',
        top: -10, // Adjust to position the visible part of the bookmark
        right: -10,
    },
});