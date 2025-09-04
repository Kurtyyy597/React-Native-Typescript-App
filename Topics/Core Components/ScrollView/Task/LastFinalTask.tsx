import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';

export default function LastFinalTaskScrollView() {
  return (
    <ScrollView>
      {/* Section 1: Fruits */}
      <View>
        <Text>Section 1: Fruits</Text>
        <Image source={require('../../../../assets/img/apple.png')} />
        <Text>This is Apple</Text>
        <Image source={require('../../../../assets/img/banana.png')} />
        <Text>This is Banana</Text>
        <Image source={require('../../../../assets/img/grapes.png')} />
        <Text>This is Grapes</Text>
      </View>

      {/* Section 2: Animals */}
      <View>
        <Text>Section 2: Animals</Text>
        <Image source={require('../../../../assets/img/dog.png')} />
        <Text>This is Dog</Text>
        <Image source={require('../../../../assets/img/cat.png')} />
        <Text>This is Cat</Text>
        <Image source={require('../../../../assets/img/elephant.png')} />
        <Text>This is Elephant</Text>
      </View>

      {/* Section 3: Cars */}
      <View>
        <Text>Section 3: Cars</Text>
        <Image source={require('../../../../assets/img/car.png')} />
        <Text>This is Car</Text>
        <Image source={require('../../../../assets/img/bike.png')} />
        <Text>This is Bike</Text>
        <Image source={require('../../../../assets/img/bus.png')} />
        <Text>This is Bus</Text>
      </View>
    </ScrollView>
  );
}