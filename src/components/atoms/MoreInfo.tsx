import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function MoreInfo() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'red'}}>MoreInfo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
});
