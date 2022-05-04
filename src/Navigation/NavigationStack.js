import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from '../Screens/Register/Signup';
import {useSelector} from 'react-redux';
import BottomStack from './BottomStack';
const Stack = createNativeStackNavigator();

function Navigation() {
  const state = useSelector(ele => ele.AccountReducer.user);
  const intialRoute = state?.email ? 'BottomStack' : 'Signup';

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={intialRoute}>
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BottomStack"
          component={BottomStack}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
