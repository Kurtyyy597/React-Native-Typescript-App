import React, { useState } from "react";
import { View, Text, Switch } from "react-native";

export default function SwitchDynamicColors() {
  const [master, setMaster] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [bluetooth, setBluetooth] = useState(false);

  return (
    <View style={{ padding: 20 }}>
      {/* Master Switch */}
      <Text>Master: {master ? "ON" : "OFF"}</Text>
      <Switch
        value={master}
        onValueChange={() => setMaster(prev => !prev)}
        thumbColor={master ? "green" : "gray"}
        trackColor={{ true: "lightgreen", false: "lightgray" }}
      />

      {/* WiFi Switch */}
      <Text>WiFi: {wifi ? "ON" : "OFF"}</Text>
      <Switch
        value={wifi}
        onValueChange={() => setWifi(prev => !prev)}
        disabled={!master} // controlled by Master
        thumbColor={wifi && master ? "blue" : "gray"}
        trackColor={{ true: "lightblue", false: "lightgray" }}
      />

      {/* Bluetooth Switch */}
      <Text>Bluetooth: {bluetooth ? "ON" : "OFF"}</Text>
      <Switch
        value={bluetooth}
        onValueChange={() => setBluetooth(prev => !prev)}
        disabled={!master} // controlled by Master
        thumbColor={bluetooth && master ? "orange" : "gray"}
        trackColor={{ true: "lightsalmon", false: "lightgray" }}
      />
    </View>
  );
}
