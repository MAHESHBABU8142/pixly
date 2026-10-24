import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AlbumsScreen from "../albums/screens/AlbumsScreen";
import PhotosScreen from "../photos/screens/PhotosScreen";
const Tab = createBottomTabNavigator();

export default function TabsNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#448AFF",
          tabBarInactiveTintColor: "#888888",
          tabBarStyle: {
            backgroundColor: "#121212",
            borderTopColor: "#252525",
          },
        }}
      >
        <Tab.Screen name="Photos" component={PhotosScreen} />
        <Tab.Screen name="Albums" component={AlbumsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
