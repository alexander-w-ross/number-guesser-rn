import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

import BodyText from "../constants/default-styles";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";
const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={BodyText.title}>GAME OVER!</Text>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/success.png")} style={styles.image} />
      </View>
      <View style={styles.resultText}>
        <Text style={[BodyText.bodyText, styles.bodyText]}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </Text>
      </View>
      <MainButton onPress={props.onRestart}>New Game</MainButton>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    marginVertical: Dimensions.get("window").width / 20,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
  },
  highlight: {
    color: Colors.primary,
  },
  resultText: {
    padding: 20,
  },
  bodyText: {
    textAlign: "center",
  },
});
export default GameOverScreen;
