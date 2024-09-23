import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { widthRatio } from '../../constants/dimentions';

export default function SocialMediaTile({image}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        Linking.openURL('https://www.instagram.com/preity_mukhundhan/?hl=en')
      }>
      <Image source={image} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 64*widthRatio,
    width: 64*widthRatio,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    elevation: 1,
  },

  image: {
    width: 40*widthRatio,
    height: 40*widthRatio,
  },
});
