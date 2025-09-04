import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function ScrollViewFinalTask() {
  return (
    <ScrollView>
      {/* Section 1 */}
      <View>
        <Text>Section 1: Fruits</Text>
        <ScrollView horizontal={true}>
          <Text>Apple </Text>
          <Text>Banana </Text>
          <Text>Orange </Text>
          <Text>Mango </Text>
        </ScrollView>
      </View>

      {/* Section 2 */}
      <View>
        <Text>Section 2: Animals</Text>
        <ScrollView horizontal={true}>
          <Text>Dog </Text>
          <Text>Cat </Text>
          <Text>Elephant </Text>
          <Text>Tiger </Text>
        </ScrollView>
      </View>

      {/* Section 3 */}
      <View>
        <Text>Section 3: Countries</Text>
        <ScrollView horizontal={true}>
          <Text>USA </Text>
          <Text>India </Text>
          <Text>UK </Text>
        </ScrollView>
      </View>
    </ScrollView>
  );
}
