import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AlbumsScreen from "../albums/screens/AlbumsScreen";
import PhotosScreen from "../photos/screens/PhotosScreen";
import Icon from "@/components/ui/Icon";
import { Pressable } from "react-native";
const Tab = createBottomTabNavigator();

export default function TabsNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#448AFF",
          tabBarInactiveTintColor: "#6B6A6A",
          tabBarStyle: {
            backgroundColor: "black",
            borderTopColor: "black",
          },
          tabBarButton: (props) => (
            <Pressable
              {...props}
              android_ripple={undefined}
              style={props.style}
            />
          ),
        }}
      >
        <Tab.Screen
          name="Photos"
          component={PhotosScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="image" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Albums"
          component={AlbumsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="folder" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
