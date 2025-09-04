import React from "react";
import { View, Text, SectionList } from "react-native";

type SectionData = {
  title: string;
  data: string[];
};

export default function SectionListTask1() {
  const data: SectionData[] = [
    { title: "Wild Animals", data: ["Lion", "Tiger", "Wolf"] },
    { title: "Grass Animals", data: ["Elephant", "Giraffe", "Bison"] },
  ];

  return (
    <View>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text>Data: {item}</Text>}
        renderSectionHeader={({ section }) => <Text>Title: {section.title}</Text>}
      />
    </View>
  );
}
