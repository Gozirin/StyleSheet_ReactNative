
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('Style-Test')
  const onClickHandler = () => {
    setName('Programming with Mash')
  }
 
  return (
    <View style={styles.body}>
      <Text style ={styles.text}>{name}</Text>
      <Button title='Update Status' onPress={onClickHandler} style ={styles.button}></Button>
    
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderRadius: 10,
    borderColor: 'black',
    margin: 20,

  },
  text: {
    color: '#ffff',
    fontSize:20,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
    
  }, 
  button: {
    width: 200,
    height: 60,
  }
});

export default App;
