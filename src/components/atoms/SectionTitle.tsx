import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
    fontSize: 20,
    color: 'black',
    marginLeft: 8,
    fontWeight: '800',
  },
});

