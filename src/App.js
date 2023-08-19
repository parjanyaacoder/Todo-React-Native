import React from 'react';
import {
  SafeAreaView,
  ScrollView
} from 'react-native';

import {
  Header
} from 'react-native/Libraries/NewAppScreen';
import StackNavigator from './configs/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () =>  {
  
  return (
      <NavigationContainer>
            <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        <StackNavigator />
        <Header />
      </ScrollView>
      
    </SafeAreaView>
      </NavigationContainer>
  );
}

export default App;
