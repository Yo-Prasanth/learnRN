import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {profile_images} from '../constants/profile_images';
import AgeCounter from './molecules/AgeCounter';
import { widthRatio } from '../constants/dimentions';

const IntroCard = () => {
  //   function to change images
  //   const [imageIndex, setImageIndex] = useState(0);

  //   useEffect(() => {
  //     setInterval(() => {
  //       if (imageIndex < profile_images.length - 1) {
  //         setImageIndex(pre => pre + 1);
  //       }
  //     }, 2000);
  //   }, []);

  return (
    <View style={style.container}>
      <Image
        source={{
          uri: profile_images[6],
        }}
        style={style.image}
      />

      <View style={style.detailsContainer}>
        <Text style={style.name}>Preity Mukhundhan</Text>
        <View style={{height: 4}} />
        <View style={style.description_block}>
          <Text style={style.description}>Indian Actress and Model</Text>
          {/* <View style={style.bio_button}>
            <Text style={{fontSize: 12, color: '#fff', marginRight: 8}}>
              Bio
            </Text>
            <Image
              source={{
                uri: 'https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839PA4459PT28D315780325W10000H6676/views/1,width=550,height=550,appearanceId=839,backgroundColor=F2F2F2/arrow-icon-right-direction-symbol-sign-sticker.jpg',
              }}
              style={{height: 12, width: 12, borderWidth: 3, borderRadius: 20}}
            />
          </View> */}
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
    padding: 10*widthRatio,
    elevation: 1,
    borderRadius: 16,
  },

  image: {
    height: 140*widthRatio,
    width: 140*widthRatio,
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
    alignItems: 'center',
    backgroundColor: '#D7A1F9',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },

  name: {
    fontSize: 18,
    color: '#262545',
    fontFamily: 'Epilogue-SemiBold',
  },

  description: {
    fontSize: 12,
    color: '#262545',
    fontFamily: 'Epilogue-Medium',
  },
});
