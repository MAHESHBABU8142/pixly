import { StyleSheet, View, useWindowDimensions } from "react-native";
import { useEffect, useState } from "react";
import { Asset, AssetField, MediaType, Query } from "expo-media-library";
import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

export default function PhotosScreen() {
  return (
    <View style={styles.container}>
      <Gallery />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

function Gallery() {
  const { width } = useWindowDimensions();
  const [images, setImages] = useState<Asset[]>([]);

  const loadImages = async () => {
    try {
      const assets = await new Query()
        .eq(AssetField.MEDIA_TYPE, MediaType.IMAGE)
        .orderBy({
          key: AssetField.CREATION_TIME,
          ascending: false,
        })
        .exe();
      setImages(assets);
    } catch (error) {
      console.error("Failed to load images:", error);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        pointerEvents="none"
        colors={["rgba(0,0,0,0.75)", "rgba(0,0,0,0.35)", "rgba(0,0,0,0)"]}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: 70,
        }}
      />

      <FlashList
        data={images}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        drawDistance={500}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              padding: 1,
              width: width / 3,
              height: width / 3,
            }}
          >
            <Image
              source={{ uri: item.id }}
              style={{ width: "100%", aspectRatio: 1 }}
              contentFit="cover"
              recyclingKey={item.id}
              cachePolicy="memory-disk"
            />
          </View>
        )}
        inverted
      />
    </View>
  );
}
