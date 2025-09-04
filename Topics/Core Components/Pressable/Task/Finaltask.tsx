import React, { useState } from 'react';
import { Pressable, ScrollView, View, Text, TextInput } from 'react-native';

export default function PressableFinalTask() {
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [item, setItem] = useState<string>("");
  const [items, setItems] = useState<{ item: string; category: string }[]>([]);

  return (
    <ScrollView>
      <View>
        <TextInput
          placeholder='Type your name'
          value={name}
          onChangeText={setName}
        />

        <TextInput
          placeholder='Enter Category'
          value={category}
          onChangeText={setCategory}
        />
      </View>

      <View>
        <TextInput
          placeholder='Enter your favorite item'
          value={item}
          onChangeText={setItem}
          onSubmitEditing={() => {
            // Only add if both category and item are not empty
            if (item.trim() && category.trim()) {
              setItems([...items, { item: item.trim(), category: category.trim() }]);
              setItem("");
              setCategory(""); // Clear the item input
              // Keep category so user can add multiple items to the same category
            }
          }}
        />
      </View>

      {name && items.length > 0 && (
        <Text> Hello {name}, here are your favorite items: </Text>
      )}

      {items.map((entry, index) => (
        <Text key={index}>
          {index + 1} - [{entry.category}] {entry.item}
        </Text>
      ))}
    </ScrollView>
  );
}
