import React, { Component } from 'react';
import { Text } from "react-native";

import { Block, GalioProvider } from "galio-framework";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
enableScreens();

import Screens from "./navigation/Screens";
import { Images, articles, argonTheme } from "./constants";
class App extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <NavigationContainer>
        <GalioProvider theme={argonTheme}>
          <Block flex>
            <Screens />
            {/* <Text>hello</Text> */}
          </Block>
        </GalioProvider>
      </NavigationContainer>
    )
  }

}

export default App;