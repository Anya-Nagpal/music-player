import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import MoosicPlayer from './Player';

const App =()=>{
  return(
    <View style={styles.container}>
      <MoosicPlayer/>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})
