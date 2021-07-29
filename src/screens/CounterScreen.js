import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    // This is an invalid way of changing the state of the counter variable
    // let counter = 0;

    const [counter, setCounter] = useState(0);

    return <View>
        <Button title="Increase" onPress={ () => {
            setCounter(counter + 1);
        } } />
        <Button title="Decrease" onPress={ () => {
            setCounter(counter - 1);
        } } />
        <Text>Current Count: { counter }</Text>
    </View>
};

const style = StyleSheet.create({});

export default CounterScreen;
