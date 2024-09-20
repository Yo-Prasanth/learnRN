import React from 'react';
import {StyleSheet, View} from 'react-native';
import SectionTitle from './atoms/SectionTitle';
import SocialMediaTile from './atoms/SocialMediaTile';

export default function SocialMediaHandles() {
  return (
    <View>
      <SectionTitle title={'Follow me on'} />
      <View style={styles.container}>
        <SocialMediaTile image={require('../assets/icons/instagram.png')} />
        <SocialMediaTile image={require('../assets/icons/twitter.png')} />
        <SocialMediaTile image={require('../assets/icons/facebook.png')} />
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
