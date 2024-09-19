import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
    width: 64,
    height: 64,
  },
  number: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '700',
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
    color: '#262545',
    textAlign: 'center',
  },
});
