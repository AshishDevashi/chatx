import AppButton from "@/component/AppButton";
import AppInput from "@/component/AppInput";
import AppText from "@/component/AppText";
import { Link } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
} from "react-native";

const initialState = {
  mobile: "",
  password: "",
};
interface Errors {
  mobile?: string;
  password?: string;
}

export default function Login() {
  const [formData, setFormData] = React.useState(initialState);
  const [errors, setErros] = React.useState<Errors>({});
  const handleChange = (name: keyof typeof formData, value: any) => {
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
    if (!formData.mobile) {
      newErrors.mobile = "Mobile Number is Required";
      isValid = false;
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }
    setErros(newErrors);
    return isValid;
  };
  const { mobile, password } = formData;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.child}>
          <Image
            source={{
              uri: "https://www.pngplay.com/wp-content/uploads/7/Chat-Transparent-Free-PNG.png",
            }}
            style={{ width: "100%", aspectRatio:1 }}
            resizeMode="cover"
          />
          <AppText color="black" size="xl" weight="semibold">
            Login to your account
          </AppText>
          <AppText color="black" size="md" weight="regular">
            with register credentials
          </AppText>
          <View style={{ marginTop: 10, gap: 10 }}>
            <AppInput
              value={mobile}
              onChange={(value) => handleChange("mobile", value)}
              label="Enter your Mobile Number"
              placeholder="+91"
              isNumber
              error={errors.mobile}
              maxLength={10}
            />
            <AppInput
              value={password}
              onChange={(value) => handleChange("password", value)}
              label="Enter your password"
              placeholder="password"
              isPassword
              error={errors.password}
            />
            <AppButton size="full" onPress={handleSubmit}>
              <AppText color="white">Login</AppText>
            </AppButton>
          </View>
          <View style={{ alignItems: "center" }}>
            <AppText>OR</AppText>
            <View style={{ flexDirection: "row" }}>
              <AppText>don't have an account </AppText>
              <Link href={"/register"}>
                <AppText
                  color={"primary"}
                  style={{ textDecorationLine: "underline" }}
                >
                  Register here
                </AppText>
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2edf5",
  },
  scrollView: {
    flexGrow: 1,
  },
  child: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 60,
    paddingBottom: 20,
  },
});
