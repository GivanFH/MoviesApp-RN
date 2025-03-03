import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import React from 'react';
import { Navigation } from './presentation/navigation/Navigation';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;
