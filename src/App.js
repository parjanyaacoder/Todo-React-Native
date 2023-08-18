import React from 'react';
import {
  SafeAreaView,
  ScrollView
} from 'react-native';

import {
  Header
} from 'react-native/Libraries/NewAppScreen';

const App = () =>  {
  
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        <Header />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
