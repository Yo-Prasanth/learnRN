import React from 'react';
import {StyleSheet, View} from 'react-native';
import SectionTitle from './atoms/SectionTitle';
import SocialMediaTile from './atoms/SocialMediaTile';

export default function SocialMediaHandles() {
  return (
    <View>
      <SectionTitle title={'Follow me on'} />
      <View style={styles.container}>
        <SocialMediaTile />
        <SocialMediaTile />
        <SocialMediaTile />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
