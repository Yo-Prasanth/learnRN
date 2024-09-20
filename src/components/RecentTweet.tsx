import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SectionTitle from './atoms/SectionTitle';

export default function RecentTweet({tweet_text}) {
  return (
    <View>
      <SectionTitle title={'Hot on Sales 🔥'} />

      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://armerado.com/cdn/shop/files/3-min_medium.png?v=1723041088',
          }}
          style={styles.image}
        />

        <View
          style={{
            justifyContent: 'center',
            marginLeft: 16,
            flexShrink: 1,
          }}>
          <Text style={styles.tweet_text}>ChronoStrike NORTH EDGE</Text>

          <View
            style={{
              borderWidth: 0.6,
              height: 40,
              justifyContent: 'center',
              marginTop: 16,
            }}>
            <Text
              style={[styles.tweet_text, {alignSelf: 'center'}]}
              onPress={() =>
                Linking.openURL(
                  'https://armerado.com/collections/best-selling/products/chronostrike-north-edge',
                )
              }>
              Get it now
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
    elevation: 1,
    flexDirection: 'row',
  },
  tweet_text: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'TT Norms Pro Regular',
    color: '#000',
  },

  image: {
    height: 200,
    width: 200,
    borderRadius: 8,
  },
});
