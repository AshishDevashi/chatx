import React, { useMemo, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TextStyle,
  ViewStyle,
  TextInputProps,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import AppText from "./AppText";

interface AppInputProps extends TextInputProps {
  value: string;
  onChange: (rext: any) => void;
  isPassword?: boolean;
  isNumber?: boolean;
  error?: string | false;
  placeholder?: string;
  label?: string;
  helperText?: string;
  multiline?: boolean;
  style?: ViewStyle;
}

const AppInput: React.FC<AppInputProps> = ({
  value,
  onChange,
  isPassword = false,
  isNumber = false,
  error,
  placeholder,
  label,
  helperText,
  multiline,
  style,
  ...props
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { colors } = useTheme();

  const handleFocus = () => setIsActive(true);
  const handleBlur = () => setIsActive(false);

  const inputStyle = useMemo<TextStyle>(
    () => ({
      ...styles.input,
      borderColor: isActive
        ? colors.border
        : error
        ? colors.notification
        : undefined,
      borderWidth: isActive || error ? 1 : 0,
      ...style,
    }),
    [error, isActive]
  );
  return (
    <View style={styles.container}>
      {label && (
        <AppText
          size="md"
          weight="regular"
          style={{ textTransform: "capitalize" }}
        >
          {label}
        </AppText>
      )}
      <TextInput
        style={inputStyle}
        placeholder={placeholder}
        placeholderTextColor="#d3d3d3"
        value={value}
        onChangeText={onChange}
        keyboardType={isNumber ? "number-pad" : "default"}
        secureTextEntry={isPassword}
        multiline={multiline}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      {error ? (
        <AppText size="md" color="action">
          {error}
        </AppText>
      ) : (
        false
      )}
      {helperText ? <AppText size="md">{helperText}</AppText> : false}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  input: {
    height: 50,
    paddingHorizontal: 14,
    backgroundColor: "white",
    borderRadius: 4,
    color: "#728197",
    fontSize: 14,
    fontFamily: "SpaceGrotesk-Regular",
  },
});

export default AppInput;
