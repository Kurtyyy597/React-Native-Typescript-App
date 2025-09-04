import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function ScrollViewTask2() {
  return (
    <ScrollView>
      <View>
        <Text> Section 1: </Text>
        <View>
          <Text> Naruto </Text>
          <Text> Sasuke </Text>
          <Text> Sakura </Text>
        </View>
      </View>

      <View>
        <Text> Section 2: </Text>
        <View>
          <Text> Ichigo </Text>
          <Text> Rukia </Text>
          <Text> Orihime </Text>
        </View>
      </View>

      <View>
        <Text> Section 3: </Text>
        <View>
          <Text> Luffy </Text>
          <Text> Zoro </Text>
          <Text> Nami </Text>
        </View>
      </View>
    </ScrollView>
  );
}
