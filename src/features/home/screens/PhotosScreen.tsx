import { StyleSheet, View, useWindowDimensions } from "react-native";
import { useEffect, useState } from "react";
import { Asset, AssetField, MediaType, Query } from "expo-media-library";
import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";

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
    <FlashList
      data={images}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{
        gap: 2,
      }}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item.id }}
          style={{ width: width / 3 - 3, height: width / 3 - 3 }}
        />
      )}
      inverted
    />
  );
}
