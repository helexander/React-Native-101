import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

// Rather than passing the entire props object, we can just refactor the code and only use the "navigation" property from props 
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={ styles.text }>Welcome to the Home Page of my React Native Projects</Text>
      {/* Two methods to navigate from one screen to another
      However, "Button" is less powerful and has less configuration abilities as compared to "TouchableOpacity" 
      Button is also a self closing tag as compared to TouchableOpacity*/}
      <Button
        title="Go to components demo"
        onPress={ () => { navigation.navigate('Components') } }
      />
      <TouchableOpacity onPress={ () => { navigation.navigate('List') } }>
        <Text>Go to list demo</Text>
      </TouchableOpacity>
      <Button
        title="Go to image screen"
        onPress={ () => { navigation.navigate('Image') } }
      />
      <Button
        title="Go to counter demo project"
        onPress={ () => { navigation.navigate('Counter') } }
      />
      <Button
        title="Go to color demo project"
        onPress={ () => { navigation.navigate('Color') } }
      />
      <Button
        title="Go to square demo"
        onPress={ () => { navigation.navigate('Square') } }
      />
      <Button
        title="Go to text demo"
        onPress={ () => { navigation.navigate('Text') } }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
