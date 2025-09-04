import React, { useState, useEffect } from "react";
import { Button, View, Text, ActivityIndicator } from "react-native";

export default function ActivityIndicatorTask7() {
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    if (step === 0) return; // only start interval when button pressed

    const interval = setInterval(() => {
      setStep((prev) => (prev < 4 ? prev + 1 : prev));
    }, 2000); // update every 2 seconds

    return () => clearInterval(interval);
  }, [step]);

  return (
    <View>
      {step === 1 && (
        <>
          <ActivityIndicator size="large" color="blue" />
          <Text>Fetching Data...</Text>
        </>
      )}

      {step === 2 && (
        <>
          <ActivityIndicator size="large" color="orange" />
          <Text>Processing Data...</Text>
        </>
      )}

      {step === 3 && (
        <>
          <ActivityIndicator size="large" color="green" />
          <Text>Finalizing...</Text>
        </>
      )}

      {step === 4 && <Text>✅ All Done, Thanks for Waiting.</Text>}

      <Button title="Click to Start Loading" onPress={() => setStep(1)} />
    </View>
  );
}
