import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const ColorGuess = () => {
  // Track if users answer is correct
  const [correctAnswer, setCorrectAnswer] = useState([false]);
  // State of color
  const [color, setColor] = useState([]);

  // Generate random number
  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Generate random color
  function randomColor() {
    const r = randomNum(0, 255);
    const g = randomNum(0, 255);
    const b = randomNum(0, 255);
    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    randomColor();
  }, []);

  return (
    <SafeAreaView>
      {/* Box displaying random color */}
      <View
        style={{
          backgroundColor: color,
          width: 100,
          height: 100,
          alignSelf: "center",
        }}
      ></View>
    </SafeAreaView>
  );
};

export default ColorGuess;

const styles = StyleSheet.create({});
