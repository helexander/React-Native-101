import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const COUNTER_INCREMENT = 1;

const reducer = (state, action) => {
    switch (action.type)
    {
        case 'counter_increase':
            return { ...state, counter: state.counter + action.payload };
        case 'counter_decrease':
            return state.counter + action.payload < 0 ? state : { ...state, counter: state.counter + action.payload };
        default:
            return state;
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 })
    const { counter } = state;

    return <View>
        <Button title="Increase" onPress={ () => {
            dispatch({ type: 'counter_increase', payload: COUNTER_INCREMENT })
        } } />
        <Button title="Decrease" onPress={ () => {
            dispatch({ type: 'counter_decrease', payload: -1 * COUNTER_INCREMENT })
        } } />
        <Text>Current Count: { counter }</Text>
    </View>
};

const style = StyleSheet.create({});

export default CounterScreen;
