import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {profile_images} from '../constants/profile_images';
import AgeCounter from './molecules/AgeCounter';

const IntroCard = ({setInfo}) => {
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
          uri: profile_images[0],
        }}
        style={style.image}
      />

      <View style={style.detailsContainer}>
        <Text style={style.name}>
          <Text style={{color: '#c5c3c6'}}>ASK</Text> RAGHULAN
        </Text>
        <View style={{height: 4}} />
        <View style={style.description_block}>
          <Text style={style.description}>Entrepreneur & Youtuber</Text>
        </View>
        <View style={{flexGrow: 1}} />
        <AgeCounter />
      </View>
      <TouchableOpacity
        onPress={() => setInfo(info => !info)}
        style={{position: 'absolute', bottom: 12, left: 12}}>
        <Image
          source={require('../assets/icons/info.png')}
          style={{
            height: 22,
            width: 22,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default IntroCard;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    elevation: 1,
    borderRadius: 16,
  },

  image: {
    height: 150,
    width: 150,

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
    fontSize: 20,
    color: '#262545',
    fontFamily: 'TT Norms Pro ExtraBold',
  },

  description: {
    fontSize: 12,
    color: '#262545',
    fontFamily: 'Epilogue-Medium',
  },
});
