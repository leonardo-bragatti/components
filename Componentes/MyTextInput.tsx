import {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

const MyTextInput = () => {
  const [text, onChangeText] = useState('Useless text');
  const [number, onChangeNumber] = useState('');

  return (
    <View>
      <TextInput
        style={{height: 40, margin: 10, borderWidth: 1}}
        value={text}
        onChangeText={onChangeText}
      />
      <Text>Text: {text}</Text>

      <TextInput
        style={{height: 40, margin: 10, borderWidth: 1}}
        value={number}
        onChangeText={onChangeNumber}
        placeholder="Useless number"
        keyboardType="numeric"
      />
      <Text>Number: {number}</Text>
    </View>
  );
};

export default MyTextInput;
