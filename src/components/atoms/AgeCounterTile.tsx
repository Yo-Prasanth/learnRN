import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { widthRatio } from '../../constants/dimentions';

export default function AgeCounterTile({number, text}) {
  return (
    <View>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{number}</Text>
      </View>
      <View style={{height: 8}} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  numberContainer: {
    backgroundColor: '#9ea3fe',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60*widthRatio,
    height: 60*widthRatio,
    
  },
  number: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'Epilogue-ExtraLight',
  },
  text: {
    fontSize: 12,
    fontFamily: 'Epilogue-Regular',
    color: '#262545',
    textAlign: 'center',
  },
});
