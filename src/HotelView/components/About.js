import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { gs, colors } from "../../styles";

const hotels = {
  name: "Mt Catlin Hotel",
  price: "967",
  location: "New York",
  about: "lorem ipsum nunc eros, vehiculade vel vehicula, lacinta a erat."
};

export default function About() {
  return (
    <View style={styles.root}>
      <Text>About</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
