import React, { useState } from "react";
import { View, Button, ActivityIndicator, Text } from "react-native";

export default function ActivityIndicatorTask5() {
  const [loading, setLoading] = useState<boolean>(false);

  const startLoading2 = () => {
    setLoading(true); 
    setTimeout(() => setLoading(false), 3000); // hide spinner after 3s
  };

  return (
    <View>
      <Button title="Button" onPress={startLoading2} />

      {loading && (
        <>
          <ActivityIndicator size="large" color="blue" />
          <Text>Loading..... please wait</Text>
        </>
      )}
    </View>
  );
}
