import CustomMap from "@/src/components/map/CustomMap";
import { Colors } from "@/src/constants/Colors";
import { useLocation } from "@/src/hooks/useLocation";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { location, error, loading } = useLocation();
  const colorScheme = useColorScheme();
  const colors = colorScheme === "dark" ? Colors.dark : Colors.light;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      {loading ? (
        <View style={styles.centerContent}>
          <View
            style={[
              styles.loadingCard,
              {
                backgroundColor: colors.surface,
                shadowColor: colors.shadow,
              },
            ]}
          >
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={[styles.loadingText, { color: colors.text }]}>
              Standort wird geladen...
            </Text>
            <Text style={[styles.subText, { color: colors.textSecondary }]}>
              Dies kann einen Moment dauern
            </Text>
          </View>
        </View>
      ) : error ? (
        <View style={styles.centerContent}>
          <View
            style={[
              styles.errorCard,
              {
                backgroundColor: colors.surface,
                shadowColor: colors.shadow,
              },
            ]}
          >
            <View
              style={[
                styles.errorIcon,
                { backgroundColor: colors.primaryLight },
              ]}
            >
              <Text style={styles.errorIconText}>📍</Text>
            </View>
            <Text style={[styles.errorTitle, { color: colors.text }]}>
              Standortzugriff benötigt
            </Text>
            <Text style={[styles.errorText, { color: colors.textSecondary }]}>
              {error}
            </Text>
            <Text style={[styles.hintText, { color: colors.textMuted }]}>
              Gehe zu Einstellungen → Expo Go → Standort erlauben
            </Text>
          </View>
        </View>
      ) : (
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
      )}
    </SafeAreaView>
  );
}

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
  loadingCard: {
    padding: 32,
    borderRadius: 24,
    alignItems: "center",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 4,
    minWidth: 280,
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  subText: {
    marginTop: 8,
    fontSize: 14,
    textAlign: "center",
  },
  errorCard: {
    padding: 32,
    borderRadius: 24,
    alignItems: "center",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 4,
    maxWidth: 340,
  },
  errorIcon: {
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  errorIconText: {
    fontSize: 36,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
    textAlign: "center",
  },
  errorText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 12,
    lineHeight: 22,
  },
  hintText: {
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },
});
