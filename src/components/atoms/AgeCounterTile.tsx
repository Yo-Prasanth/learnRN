import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AgeCounterTile({number, text}) {
  return (
    <View>
      <View style={styles.numberContainer}>
        <Text style={{fontSize: 30, color: 'black', textAlign: 'center'}}>
          {number}
        </Text>
      </View>
      <Text style={{fontSize: 10, color: 'black', textAlign: 'center'}}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  numberContainer: {
    backgroundColor: 'gray',
    borderRadius: 10,
    justifyContent: 'center',
    width: 64,
    height: 64,
  },
});
