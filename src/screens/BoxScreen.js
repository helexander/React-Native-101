import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return <View style={ styles.viewStyle }>
        <View style={ styles.oneStyle }></View>
        <View style={ styles.twoStyle }></View>
        <View style={ styles.threeStyle }></View>
    </View>
};

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row'
    },
    oneStyle: {
        height: 100,
        width: 120,
        backgroundColor: 'red',
        // justifyContent: 'space-between'
    },
    twoStyle: {
        height: 100,
        width: 120,
        backgroundColor: 'green',
        // top: 0,
        // left: 0,
        // right: 0,
        // bottom: 0,
        // position: 'absolute'
        // This would be the equivalent of the commands commented out above
        //...StyleSheet.absoluteFillObject
        position: 'absolute',
        left: 145,
        top: 100,
        // marginTop: 100
    },
    threeStyle: {
        height: 100,
        width: 120,
        backgroundColor: 'purple',
        right: 0,
        position: 'absolute'
    }
});

export default BoxScreen;
