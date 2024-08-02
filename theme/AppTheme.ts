import { DarkTheme, DefaultTheme } from "@react-navigation/native";

const AppDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#0573F3",
    background: "#F6FBFF",
    card: "#424F63",
    text: "#728197",
    border: "#8593A8",
    notification: "#E24444",
  },
};const AppDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#0573F3",
    background: "#F6FBFF",
    card: "#424F63",
    text: "#728197",
    border: "#8593A8",
    notification: "#E24444",
  },
};

export { AppDarkTheme, AppDefaultTheme };
