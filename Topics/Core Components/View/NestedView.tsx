import React from 'react';
import { View } from 'react-native';

export default function NestedView() {
  return (
    <View style={{ backgroundColor: 'lightblue', height: 200, width: 200, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ backgroundColor: 'lightgreen', height: 100, width: 100 }} />
    </View>
  );
}