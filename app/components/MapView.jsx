import React from "react";
import MapView, { Marker } from "react-native-maps";
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";

export default function CampusMap() {
    const router = useRouter(); // 

    const region = {
        latitude: 13.6235,
        longitude: 123.1945,
        latitudeDelta: 0.0015,
        longitudeDelta: 0.0015,
    };

    return (
        <View style={styles.container}>
            <MapView
                style={StyleSheet.absoluteFillObject}
                initialRegion={region}
                showsUserLocation
            >
                <Marker
                    coordinate={{ latitude: 13.6235, longitude: 123.1945 }}
                    title="University of Nueva Caceres"
                />
            </MapView>

            <TextInput placeholder="Search here" style={styles.search} />

            <TouchableOpacity
                style={styles.routeBtn}
                onPress={() => router.push("/modal/routing")} // ✅ only this button
            >
                <Text style={styles.routeBtnText}>Route</Text>
            </TouchableOpacity>
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
    routeBtnText: {
        color: "white",
        fontWeight: "bold",
    },
});
