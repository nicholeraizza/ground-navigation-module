import React, { useState, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
} from "react-native";
import RoutingPanel from "../components/RoutingPanel";

export default function Explore() {
    const mapRef = useRef(null);

    const [showRouting, setShowRouting] = useState(false);

    // Center location
    const center = {
        latitude: 13.624775125216777,
        longitude: 123.1824850810476,
    };

    // Boundary box (about ~50m range)
    const BOUNDS = {
        minLat: center.latitude - 0.0003,
        maxLat: center.latitude + 0.0003,
        minLng: center.longitude - 0.0003,
        maxLng: center.longitude + 0.0003,
    };

    const initialRegion = {
        ...center,
        latitudeDelta: 0.002,
        longitudeDelta: 0.002,
    };

    const enforceBounds = (region) => {
        const { latitude, longitude } = region;
        if (
            latitude < BOUNDS.minLat ||
            latitude > BOUNDS.maxLat ||
            longitude < BOUNDS.minLng ||
            longitude > BOUNDS.maxLng
        ) {
            mapRef.current.animateToRegion(initialRegion, 300);
        }
    };

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                style={StyleSheet.absoluteFillObject}
                initialRegion={initialRegion}
                showsUserLocation={true}
                onRegionChangeComplete={enforceBounds}
                minZoomLevel={18}
                maxZoomLevel={20}
            >
                <Marker coordinate={center} title="Target Location" />
            </MapView>

            <TextInput placeholder="Search here" style={styles.search} />

            {showRouting && (
                <RoutingPanel onClose={() => setShowRouting(false)} />
            )}

            {!showRouting && (
                <TouchableOpacity
                    style={[styles.routeBtn, styles.modalBtn]}
                    onPress={() => setShowRouting(true)}
                >
                    <Text style={styles.routeBtnText}>Navigate</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        backgroundColor: "#fff",
    },
    search: {
        position: "absolute",
        top: 40,
        left: 20,
        right: 20,
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 25,
        elevation: 3,
        zIndex: 10,
    },
    routeBtn: {
        position: "absolute",
        bottom: 30,
        right: 20,
        backgroundColor: "#dc2626",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 25,
        elevation: 4,
        zIndex: 10,
    },
    modalBtn: {
        bottom: 90,
    },
    routeBtnText: {
        color: "white",
        fontWeight: "bold",
    },
    routingPanel: {
        position: "absolute",
        bottom: 120,
        left: 20,
        right: 20,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        zIndex: 10,
    },
});
