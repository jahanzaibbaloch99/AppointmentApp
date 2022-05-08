import React from 'react';
import {View, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BookingHistoryCard = props => {
  return (
    <View
      style={{
        marginHorizontal: 30,
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#DDDDDD',
        paddingBottom: 20,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{marginTop: 10}}>
          <Text style={{color: '#000', fontSize: 22, fontWeight: '600'}}>
            {props.name}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Ionicons name="star-sharp" size={25} color={'yellow'} />
            </View>
            <Text style={{color: 'black'}}>{props.rating}</Text>
          </View>
        </View>
        <View>
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: 'center',
            }}
            source={{uri: props.image}}
          />
        </View>
      </View>

      <View>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginLeft: 5, paddingBottom: 10}}>
            <Ionicons name="navigate" size={18} color="#000" />
          </View>
          <View style={{marginLeft: 10}}>
            <Text style={{color: 'grey'}}>{props.address}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginLeft: 5}}>
            <Ionicons name="time-outline" color="#000" size={22} />
          </View>
          <View style={{marginLeft: 10}}>
            <Text style={{color: 'grey'}}>{props.time}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookingHistoryCard;
