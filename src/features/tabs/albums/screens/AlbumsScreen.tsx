import { StyleSheet, View, useWindowDimensions } from "react-native";
import { useEffect, useState } from "react";

import { Asset, AssetField, MediaType, Query } from "expo-media-library";
import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import Text from "@/components/ui/Text";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>This is albums screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
