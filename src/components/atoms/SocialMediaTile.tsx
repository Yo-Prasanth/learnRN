import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function SocialMediaTile({url,imageUrl}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        Linking.openURL(url)
      }>
      <Image
        source={{
          uri:imageUrl,
        }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    width: 64,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    elevation: 1,
  },

  image: {
    width: 35,
    height: 35,
  },
});