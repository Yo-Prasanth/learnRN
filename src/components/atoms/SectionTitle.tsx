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
    paddingBottom: 12,
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'TT Norms Pro Bold',
    marginLeft: 8,
  },
});
