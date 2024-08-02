import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "@/component/AppText";
import AppButton from "@/component/AppButton";
import { Link } from "expo-router";
import LinkButton from "@/component/LinkButton";

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <AppText color="primary" weight="semibold" style={styles.titleText}>
          Start a Fun Communication with Anonymity
        </AppText>
      </View>
      <Image
        source={require("@/assets/images/boarding.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.buttonContainer}>
        <LinkButton href="/register" color="white" size="full">
          Create an account
        </LinkButton>
        <LinkButton href="/login" size="sm" variant="linked">
          Login
        </LinkButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2edf5",
    paddingTop: 70,
    justifyContent: "space-between",
  },
  textContainer: {
    paddingHorizontal: 28,
    paddingRight: 60,
  },
  titleText: {
    fontSize: 35,
  },
  image: {
    width: "100%",
    height: "50%",
    marginTop: -40,
  },
  buttonContainer: {
    paddingHorizontal: 28,
    alignItems: "center",
    marginBottom: 10,
    gap: 5,
  },
});
