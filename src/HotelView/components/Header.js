import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";

import { gs } from "../../styles";

export default function Header() {
  return (
    <View>
      <Image
        source={require("../../../assets/modern-art.jpg")}
        style={{
          width: "100%",
          height: 400
        }}
      />

      <View style={styles.topButtons}>
        <AntDesign name="close" size={24} color="#fff" />

        <View style={gs.rowCenter}>
          <AntDesign name="save" size={24} />
          <AntDesign name="sharealt" size={24} />
          <Entypo name="dots-three-vertical" size={18} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topButtons: {
    ...gs.rowBetween,
    position: "absolute",
    top: 64,
    left: 32,
    right: 32
  },
  topButtonRight: {
    marginLeft: 12,
    color: "#fff"
  }
});
