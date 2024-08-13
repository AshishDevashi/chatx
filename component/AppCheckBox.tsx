import { useTheme } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import AppText from "./AppText";

interface AppCheckBoxProps {
  value: boolean;
  onChange: (value: boolean) => void;
  label?: string;
  textTsx?: React.ReactNode; // optional for custom text
  error?: string | false;
  style?: ViewStyle;
}

export default function AppCheckBox({
  value,
  onChange,
  label,
  textTsx,
  error,
  style,
}: AppCheckBoxProps) {
  const { colors } = useTheme();

  return (
    <>
      <View style={[styles.container, style]}>
        <Checkbox
          style={styles.checkbox}
          value={value}
          onValueChange={onChange}
          color={value ? colors.primary : undefined}
        />
        {textTsx || <AppText size="sm">{label}</AppText>}
      </View>
      {error && (
        <AppText size="sm" color="action">
          {error}
        </AppText>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 5,
  },
  checkbox: {
    width: 17,
    height: 17,
    backgroundColor: "white",
    borderWidth: 0,
    borderRadius: 4,
    marginTop: 3,
  },
});
