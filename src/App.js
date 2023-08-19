import React from 'react';
import {
  View
} from 'react-native';

import StackNavigator from './configs/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () =>  {
  
  return (
      <NavigationContainer>
              <View style={{ height: "100%", width: "100%", }} >
              <StackNavigator />
              </View>
      
      </NavigationContainer>
  );
}

export default App;
