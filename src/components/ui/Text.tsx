import { ReactNode } from "react";
import { Text as RNText, TextProps } from "react-native";

export default function Text({ style, children, ...props }: TextProps) {
  return (
    <RNText
      style={[
        {
          color: "white",
        },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
}
