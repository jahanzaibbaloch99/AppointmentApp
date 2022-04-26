import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from '../Screens/Register/Signup';
import ConfirmAppointment from '../Screens/Appointment/ConfirmAppointment';
import BookAppointment from '../Screens/Appointment/BookAppointment'
import BookingDetails from '../Screens/Appointment/BookingDetails'
import BookingHistory from '../Screens/Appointment/BookingHistory';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BookingHistory'>
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BookAppointment"
          component={BookAppointment}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ConfirmAppointment"
          component={ConfirmAppointment}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BookingDetails"
          component={BookingDetails}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BookingHistory"
          component={BookingHistory}
          options={{
            headerShown: false,
          }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
