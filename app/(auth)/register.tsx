import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "@/component/AppText";
import { Feather } from "@expo/vector-icons";
import AppInput from "@/component/AppInput";

export default function Register() {
  const [formData, setFormData] = React.useState({
    username: "",
  });
  const handleChange = (name: string, value: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <AppText color="black" size="xl" weight="semibold">
          Create new account
        </AppText>
        <TouchableOpacity style={styles.borderBtn}>
          <Feather name="plus" color={"#8593A8"} size={30} />
        </TouchableOpacity>
        <AppText size="lg" weight="medium">
          Upload a picture
        </AppText>
        <AppText size="md" weight="light">
          (Automatically created as an NFT asset)
        </AppText>
      </View>
      <View style={{ marginTop: 30 }}>
        <AppInput
          value={formData.username}
          onChange={(value) => handleChange("username", value)}
          label="how are you called?"
          error={false}
          style={{}}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2edf5",
    paddingHorizontal: 28,
    paddingTop: 70,
  },
  borderBtn: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: "#8593A8",
    borderRadius: 10,
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 15,
  },
});
