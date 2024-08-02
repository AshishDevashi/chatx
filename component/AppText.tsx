import { StyleSheet, Text, TextStyle, View } from "react-native";
import React, { useMemo } from "react";
import { useTheme } from "@react-navigation/native";

interface AppTextType {
  children: React.ReactNode;
  color?: 'primary' | 'action' | 'white'| 'black';
  weight?: keyof typeof FONT_FAMILIES;
  size?: keyof typeof FONT_SIZES;
  style?: TextStyle;
}
const FONT_SIZES = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 20,
  xxl: 26,
};

const FONT_FAMILIES = {
  light: "SpaceGrotesk-Light",
  regular: "SpaceGrotesk-Regular",
  medium: "SpaceGrotesk-Medium",
  semibold: "SpaceGrotesk-SemiBold",
  bold: "SpaceGrotesk-Bold",
};

export default function AppText({
  children,
  color,
  weight = "regular",
  size = "md",
  style,
}: AppTextType) {
  const { colors } = useTheme();
  const { primary, text, notification } = colors;

  const appSize = FONT_SIZES[size];
  const fontFamily = FONT_FAMILIES[weight];
  const fontColor = useMemo(() => {
    switch (color) {
      case "primary":
        return primary;
      case "action":
        return notification;
      case "white":
        return 'white';
      case "black":
        return 'black';
      default:
        return text;
    }
  }, [color, primary, text, notification]);

  const combinedStyle = useMemo(() => {
    return [{ fontSize: appSize, fontFamily, color: fontColor }, style];
  }, [appSize, fontFamily, fontColor, style]);
  return <Text style={combinedStyle}>{children}</Text>;
}
