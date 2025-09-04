import React, { useState } from "react";
import { View, Switch } from "react-native";

export default function DisabledSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <View style={{ padding: 20 }}>
      <Switch value={enabled} onValueChange={() => setEnabled(prev => !prev)} disabled />
    </View>
  );
}
