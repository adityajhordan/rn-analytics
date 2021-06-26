import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './src/pages/home';
import ProductDetail from './src/pages/productDetail';
import {HOME_PAGE, PRODUCT_DETAIL_PAGE} from './src/data';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={HOME_PAGE} component={HomePage} />
        <Stack.Screen name={PRODUCT_DETAIL_PAGE} component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
