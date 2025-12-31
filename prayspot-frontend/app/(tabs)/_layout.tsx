import { Colors } from "@/src/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Text, useColorScheme, View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const colors = colorScheme === "dark" ? Colors.dark : Colors.light;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          height: 80,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        headerStyle: {
          backgroundColor: colors.surface,
          borderBottomColor: colors.border,
          borderBottomWidth: 1,
        },
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "700",
          color: colors.text,
          marginTop: -10,
        },
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Karte",
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: -10,
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.light.primary,
                  borderRadius: 8,
                  padding: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                <Ionicons name="location-outline" size={20} color="white" />
              </View>
              <Text
                style={{ fontSize: 20, fontWeight: "700", color: colors.text }}
              >
                Prayspot
              </Text>
            </View>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menü",
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: -10,
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.light.primary,
                  borderRadius: 8,
                  padding: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                <Ionicons name="location-outline" size={20} color="white" />
              </View>
              <Text
                style={{ fontSize: 20, fontWeight: "700", color: colors.text }}
              >
                Prayspot
              </Text>
            </View>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
