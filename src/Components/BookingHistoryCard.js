import React from 'react';
import {View, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BookingHistoryCard = () => {
  return (
    <View style={{marginHorizontal: 30, marginVertical: 20}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{marginTop: 10}}>
          <Text style={{color: '#000', fontSize: 22, fontWeight: '600'}}>
            Dr Zakaria
          </Text>
        </View>
        <View style={{}}>
          <Image
            style={{width: 100, height: 100}}
            source={require('../assets/images/Dr1.jpg')}
          />
        </View>
      </View>
      <View>
        <View style={{flexDirection:'row'}}>
          <Ionicons name="navigate" size={18} color="#000" />
          <Text style={{color: '#000'}}>Cardiologist 106 Medlicott rd</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Ionicons
            name="time-outline"
            color="#000"
            size={22}
            style={{marginRight: 5}}
          />
          <Text style={{color: '#000',}}>Open Until 20:00PM</Text>
        </View>
      </View>
    </View>
  );
};

export default BookingHistoryCard;
