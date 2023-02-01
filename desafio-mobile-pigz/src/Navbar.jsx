import React from "react";
import { Image, Text, View } from "react-native";


const Navbar = () => {
  return (
    <View >
        <Image source={require('./img/arrow_back_black_24dp.svg')}/>
      <Text>Navbar</Text>
    </View>
  );
};

export default Navbar;
