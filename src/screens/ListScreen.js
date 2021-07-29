import React from 'react';
import { ViewBase, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: '20' },
        { name: 'Friend #2', age: '45' },
        { name: 'Friend #3', age: '32' },
        { name: 'Friend #4', age: '27' },
        { name: 'Friend #5', age: '53' },
        { name: 'Friend #7', age: '30' },
    ];

    return (
        <FlatList
            // To imply that we would want the FlatList to be arranged horizontally..
            // horizontal
            // To prevent the scroll bar from appearing at the bottom of the screen
            // showsHorizontalScrollIndicator = {false}

            // Another method to initialise a key
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 30
    }
});

export default ListScreen;