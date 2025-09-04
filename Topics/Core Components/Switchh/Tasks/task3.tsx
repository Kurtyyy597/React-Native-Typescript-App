import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';

export default function SwitchTask3() {
  const [master, setMaster] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [bluetooth, setBluetooth] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={{ padding: 20, flex: 1, backgroundColor: darkMode ? "#222" : "#fff" }}>
      
      {/* Master */}
      <Text>Master: {master ? "ON" : "OFF"}</Text>
      <Switch
        value={master}
        onValueChange={() => setMaster(prev => !prev)}
        thumbColor={master ? "blue" : "gray"}
        trackColor={{ true: "lightblue", false: "lightgray" }}
      />

      {/* WiFi */}
      <Text>WiFi: {wifi ? "ON" : "OFF"}</Text>
      <Switch
        value={wifi}
        onValueChange={() => setWifi(prev => !prev)}
        thumbColor={wifi ? "blue" : "gray"}
        trackColor={{ true: "lightblue", false: "lightgray" }}
        disabled={!master}
      />

      {/* Bluetooth */}
      <Text>Bluetooth: {bluetooth ? "ON" : "OFF"}</Text>
      <Switch
        value={bluetooth}
        onValueChange={() => setBluetooth(prev => !prev)}
        thumbColor={bluetooth ? "orange" : "gray"}
        trackColor={{ true: "lightsalmon", false: "lightgray" }}
        disabled={!master}
      />

      {/* Dark Mode */}
      <Text>Dark Mode: {darkMode ? "ON" : "OFF"}</Text>
      <Switch
        value={darkMode}
        onValueChange={() => setDarkMode(prev => !prev)}
        thumbColor={darkMode ? "green" : "gray"}
        trackColor={{ true: "lightgreen", false: "lightgray" }}
      />
    </View>
  );
}
