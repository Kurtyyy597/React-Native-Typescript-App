import React from "react";
import { View, Image } from "react-native";

export default function ImageExample() {
  return (
    <View>
      <Image source={require("../assets/icon.png")} style={{ width: 100, height: 100 }} />
    </View>
  );
}
