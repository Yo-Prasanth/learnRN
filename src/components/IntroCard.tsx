import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AgeCounter from './molecules/AgeCounter';

const IntroCard = () => {
  return (
    <View style={style.container}>
      <Image
        source={{
          uri: 'https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F4%2Fpeople%2F448193a532ff75054db24713f8f2be2d.jpg',
        }}
        style={style.image}
      />

      <View style={style.detailsContainer}>
        <Text style={{fontSize: 20, color: 'black'}}>Preity Mukhundhan</Text>
        <View style={style.description_block}>
          <Text style={{fontSize: 12, color: 'black'}}>
            Indian Actress and Model
          </Text>
          <View style={style.bio_button}>
            <Text style={{fontSize: 10, color: 'blue', flexGrow: 1}}>Bio</Text>
            <Image
              source={{
                uri: 'https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839PA4459PT28D315780325W10000H6676/views/1,width=550,height=550,appearanceId=839,backgroundColor=F2F2F2/arrow-icon-right-direction-symbol-sign-sticker.jpg',
              }}
              style={{height: 10, width: 15, borderWidth: 3, borderRadius: 20}}
            />
          </View>
        </View>
        {/* to push to the bottom */}
        <View style={{flexGrow: 1}} />
        <AgeCounter />
      </View>
    </View>
  );
};

export default IntroCard;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 8,
    elevation: 1,
    borderRadius: 16,
  },

  image: {
    height: 150,
    width: 150,
    borderWidth: 3,
    borderRadius: 8,
    marginRight: 8,
  },

  detailsContainer: {
    flexGrow: 1,
  },

  description_block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bio_button: {
    flexDirection: 'row',
    width: 64,
    alignItems: 'center',
    paddingRight: 5,
  },
});
