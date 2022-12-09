import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const App = () => {
  const getNumber = (num: number): number => num;
  return (
    <SafeAreaView>
      <Text>{getNumber(12)}</Text>
    </SafeAreaView>
  );
};

export default App;
