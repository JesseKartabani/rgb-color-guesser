import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ColorGuess from "./components/ColorGuess";
import Heading from "./components/Heading";

export default function App() {
  return (
    <ImageBackground
      style={styles.backgroundImg}
      source={require("./assets/background.jpg")}
    >
      <SafeAreaProvider style={styles.appContainer}>
        <Heading />
        <ColorGuess />
      </SafeAreaProvider>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImg: {
    width: "100%",
    height: "100%",
  },
});
