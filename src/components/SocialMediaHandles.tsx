import React from 'react';
import {StyleSheet, View} from 'react-native';
import SectionTitle from './atoms/SectionTitle';
import SocialMediaTile from './atoms/SocialMediaTile';

export default function SocialMediaHandles() {
  return (
    <View>
      <SectionTitle title={'Follow me on'} />
      <View style={styles.container}>
        <SocialMediaTile url={"https://www.instagram.com/preity_mukhundhan/?hl=en"} imageUrl={ 'https://cdn.logojoy.com/wp-content/uploads/20230922110325/facebook-2021-logo-600x319.png'} />
        <SocialMediaTile url={"https://www.instagram.com/preity_mukhundhan/?hl=en"} imageUrl={ 'https://cdn.logojoy.com/wp-content/uploads/20230922110325/facebook-2021-logo-600x319.png'} />
        <SocialMediaTile url={"https://www.instagram.com/preity_mukhundhan/?hl=en"} imageUrl={ 'https://cdn.logojoy.com/wp-content/uploads/20230922110325/facebook-2021-logo-600x319.png'} />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
})