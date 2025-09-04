import React, { useState } from "react";
import { Button, SectionList, Text, View } from "react-native";

type MotorCycles = {
  brand: string;
  data: string[]; // must be called data
};

export default function SectionListTask2() {
  const [sections, setSections] = useState<MotorCycles[]>([
    { brand: "Honda", data: ["Honda ADV", "Honda Click", "Honda PCX"] },
    { brand: "Yamaha", data: ["Mio Gear", "Nmax", "Yamaha Aerox"] },
  ]);

  const addFruitSections = () => {
    setSections((prev) => [
      ...prev,
      { brand: "Mitsubishi", data: ["Raptor", "Ford"] },
    ]);
  };

  return (
    <View>
      <Button title="Click to Push Fruits" onPress={addFruitSections} />

      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text>Data: {item}</Text>}
        renderSectionHeader={({ section }) => <Text>Title: {section.brand}</Text>}
      />
    </View>
  );
}
