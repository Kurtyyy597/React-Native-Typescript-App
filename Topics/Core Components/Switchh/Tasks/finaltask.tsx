import React, { useState } from 'react';
import { View, TextInput, Switch, Text, Button, ActivityIndicator } from 'react-native';

export default function SwitchFinalTask() {
  const [name, setName] = useState<string>("");
  const [enabled, setEnabled] = useState<boolean>(false);
  const [loading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const startLoading = () => {
    if (!enabled) return; // do nothing if switch is OFF

    setIsLoading(true);
    setMessage(""); // clear previous message

    setTimeout(() => {
      setIsLoading(false);
      setMessage(`Hello ${name}! Loading Complete.`);
    }, 3000); // simulate 3 seconds loading
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Enter your Name"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />

      <Text>Enable Loading: {enabled ? "ON" : "OFF"}</Text>
      <Switch
        value={enabled}
        onValueChange={() => setEnabled(prev => !prev)}
        thumbColor={enabled ? "blue" : "red"}
      />

      <Button title="Start Loading" onPress={startLoading} />

      {/* Show loader or message */}
      {loading && (
        <>
          <ActivityIndicator size="large" color="blue" />
          <Text>Loading...</Text>
        </>
      )}

      {!loading && message !== "" && <Text>{message}</Text>}
    </View>
  );
}
