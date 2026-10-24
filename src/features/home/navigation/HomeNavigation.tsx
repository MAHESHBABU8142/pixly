import { View } from "react-native";
import NavBottom from "@/components/layout/NavBottom";
import AlbumsScreen from "../screens/AlbumsScreen";
import PhotosScreen from "../screens/PhotosScreen";
import { useState } from "react";

export default function HomeNavigation() {
  const [screenName, setScreenName] = useState<"photos" | "albums">("photos");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "black",
      }}
    >
      {screenName === "photos" && <PhotosScreen />}
      {screenName === "albums" && <AlbumsScreen />}
      <NavBottom setScreenName={setScreenName} />
    </View>
  );
}
