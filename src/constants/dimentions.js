import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const widthRatio = width / 384;
const heightRatio = height / 782;

export {widthRatio, heightRatio};
