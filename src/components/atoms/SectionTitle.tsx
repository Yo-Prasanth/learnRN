import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function SectionTitle({title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Epilogue-Medium',
    marginLeft: 8,
  },
});
