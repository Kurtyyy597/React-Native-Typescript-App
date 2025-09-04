import React from "react";
import { View, Image } from "react-native";

export default function ImageExample2() {
  return (
    <View>
      <Image 
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} 
        style={{ width: 100, height: 100 }} 
      />
    </View>
  );
}
