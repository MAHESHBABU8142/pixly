import { StyleSheet, View } from "react-native";
import Text from "../ui/Text";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pixly</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 36,
    paddingBottom: 10,
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
  },
});
