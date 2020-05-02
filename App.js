import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import { colors } from "./src/styles";
import HotelView from "./src/HotelView";

export default function App() {
  return (
    <ScrollView style={styles.root}>
      <HotelView />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.darkBg
  }
});
