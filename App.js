import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ColorGuess from "./components/ColorGuess";
import Heading from "./components/Heading";

export default function App() {
  return (
    <SafeAreaProvider style={styles.appContainer}>
      <Heading />
      <ColorGuess />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
