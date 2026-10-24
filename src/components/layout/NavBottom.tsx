import { View, Pressable } from "react-native";
import Text from "../ui/Text";
import Icon, { IconProps } from "../ui/Icon";

export default function NavBottom({
  setScreenName,
}: {
  setScreenName: (screenName: "photos" | "albums") => void;
}) {
  return (
    <View
      style={{
        paddingVertical: 6,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      }}
    >
      <NavItem
        label="Photos"
        icon={{ name: "image" }}
        onPress={() => setScreenName("photos")}
      />
      <NavItem
        label="Albums"
        icon={{ name: "albums" }}
        onPress={() => setScreenName("albums")}
      />
    </View>
  );
}

function NavItem({
  label,
  icon,
  onPress,
}: {
  label: string;
  icon: IconProps;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        padding: 4,
        flex: 1,
        alignItems: "center",
        gap: 2,
      }}
    >
      <Icon color={"#D1CECE"} {...icon} />
      <Text style={{ color: "#D1CECE", fontSize: 12 }}>{label}</Text>
    </Pressable>
  );
}
