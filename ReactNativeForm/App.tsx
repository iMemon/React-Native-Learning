/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

function App(): JSX.Element {

  const [name, setName] = useState('')

  return (
    <View style={styles.body}>
      <Text style = {styles.text}>
        Please write your name
      </Text>
      <TextInput 
      style={styles.input} 
      placeholder='e.g. Ayaz' 
      onChangeText={(value)=>setName(value)}
      />
      <Text style = {styles.text}>
        Your name is: {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center'
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10 
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 15
  }
});

export default App;
