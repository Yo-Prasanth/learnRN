import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function SocialMediaTile() {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        Linking.openURL('https://www.instagram.com/preity_mukhundhan/?hl=en')
      }>
      <Image
        source={{
          uri: 'https://cdn.logojoy.com/wp-content/uploads/20230922110325/facebook-2021-logo-600x319.png',
        }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: 35,
    backgroundColor: '#d3d3d3',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },

  image: {
    width: 35,
    height: 35,
  },
});
