import React from "react";
import { View, StyleSheet } from "react-native";

const Card = props => {
  return (
    // ...styles.card brings in all key-value pairs into new object
    // ...props.style brings in new values I want to overried in styles.card.
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    //shadows only useable on ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    // elevation is used for android
    elevation: 10,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10
  }
});
export default Card;
