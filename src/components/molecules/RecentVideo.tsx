import {Image, SectionList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SectionTitle from '../atoms/SectionTitle';

export default function RecentVideo() {
  return (
    <View>
      <SectionTitle title={'Most Recent Vedio'} />
      <View style={{borderRadius: 8}}>
        <Image
          source={require('../../assets/images/pager.png')}
          style={{width: '100%', height: 210, borderRadius: 8}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
