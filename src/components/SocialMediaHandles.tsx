import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SectionTitle from './atoms/SectionTitle';
import SocialMediaTile from './atoms/SocialMediaTile';

export default function SocialMediaHandles() {
  return (
    <View>
      <SectionTitle title={'Follow me on'} />
      <View style={styles.container}>
        <SocialMediaTile image={require('../assets/icons/instagram.png')} />
        <SocialMediaTile image={require('../assets/icons/twitter.png')} />
        <SocialMediaTile image={require('../assets/icons/youtube.png')} />
        <View
          style={{
            backgroundColor: '#9ea3fe',
            height: 64,
            flexGrow: 1,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 1,
          }}>
          <Text
            style={{
              fontFamily: 'TT Norms Pro Medium',
              fontSize: 16,
              color: '#fff',
            }}>
            Who am I?
          </Text>
        </View>
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
