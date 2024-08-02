import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import AppText from "./AppText";

type ButtonSize = "sm" | "md" | "lg" | "full";
type ButtonVariant = "default" | "bordered" | "linked";

interface AppButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: 'white'
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

const AppButton: React.FC<AppButtonProps> = ({
  children,
  size,
  variant,
  color,
  ...props
}) => {
  const { colors } = useTheme();

  const baseBtnStyle: ViewStyle = {
    alignItems: "center",
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
    <TouchableOpacity style={variantStyle} {...props}>
      <AppText color={color} size="lg">
        {children}
      </AppText>
    </TouchableOpacity>
  );
};

export default AppButton;
