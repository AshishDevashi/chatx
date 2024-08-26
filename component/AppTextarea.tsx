import React, { useState, useEffect, useMemo } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  ViewStyle,
  TextStyle,
} from "react-native";
import AppText from "./AppText";
import HStack from "./HStack";
import { useTheme } from "@react-navigation/native";

interface Props {
  value: string;
  onChange: (text: string) => void;
  isPassword?: boolean;
  isNumber?: boolean;
  error?: string | false;
  placeholder?: string;
  label?: string;
  helperText?: string;
  multiline?: boolean;
  style?: ViewStyle;
  maxLength?: number;
  rightLabelTsx?: React.ReactNode;
}

const AppTextarea: React.FC<Props> = ({
  value,
  onChange,
  error,
  placeholder,
  label,
  helperText,
  multiline = true,
  style,
  maxLength,
  rightLabelTsx,
  ...rest
}) => {
  const [count, setCount] = useState<number>(value?.length || 0);
  const [isActive, setIsActive] = useState(false);
  const { colors } = useTheme();

  useEffect(() => {
    setCount(value?.length || 0);
  }, [value]);
  const handleFocus = () => setIsActive(true);
  const handleBlur = () => setIsActive(false);

  const handleChangeText = (text: string) => {
    setCount(text.length);
    onChange(text);
  };
  const inputStyle = useMemo<TextStyle>(
    () => ({
      ...styles.container,
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
    <View style={style}>
      <HStack style={{ justifyContent: "space-between" }}>
        {label && (
          <AppText size="md" weight="regular" style={styles.label}>
            {label}
          </AppText>
        )}
        {rightLabelTsx ? rightLabelTsx : false}
      </HStack>
      <View style={inputStyle}>
        <TextInput
          value={value}
          multiline={true}
          placeholder={placeholder}
          maxLength={maxLength}
          onChangeText={handleChangeText}
          style={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
        {maxLength && (
          <AppText size="sm" style={styles.count}>
            {`${count}/${maxLength}`}
          </AppText>
        )}
      </View>
      {error ? (
        <AppText size="md" color="action">
          {error}
        </AppText>
      ) : (
        false
      )}
      {helperText && (
        <AppText size="sm" color="primary">
          {helperText}
        </AppText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 14,
    paddingTop: 7,
    backgroundColor: "white",
    borderRadius: 4,
    height: 100,
  },
  input: {
    color: "#728197",
    fontSize: 14,
    fontFamily: "SpaceGrotesk-Regular",
  },
  count: {
    position: "absolute",
    bottom: 8,
    right: 2,
  },
  label: {
    textTransform: "capitalize",
    marginBottom: 4,
  },
});

export default AppTextarea;
