import React, { useState } from 'react';
import { Text, TextInput, ScrollView, View } from 'react-native';

export default function TextInputLastFinalTask() {
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [notes, setNotes] = useState<{ note: string; category: string }[]>([]);

  return (
    <ScrollView>
      {/* Name input */}
      <View>
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Category input */}
      <View>
        <TextInput
          placeholder="Enter category"
          value={category}
          onChangeText={setCategory}
        />
      </View>

      {/* Note input */}
      <View>
        <TextInput
          placeholder="Enter your favorite note"
          value={note}
          onChangeText={setNote}
          onSubmitEditing={() => {
            setNotes([...notes, { note, category }]);
            setNote("");
            setCategory("");
          }}
        />
      </View>

      {/* Greeting */}
      {name && notes.length > 0 && (
        <Text>Hello {name}! Your favorite notes are:</Text>
      )}

      {/* Notes list */}
      <View>
        {notes.map((n, index) => (
          <Text key={index}>
            {index + 1} - [{n.category}] {n.note}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}
