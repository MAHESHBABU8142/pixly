import { StyleSheet, View } from "react-native";
import Text from "@/components/ui/Text";
import Header from "@/components/layout/Header";

export default function HomeScreen() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text>Welcome to Home</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
