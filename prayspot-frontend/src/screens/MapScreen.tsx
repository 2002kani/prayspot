import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomMap from "../components/map/CustomMap";
import { useLocation } from "../hooks/useLocation";

const MapScreen: React.FC = () => {
  const { location, error, loading } = useLocation();

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centerContent}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.loadingText}>Standort wird geladen...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centerContent}>
          <Text style={styles.errorText}>{error}</Text>
          <Text style={styles.hintText}>
            Bitte erlaube den Standortzugriff in den Einstellungen
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <CustomMap
        userLocation={
          location
            ? {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }
            : null
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: "#666",
  },
  errorText: {
    fontSize: 16,
    color: "#FF3B30",
    textAlign: "center",
    marginBottom: 8,
  },
  hintText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
});

export default MapScreen;
