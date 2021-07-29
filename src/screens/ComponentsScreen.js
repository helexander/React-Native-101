import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
    const name = "Jeremy";
    const subheader = (
        <Text style={style.secondTextStyle}>My name is {name}</Text>
    );

    return (
        <View>
            <Text style={styles.firstTextStyle}>
                Getting started with React Native!
            </Text>
            {subheader}
        </View>
    );
};

const styles = StyleSheet.create({
    firstTextStyle: {
        fontSize: 45,
    },
    secondTextStyle: {
        fontSize: 20,
    },
});

export default ComponentsScreen;
