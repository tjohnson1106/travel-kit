import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "./src/styles";

export default function App() {
  return (
    <ScrollView style={styles.root}>
      <Text>App Screen</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.darkBg
  }
});
