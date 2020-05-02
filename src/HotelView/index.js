import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

import { colors } from "../styles";
import Header from "../HotelView/components/Header";
import Bookmark from "../HotelView/components/Bookmark";
import About from "../HotelView/components/About";

export default function HotelView() {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Header />

      <View>
        <Bookmark />
        <About />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.darkBg
  }
});
