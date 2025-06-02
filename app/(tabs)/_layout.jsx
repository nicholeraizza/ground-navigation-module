// app/(tabs)/_layout.jsx
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#dc2626',
        tabBarInactiveTintColor: '#4b5563',
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'index') iconName = 'search';
          else if (route.name === 'saved') iconName = 'bookmark';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Explore' }} />
      <Tabs.Screen name="saved" options={{ title: 'Saved' }} />
    </Tabs>
  );
}