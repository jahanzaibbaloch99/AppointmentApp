import React from 'react';
import {View, Text, Image} from 'react-native';
import AppButton from './AppButton';

const AppointmentCard = props => {
  return (
    <View>
      <View
        style={{
          borderColor: '#83BD75',
          borderWidth: 2,
          backgroundColor: '#fff',
          marginHorizontal: 10,
          borderRadius: 10,
          marginVertical: 10,
          paddingHorizontal: 10,
          paddingTop: 20,
          paddingBottom: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              style={{width: 100, height: 100, borderRadius: 10}}
              source={props.displayImage}
            />
          </View>
          <View style={{flex: 1, paddingHorizontal: 10}}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 18,
                color: '#000',
              }}>
              {props.name} {'\n'} {props.specialist}
            </Text>
          </View>
          <View style={{paddingTop: 10}}>
            <Text style={{color: '#000', fontSize: 14}}>{props.review}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{width: 80, marginVertical: 10}}>
            <Text style={{color: '#000', textAlign:'center'}}>{props.experience}</Text>
          </View>
          <View>
            <Text style={{color: '#000'}}>{props.fee}</Text>
          </View>
        </View>
        <View style={{flex: 1}}>
            <AppButton name={props.booking}/>
        </View>
      </View>
    </View>
  );
};

export default AppointmentCard;
