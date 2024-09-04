import AppText from "@/component/AppText";
import React from "react";
import { SafeAreaView, View } from "react-native";

function Message() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <AppText color="black">message</AppText>
    </SafeAreaView>
  );
}

export default Message;
