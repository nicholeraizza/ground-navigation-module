import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Topbar() {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/logo.png")} style={styles.logo} />
            <Text style={styles.title}>Saved Locations</Text>
            <Image source={require("../../assets/profile.png")} style={styles.profile} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    logo: {
        height: 32,
        width: 32,
        resizeMode: "contain",
    },
    profile: {
        height: 32,
        width: 32,
        borderRadius: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
});
