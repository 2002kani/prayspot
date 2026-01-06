import { Prayspot } from "@/src/types/prayspot";
import { SpotType } from "@/src/types/SpotType";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";
import { Colors } from "../../constants/Colors";

interface CustomMapProps {
  userLocation?: {
    latitude: number;
    longitude: number;
  } | null;
  prayspots?: Prayspot[];
}

const CustomMap: React.FC<CustomMapProps> = ({ userLocation, prayspots }) => {
  const mapRef = useRef<MapView>(null);
  const colorScheme = useColorScheme();
  const colors = colorScheme === "dark" ? Colors.dark : Colors.light;

  const defaultRegion = {
    latitude: 52.52,
    longitude: 13.405,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const initialRegion = userLocation
    ? {
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }
    : defaultRegion;

  useEffect(() => {
    if (userLocation && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        1000
      );
    }
  }, [userLocation]);

  const centerOnUser = () => {
    if (userLocation && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        600
      );
    }
  };

  const getMarkerColor = (prayspot: Prayspot) => {
    if (prayspot.type === SpotType.MOSQUE) {
      return colors.markerMosque; // Grün für Moscheen
    }
    return colors.markerPrayerRoom; // Helleres Grün für Gebetsräume
  };

  const getMarkerIcon = (prayspot: Prayspot) => {
    return prayspot.type === SpotType.MOSQUE ? "mosque" : "person-praying";
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_DEFAULT}
        initialRegion={initialRegion}
        showsUserLocation={true}
        showsMyLocationButton={false}
        customMapStyle={colorScheme === "dark" ? darkMapStyle : undefined}
      >
        {/* User location Punkt */}
        {userLocation && (
          <Marker coordinate={userLocation} title="Dein Standort">
            <View
              style={[
                styles.markerContainer,
                { backgroundColor: colors.primary },
              ]}
            >
              <View style={styles.markerInner} />
            </View>
          </Marker>
        )}

        {/* Die einzelnen Prayspots*/}
        {prayspots?.map((spot) => (
          <Marker
            key={spot.id}
            title={spot.name}
            description={spot.description}
            coordinate={{ latitude: spot.latitude, longitude: spot.longitude }}
          >
            <View
              style={[
                styles.prayspotMarker,
                { backgroundColor: getMarkerColor(spot) },
              ]}
            >
              <FontAwesome6
                name={getMarkerIcon(spot)}
                size={13}
                color="white"
              />
              {spot.isVerified && (
                <View style={styles.verifiedBadge}>
                  <Ionicons
                    name="checkmark-circle"
                    size={14}
                    color={colors.primary}
                  />
                </View>
              )}
            </View>
          </Marker>
        ))}
      </MapView>

      {/* Location Button */}
      {userLocation && (
        <TouchableOpacity
          style={[
            styles.locationButton,
            {
              backgroundColor: colors.surface,
              shadowColor: colors.shadow,
            },
          ]}
          onPress={centerOnUser}
          activeOpacity={0.8}
        >
          <Ionicons name="locate" size={24} color={colors.primary} />
        </TouchableOpacity>
      )}
    </View>
  );
};

// Dark mode map style
const darkMapStyle = [
  {
    elementType: "geometry",
    stylers: [{ color: "#1A211E" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#A8B9B1" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#141A17" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#232B28" }],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  locationButton: {
    position: "absolute",
    bottom: 40,
    right: 20,
    borderRadius: 28,
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  markerContainer: {
    width: 22,
    height: 22,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "white",
  },
  markerInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "white",
  },
  prayspotMarker: {
    width: 35,
    height: 35,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  verifiedBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "white",
    borderRadius: 10,
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomMap;
