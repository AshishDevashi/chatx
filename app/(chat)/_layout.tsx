import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const ChatLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="FriendList"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="message"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default ChatLayout;
