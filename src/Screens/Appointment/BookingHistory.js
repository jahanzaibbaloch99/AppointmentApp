import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import BookingHistoryCard from '../../Components/BookingHistoryCard';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BookingHistory = () => {
  return (
    <View style={{flex: 1}}>
      <View>
        <View style={{backgroundColor: '#B2EA70', flexDirection: 'row'}}>
          <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
            <Ionicons name="arrow-back" size={40} color="#000" />
          </TouchableOpacity>
          <View style={{justifyContent: 'center', marginLeft: 70}}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>
              Your Booking History
            </Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1}}>
      <BookingHistoryCard name="Dr Zakaria"/>
      <BookingHistoryCard name="Dr Zakaria"/>
      </View>
      
    </View>
  );
};

export default BookingHistory;
