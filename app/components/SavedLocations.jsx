import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, StyleSheet, Image } from 'react-native';
import amsImg from '../../assets/ams.jpg';
import jhImg from '../../assets/jh.jpg';
import scisImg from '../../assets/scis.jpg';
import jh27Img from '../../assets/jh27.jpg';
import unclibImg from '../../assets/unclib.jpg';

const mockData = [
    { id: 1, name: "AMS Building", type: "Building", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: amsImg },
    { id: 2, name: "JH Building", type: "Building", desc: "Main classrooms & labs with various facilities.", image: jhImg },
    { id: 3, name: "SCIS Office", type: "Offices", desc: "SCIS department dean and faculty office, JH24", image: scisImg },
    { id: 4, name: "JH27", type: "Rooms", desc: "Computer Laboratory located at JH Building", image: jh27Img },
    { id: 5, name: "UNC Library", type: "Building", desc: "UNC Library for Basic Education and Undergraduates", image: unclibImg },
];

export default function SavedLocations() {
    const [locations, setLocations] = useState(mockData);
    const [filter, setFilter] = useState('All');
    const [confirmId, setConfirmId] = useState(null);

    const filtered = filter === 'All' ? locations : locations.filter(l => l.type === filter);

    const removeLocation = id => {
        setLocations(locations.filter(loc => loc.id !== id));
        setConfirmId(null);
    };

    const categories = ['All', 'Building', 'Rooms', 'Offices', 'Food Stalls'];

    return (
        <View style={styles.container}>
            <View style={styles.categoryContainer}>
                {categories.map(cat => (
                    <TouchableOpacity
                        key={cat}
                        onPress={() => setFilter(cat)}
                        style={[
                            styles.filterButton,
                            filter === cat ? styles.filterActive : styles.filterInactive,
                        ]}
                    >
                        <Text style={filter === cat ? styles.filterTextActive : styles.filterTextInactive}>{cat}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <FlatList
                data={filtered}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.locationCard}>
                        <Image source={item.image} style={styles.cardImage} />
                        <View style={styles.cardContent}>
                            <Text style={styles.locationName}>{item.name}</Text>
                            <Text style={styles.locationDesc}>{item.desc}</Text>
                        </View>
                        <TouchableOpacity onPress={() => setConfirmId(item.id)} style={styles.bookmarkIconContainer}>
                            <View style={styles.bookmarkIcon} />
                        </TouchableOpacity>
                    </View>
                )}
            />

            <Modal visible={!!confirmId} transparent animationType="fade">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Are you sure you want to unsave this location?</Text>
                        <View style={styles.modalButtonsContainer}>
                            <TouchableOpacity
                                onPress={() => removeLocation(confirmId)}
                                style={[styles.modalButton, styles.modalButtonYes]}
                            >
                                <Text style={styles.modalButtonTextYes}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setConfirmId(null)}
                                style={[styles.modalButton, styles.modalButtonCancel]}
                            >
                                <Text style={styles.modalButtonTextCancel}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f0f0', // A light grey background to make the cards stand out
    },
    categoryContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    filterButton: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        marginRight: 8,
    },
    filterActive: {
        backgroundColor: '#dc2626',
    },
    filterInactive: {
        backgroundColor: '#f3f4f6',
    },
    filterTextActive: {
        color: 'white',
        fontWeight: '600',
    },
    filterTextInactive: {
        color: '#374151',
    },
    locationCard: {
        flexDirection: 'row',
        backgroundColor: '#e0e0e0',
        borderRadius: 16,
        marginBottom: 12,
        alignItems: 'center',
        overflow: 'hidden',
        paddingRight: 16,
        padding: 8,
    }
    ,
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
    locationName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
        color: '#333', // Darker text for name
    },
    locationDesc: {
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
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 24,
        borderRadius: 12,
        width: '80%',
    },
    modalText: {
        marginBottom: 16,
        textAlign: 'center',
    },
    modalButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    modalButton: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
        marginHorizontal: 5,
    },
    modalButtonYes: {
        backgroundColor: '#dc2626',
    },
    modalButtonTextYes: {
        color: 'white',
    },
    modalButtonCancel: {
        borderWidth: 1,
        borderColor: '#ccc',
    },
    modalButtonTextCancel: {
        color: '#333',
    },
    cardImage: {
        width: 120,
        height: 80,
        resizeMode: 'cover',
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    }
});