import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The game is over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          // source={{
          //   uri:
          //     "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB136cEq.img?h=0&w=720&m=6&q=60&u=t&o=f&l=f&x=370&y=271",
          // }}
          style={styles.image}
          // resizeMode="contain"
        />
      </View>
      {/* <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText> */}
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.highLight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highLight}>{props.userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>New Game</MainButton>
    </View>
  );
};

export default GameOverScreen;

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
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  highLight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
});
