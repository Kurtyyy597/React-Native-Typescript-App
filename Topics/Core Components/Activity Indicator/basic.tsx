import React from "react";
import { View, ActivityIndicator } from "react-native";

export default function BasicSpinner() {
  return (
    <View>
      <ActivityIndicator size={"large"} color={"blue"}/>
    </View>
  );
}
