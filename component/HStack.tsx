import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";

interface HStackType extends ViewStyle {
  children: React.ReactNode;
  style?: ViewStyle;
}
export default function HStack({ children, style }: HStackType) {
  return <View style={[styles.vstack, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  vstack: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
});
