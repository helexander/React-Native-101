import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return <View>
        <ImageDetail title="Forest" imageSource={ require('../../assets/images/forest.jpg') } imageScore={ 10 } />
        <ImageDetail title="Beach" imageSource={ require('../../assets/images/beach.jpg') } imageScore={ 7 } />
        <ImageDetail title="Mountain" imageSource={ require('../../assets/images/mountain.jpg') } imageScore={ 4 } />
    </View>;
};

const style = StyleSheet.create({});

export default ImageScreen;
