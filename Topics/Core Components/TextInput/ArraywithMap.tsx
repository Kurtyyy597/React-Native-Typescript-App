import React, {useState} from 'react';
import {Text, TextInput, View, ScrollView} from 'react-native';

export default function ArraywithMap() {
  const [name, setName] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [notes, setNotes] = useState<string[]>([]);

  return (
    <ScrollView>
      <View>
        <TextInput
          placeholder='Enter your name'
          value={name}
          onChangeText={text => setName(text)}
        />
        <Text> Hello I am {name} </Text>
      </View>

      <View>
        <TextInput
          placeholder='Enter your favorite note'
          value={note}
          onChangeText={text => setNote(text)}
          onSubmitEditing={() => {
            setNotes([...notes, note]);
            setNote("");
          }}
        />
        <Text> My Favorite Notes are: </Text>
      </View>

      {notes.map((note, index) => (
        <Text key={index}> {note} </Text>
      ))}
    </ScrollView>
  );
}
