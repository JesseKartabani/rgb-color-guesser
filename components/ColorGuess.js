import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const ColorGuess = () => {
  // Track if users answer is correct
  const [correctAnswer, setCorrectAnswer] = useState([]);
  // State of colors
  const [color, setColor] = useState([]);
  const [fakeColor, setFakeColor] = useState([]);
  const [fakeColor1, setFakeColor1] = useState([]);
  const [answers, setAnswers] = useState([]);

  // Generate random number
  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Generate random color
  function randomColors(state) {
    const r = randomNum(0, 255);
    const g = randomNum(0, 255);
    const b = randomNum(0, 255);
    state(`rgb(${r},${g},${b})`);
  }

  // Check if user gets correct answer
  function checkAnswer(answer) {
    // If correct randomize colors again
    if (answer == color) {
      setCorrectAnswer("true");
      randomColors(setColor);
      randomColors(setFakeColor);
      randomColors(setFakeColor1);
    } else {
      setCorrectAnswer("false");
    }
  }
  // Set random colors on startup
  useEffect(() => {
    randomColors(setColor);
    randomColors(setFakeColor);
    randomColors(setFakeColor1);
  }, []);

  // Randomly sort colors in array each time new ones are generated
  useEffect(() => {
    // Sorted into random order
    setAnswers([color, fakeColor, fakeColor1].sort(() => 0.5 - Math.random()));
  }, [color]);

  //console.log(color);
  //console.log(fakeColor);
  //console.log(fakeColor1);
  //console.log(answers);

  return (
    <SafeAreaView>
      {/* Box displaying random color */}
      <View
        style={{
          backgroundColor: color,
          width: 200,
          height: 200,
          alignSelf: "center",
          ...Platform.select({
            ios: {},
            android: {},
            default: {
              width: 400,
              height: 400,
            },
          }),
        }}
      ></View>

      {/* Tell user if they were right or wrong */}
      <View>
        {correctAnswer == "true" && (
          <Text style={styles.correctTxt}>Correct!</Text>
        )}
        {correctAnswer == "false" && (
          <Text style={styles.incorrectTxt}>Incorrect!</Text>
        )}
      </View>

      {/* 3 Answer buttons that check on click if user was correct */}
      <View styles={styles.answersContainer}>
        <TouchableOpacity
          style={styles.answerButton}
          onPress={async () => {
            checkAnswer(answers[0]);
          }}
        >
          <Text style={styles.answerTxt}>{answers[0]}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.answerButton}
          onPress={async () => {
            checkAnswer(answers[1]);
          }}
        >
          <Text style={styles.answerTxt}>{answers[1]}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.answerButton}
          onPress={async () => {
            checkAnswer(answers[2]);
          }}
        >
          <Text style={styles.answerTxt}>{answers[2]}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ColorGuess;

const styles = StyleSheet.create({
  answerButton: {
    alignSelf: "center",
    marginTop: 25,
  },

  answerTxt: {
    fontSize: "20%",
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        fontSize: "140%",
      },
    }),
  },

  correctTxt: {
    fontSize: "20%",
    color: "green",
    textAlign: "center",
    marginTop: 25,
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        fontSize: "140%",
      },
    }),
  },

  incorrectTxt: {
    fontSize: "20%",
    color: "red",
    textAlign: "center",
    marginTop: 25,
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        fontSize: "140%",
      },
    }),
  },
});
