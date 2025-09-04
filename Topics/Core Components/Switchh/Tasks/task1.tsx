import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';

export default function SwitchTask1() {
  const [enabled, setEnabled] = useState<boolean>(false); // rename setter

  return (
    <View style={{ padding: 20 }}>
      <Text>Switch: {enabled ? "On" : "Off"}</Text>
      <Switch
        value={enabled}
        onValueChange={() => setEnabled(prev => !prev)}
      />
    </View>
  );
}
