import React from 'react';
import {
  View
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import StackNavigator from './configs/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () =>  {
  
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
              <View style={{ height: "100%", width: "100%", }} >
              <StackNavigator />
              </View>
      
      </NavigationContainer>
      </GestureHandlerRootView>  
  );
}

export default App;
