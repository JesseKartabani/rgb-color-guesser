import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ColorGuess from "./components/ColorGuess";

export default function App() {
  return (
    <SafeAreaProvider style={styles.appContainer}>
      <ColorGuess />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
