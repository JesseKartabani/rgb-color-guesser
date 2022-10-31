import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Heading = () => {
  return (
    <SafeAreaView>
      <Text style={styles.heading}>Guess The Value!</Text>
    </SafeAreaView>
  );
};

export default Heading;

const styles = StyleSheet.create({
  heading: {
    fontWeight: "600",
    fontSize: "35%",
    textAlign: "center",
    marginTop: 50,
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        fontSize: "250%",
      },
    }),
  },
});
