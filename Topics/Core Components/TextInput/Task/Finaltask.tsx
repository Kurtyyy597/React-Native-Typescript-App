import React, { useState } from 'react';
import { Text, TextInput, View, ScrollView } from 'react-native';

export default function TextInputFinalTask() {
  const [name, setName] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [notes, setNotes] = useState<string[]>([]);

  return (
    <ScrollView style={{ padding: 10 }}>
      {/* Name input */}
      <View>
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>

      {/* Note input */}
      <View>
        <TextInput
          placeholder="Enter your favorite notes"
          value={note}
          onChangeText={text => setNote(text)}
          onSubmitEditing={() => {
            setNotes([...notes, note]);
            setNote("");
          }}
        />
      </View>

      {/* Greeting */}
      {name && notes.length > 0 && (
        <Text>
          Hello {name}! Your favorite notes are:
        </Text>
      )}

      {/* Notes list */}
      <View>
        {notes.map((n, index) => (
          <Text key={index}>
            {index + 1} - {n}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}
