import Ionicons from "@react-native-vector-icons/ionicons/static";

export type IconProps = React.ComponentProps<typeof Ionicons>;

export default function Icon({
  color = "white",
  size = 22,
  ...props
}: IconProps) {
  return <Ionicons size={size} color={color} {...props} />;
}
