import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import DateDetails from '../../Components/DateDetails';
import TimeDetails from '../../Components/TimeDetails';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppButton from '../../Components/AppButton';
import {Rating} from 'react-native-ratings';

const ConfirmAppointment = props => {
  const [drSlots, setDrSlots] = React.useState({});
  const [selectedDate, setSelectedDate] = React.useState('');
  const [selectedTime, setSelectedTime] = React.useState('');
  React.useEffect(() => {
    setDrSlots(props?.route?.params?.item);
  }, []);
  console.log(drSlots?.morningTime, 'SL');

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{flexGrow: 1, backgroundColor: '#fff'}}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#49FF00',
            margin: 10,
            paddingBottom: 10,
            borderRadius: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}
            style={{marginHorizontal: 10, marginVertical: 10}}>
            <Ionicons name="arrow-back" size={40} color="#fff" />
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginHorizontal: 10}}>
              <Image
                style={{height: 120, width: 120}}
                source={{uri: drSlots?.displayImage}}
              />
            </View>
            <View style={{marginTop: 20}}>
              <View>
                <Text style={{fontSize: 22, color: '#fff'}}>
                  {drSlots?.name}
                </Text>
              </View>
              <View style={{marginHorizontal: 10}}>
                <Text style={{color: 'black', fontSize: 18}}>
                  {drSlots?.specialist}
                </Text>
              </View>
              <View style={{marginHorizontal: 10, marginVertical: 10}}>
                <Rating
                  ratingColor="yellow"
                  ratingCount={5}
                  starStyle={{paddingHorizontal: 10}}
                  readonly
                />
              </View>
            </View>
          </View>
          <View></View>
        </View>
        <View style={{flex: 2}}>
          <View style={{marginHorizontal: 30}}>
            <Text style={{color: 'black', fontSize: 22}}>March 2022</Text>
          </View>
          <View>
            <DateDetails
              setSelectedDate={val => {
                setSelectedDate(val);
              }}
              selectedDate={selectedDate}
              dates={drSlots?.dates}
            />
          </View>
          <View>
            <TimeDetails
              selectedTime={selectedTime}
              setSelectedTime={val => {
                setSelectedTime(val);
              }}
              morningTime={drSlots?.morningTime}
              eveningTime={drSlots?.eveningTime}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <AppButton>Confirm Appointment</AppButton>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ConfirmAppointment;
