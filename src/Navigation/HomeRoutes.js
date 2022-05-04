import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();
const BookingStack = createNativeStackNavigator();
import ConfirmAppointment from '../Screens/Appointment/ConfirmAppointment';
import BookAppointment from '../Screens/Appointment/BookAppointment';
import BookingDetails from '../Screens/Appointment/BookingDetails';
import BookingHistory from '../Screens/Appointment/BookingHistory';
const HomeRoutes = () => {
  return (
    <HomeStack.Navigator initialRouteName="BookAppointment">
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        scree
        name="BookAppointment"
        component={BookAppointment}
      />
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        scree
        name="ConfirmAppointment"
        component={ConfirmAppointment}
      />
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        scree
        name="BookingDetails"
        component={BookingDetails}
      />
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        scree
        name="BookingHistory"
        component={BookingHistory}
      />
    </HomeStack.Navigator>
  );
};

const BookingRoutes = () => {
  return (
    <BookingStack.Navigator initialRouteName="BookingHistory">
      <BookingStack.Screen
        options={{
          headerShown: false,
        }}
        scree
        name="ConfirmAppointment"
        component={ConfirmAppointment}
      />
      <BookingStack.Screen
        options={{
          headerShown: false,
        }}
        scree
        name="BookAppointment"
        component={BookAppointment}
      />
      <BookingStack.Screen
        options={{
          headerShown: false,
        }}
        scree
        name="BookingDetails"
        component={BookingDetails}
      />
      <BookingStack.Screen
        options={{
          headerShown: false,
        }}
        scree
        name="BookingHistory"
        component={BookingHistory}
      />
    </BookingStack.Navigator>
  );
};

export {HomeRoutes, BookingRoutes};
