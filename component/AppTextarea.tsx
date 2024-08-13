import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, ViewStyle } from "react-native";
import AppText from "./AppText";
import HStack from "./HStack";

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

  useEffect(() => {
    setCount(value?.length || 0);
  }, [value]);

  const handleChangeText = (text: string) => {
    setCount(text.length);
    onChange(text);
  };

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
      <View style={styles.container}>
        <TextInput
          value={value}
          multiline={true}
          placeholder={placeholder}
          maxLength={maxLength}
          onChangeText={handleChangeText}
          style={styles.input}
          {...rest}
        />
        {maxLength && (
          <AppText size="sm" style={styles.count}>
            {`${count}/${maxLength}`}
          </AppText>
        )}
      </View>
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
