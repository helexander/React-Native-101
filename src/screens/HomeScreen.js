import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={ styles.text }>HII</Text>
      <Button
        title="Go to components demo"
        onPress={ () => { console.log('Button Pressed') } }
      />
      <TouchableOpacity onPress={ () => { console.log('List Pressed') } }>
        <Text>Go to list demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
