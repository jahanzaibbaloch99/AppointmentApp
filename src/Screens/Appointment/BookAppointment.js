import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AppointmentDetails from '../../Components/AppointmentDetails';

const BookAppointment = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.5, backgroundColor: '#3E497A'}}>
        <View style={{flexDirection: 'row', marginTop: 60, marginHorizontal: 10}}>
          <TouchableOpacity style={{justifyContent:'center'}}>
            <Feather name="chevron-left" size={22} color="#fff" />
          </TouchableOpacity>
          <View >
          <Text
            style={{
                fontSize: 18,
                fontWeight:'600',
              color: '#fff',
              paddingLeft: 70
            }}>
            Book Your Appointment
          </Text>
          </View>
        </View>
      </View>
      <View style={{flex: 3, backgroundColor: '#CCD1E4'}}>
            <AppointmentDetails />
      </View>
    </View>
  );
};

export default BookAppointment;
