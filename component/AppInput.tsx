import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TextStyle,
  ViewStyle,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import AppText from "./AppText";

interface AppInputProps {
  value: string;
  onChange: (text: string) => void;
  isPassword?: boolean;
  isNumber?: boolean;
  error?: string | false;
  placeholder?: string;
  label?: string;
  helperText?: string;
  style?: ViewStyle 
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
  style
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { colors } = useTheme();

  const handleFocus = () => setIsActive(true);
  const handleBlur = () => setIsActive(false);

  const inputStyle: TextStyle = {
    ...styles.input,
    borderColor: isActive
      ? colors.border
      : error
      ? colors.notification
      : undefined,
    borderWidth: isActive || error ? 1 : 0,
    ...style,
  };

  return (
    <View style={styles.container}>
      {label && (
        <AppText size="md" weight="regular" style={{textTransform:'capitalize'}}>
          {label}
        </AppText>
      )}
      <TextInput
        style={inputStyle}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        keyboardType={isNumber ? "number-pad" : "default"}
        secureTextEntry={isPassword}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {error ? (
        <AppText size="md" color="action">
          {error}
        </AppText>
      ) : (
        <AppText size="md">{helperText}</AppText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  input: {
    height: 50,
    paddingHorizontal: 14,
    backgroundColor: "white",
    borderRadius: 4,
    color: "#8593A8",
    fontSize:15
  },
});

export default AppInput;
