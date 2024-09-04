import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import React, { useMemo } from "react";
import { Picker } from "@react-native-picker/picker";
import AppText from "./AppText";
import { useTheme } from "@react-navigation/native";

interface AppInputProps {
  data: string[];
  value: string;
  onChange: (text: string) => void;
  error?: string | false;
  placeholder?: string;
  label?: string;
  helperText?: string;
  style?: ViewStyle;
}

const AppInput: React.FC<AppInputProps> = ({
  data,
  value,
  onChange,
  error,
  placeholder,
  label,
  helperText,
  style,
}) => {
  const { colors } = useTheme();

  const inputStyle = useMemo<TextStyle>(
    () => ({
      ...styles.picker,
      borderColor: error ? colors.notification : undefined,
      borderWidth: error ? 1 : 0,
      ...style,
    }),
    [error]
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
      <View style={inputStyle}>
        <Picker selectedValue={value} onValueChange={onChange}>
          <Picker.Item
            style={styles.item}
            label={placeholder}
            value={""}
            enabled={false}
          />
          {data.map((item, index) => (
            <Picker.Item
              style={styles.item}
              key={index}
              label={item}
              value={item}
            />
          ))}
        </Picker>
      </View>
      {error && (
        <AppText size="md" color="action">
          {error}
        </AppText>
      )}
      {helperText && <AppText size="md">{helperText}</AppText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  picker: {
    height: 50,
    backgroundColor: "white",
  },
  item: {
    color: "#728197",
    fontSize: 14,
    fontFamily: "SpaceGrotesk-Regular",
  },
  placeholder: {
    color: "#d3d3d3",
    fontSize: 14,
    fontFamily: "SpaceGrotesk-Regular",
  },
});

export default AppInput;
