import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SectionTitle from './atoms/SectionTitle';
import SocialMediaTile from './atoms/SocialMediaTile';

export default function SocialMediaHandles() {
  return (
    <View>
      <SectionTitle title={'Follow me on'} />
      <View style={styles.container}>
        <SocialMediaTile image={require('../assets/icons/instagram.png')} url={'https://www.instagram.com/preity_mukhundhan/?hl=en'} />
        <SocialMediaTile image={require('../assets/icons/twitter.png')} url={'https://twitter.com/preitymukundan?lang=en'} />
        <SocialMediaTile image={require('../assets/icons/facebook.png')} url={'https://www.facebook.com/profile.php?id=61562346417285'} />
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
              fontFamily: 'Epilogue-Medium',
              fontSize: 16,
              color: '#fff',
            }}>
            Bio
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
