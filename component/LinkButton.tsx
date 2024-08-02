import React from "react";
import {
  StyleSheet,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import AppText from "./AppText";
import { Link } from "expo-router";

type ButtonSize = "sm" | "md" | "lg" | "full";
type ButtonVariant = "default" | "bordered" | "linked";

interface AppButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: "white";
  href: string;
}

const getSize = (size: ButtonSize | undefined): ViewStyle["width"] => {
  switch (size) {
    case "sm":
      return "30%";
    case "md":
      return "50%";
    case "lg":
      return "70%";
    case "full":
      return "100%";
    default:
      return "50%";
  }
};

const LinkButton: React.FC<AppButtonProps> = ({
  children,
  size,
  variant,
  color,
  href,
}) => {
  const { colors } = useTheme();

  const baseBtnStyle: TextStyle = {
    textAlign: "center",
    paddingVertical: 10,
    borderRadius: 5,
    width: getSize(size),
  };

  const variantStyles = StyleSheet.create({
    default: { ...baseBtnStyle, backgroundColor: colors.primary },
    bordered: { ...baseBtnStyle, borderColor: colors.primary, borderWidth: 1 },
    linked: { ...baseBtnStyle },
  });

  const variantStyle = variantStyles[variant || "default"];

  return (
    <Link href={href} style={variantStyle} push>
      <AppText color={color} size="lg">
        {children}
      </AppText>
    </Link>
  );
};

export default LinkButton;
