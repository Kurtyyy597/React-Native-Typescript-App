import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function TouchableOpacityGreeting() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  return (
    <View>
      {/* Name input */}
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      {/* TouchableOpacity button */}
      <TouchableOpacity onPress={() => setGreeting(`Hello, ${name}!`)}>
        <Text>Greet Me</Text>
      </TouchableOpacity>

      {/* Display greeting */}
      {greeting !== '' && <Text>{greeting}</Text>}
    </View>
  );
}
