import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import AppText from "@/component/AppText";
import { Feather } from "@expo/vector-icons";
import AppInput from "@/component/AppInput";
import AppInputSelect from "@/component/AppInputSelect";
import AppCheckBox from "@/component/AppCheckBox";
import AppButton from "@/component/AppButton";
import AppTextarea from "@/component/AppTextarea";
import * as Clipboard from "expo-clipboard";
import { useTheme } from "@react-navigation/native";

const GENDER = ["Male", "Female"];
const initialState = {
  username: "",
  gender: "Male",
  interested: "",
  keyPhrase: "",
  isAccepted: false,
};

interface Errors {
  username?: string;
  gender?: string;
  interested?: string;
  keyPhrase?: string;
  isAccepted?: string;
}
export default function Register() {
  const [formData, setFormData] = React.useState(initialState);
  const [errors, setErros] = React.useState<Errors>({});
  const [copy, setCopy] = useState(false);
  const { colors } = useTheme();

  const handleChange = (
    name: keyof typeof formData,
    value: string | boolean
  ) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setErros((prevState) => ({ ...prevState, [name]: "" }));
  };
  const handleSubmit = () => {
    if (isValid()) {
      console.log(formData);
    }
  };
  const isValid = () => {
    let isValid = true;
    const newErrors = { ...errors };
    if (!formData.username) {
      newErrors.username = "Username is required";
      isValid = false;
    }
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
      isValid = false;
    }
    if (!formData.keyPhrase) {
      newErrors.keyPhrase = "Key phrase is required";
      isValid = false;
    }
    if (!formData.isAccepted) {
      newErrors.isAccepted = "Accept terms and conditions";
      isValid = false;
    }
    setErros(newErrors);
    return isValid;
  };
  const CopyComponet = () => {
    const handlePress = async () => {
      await Clipboard.setStringAsync(formData.keyPhrase);
      setCopy(true);
      setTimeout(() => {
        setCopy(false);
      }, 1000); //
    };
    return copy ? (
      <AppText size="sm" color="primary">
        <Feather name="check" size={12} color={colors.primary} />
        COPIED
      </AppText>
    ) : (
      <TouchableOpacity onPress={handlePress}>
        <AppText size="sm" color="primary">
          COPY
        </AppText>
      </TouchableOpacity>
    );
  };

  const { gender, interested, isAccepted, keyPhrase, username } = formData;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
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
        <View style={{ marginTop: 30, gap: 10 }}>
          <AppInput
            value={username}
            onChange={(value) => handleChange("username", value)}
            label="how are you called?"
            placeholder="Enter Nickname"
            error={errors.username}
          />
          <AppInputSelect
            value={gender}
            onChange={(value) => handleChange("gender", value)}
            label="gender"
            data={GENDER}
            placeholder="Select gender"
            error={errors.gender}
          />
          <AppInput
            value={interested}
            onChange={(value) => handleChange("interested", value)}
            label="What are you interested on?"
            placeholder="(optional)"
            error={errors.interested}
          />
          <AppTextarea
            rightLabelTsx={<CopyComponet />}
            value={keyPhrase}
            onChange={(value) => handleChange("keyPhrase", value)}
            label="your key phrase"
            placeholder="Enter Key Pharse"
            error={errors.keyPhrase}
            maxLength={70}
            helperText={
              "Save the key phrase to the safe place, this is the one and only access to your account. "
            }
          />
          <AppCheckBox
            value={isAccepted}
            onChange={(value) => handleChange("isAccepted", value)}
            label="By registering an account, you are agreeing Terms and Agreement of Chatx."
            error={errors.isAccepted}
          />
          <AppButton size="full" onPress={handleSubmit}>
            <AppText color="white">Continue</AppText>
          </AppButton>
        </View>
      </ScrollView>
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
  keyPhraseInput: {
    height: 70,
  },
});
