import React from 'react';
import {StyleSheet, View} from 'react-native';
import AgeCounterTile from '../atoms/AgeCounterTile';

const AgeCounter = () => {
  return (
    <View style={styles.container}>
      <AgeCounterTile number={23} text={'Years'} />
      <AgeCounterTile number={8} text={'Months'} />
      <AgeCounterTile number={12} text={'Days'} />
    </View>
  );
};
export default AgeCounter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
