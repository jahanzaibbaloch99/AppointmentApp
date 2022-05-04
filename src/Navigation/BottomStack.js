import * as React from 'react';
import {View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeRoutes, BookingRoutes} from './HomeRoutes';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function BottomNavigation(props) {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarLabelStyle: {fontWeight: 'bold', fontSize: 12},
        tabBarItemStyle: {
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          paddingTop: 10,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
            iconColor = focused ? '#B2EA70' : 'black';
          } else if (route.name === 'MyAppointments') {
            iconName = 'clipboard-sharp';
            iconColor = focused ? '#B2EA70' : 'black';
          }
          return (
            <View style={{width: 25, height: 25}}>
              <Icon name={iconName} color={iconColor} size={25} />
            </View>
          );
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          paddingBottom: 10,
          height: 65,
        },
      })}>
      <Tab.Screen
        navigation={props.navigation}
        name="Home"
        component={HomeRoutes}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
        }}
      />
      <Tab.Screen
        name="MyAppointments"
        component={BookingRoutes}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigation;
