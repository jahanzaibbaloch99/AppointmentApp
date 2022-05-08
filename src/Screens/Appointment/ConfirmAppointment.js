import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import DateDetails from '../../Components/DateDetails';
import TimeDetails from '../../Components/TimeDetails';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppButton from '../../Components/AppButton';
import {Rating} from 'react-native-ratings';
import DrData from '../../assets/data/DrData';
import {confirmBookings} from '../../Utilities/FirebaseUtils';
import ModalLoader from '../../Components/ModalLoader';
import {useSelector, useDispatch} from 'react-redux';

import {showMessage} from 'react-native-flash-message';
import {setAppointments} from '../../Store/Actions/App';
const ConfirmAppointment = props => {
  const dispatch = useDispatch();
  const [drSlots, setDrSlots] = React.useState({});
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedTime, setSelectedTime] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const state = useSelector(ele => ele.AccountReducer.user);
  const [dates, setDates] = React.useState([
    {
      id: 1,
      day: 'Mon',
      date: new Date(2022, 2, 3),
    },
    {
      id: 2,
      day: 'Tues',
      date: new Date(2022, 2, 4),
    },
    {
      id: 3,
      day: 'Wed',
      date: new Date(2022, 2, 5),
    },
    {
      id: 4,
      day: 'Thu',
      date: new Date(2022, 2, 6),
    },
    {
      id: 5,
      day: 'Fri',
      date: new Date(2022, 2, 7),
    },
  ]);
  React.useEffect(() => {
    setDrSlots(props?.route?.params?.item);
  }, []);
  const onConfirmAppointment = () => {
    const appointMent = {
      userId: state.id,
      date: selectedDate,
      time: selectedTime,
      drName: drSlots.name,
      speciality: drSlots.specialist,
      fee: drSlots.fee,
      location: drSlots.location,
      city: drSlots.city,
      image: drSlots.displayImage,
      rating: drSlots.rating,
      // rating: drSlots.rating,
    };
    setIsLoading(true);
    confirmBookings(appointMent)
      .then(ele => {
        const persistData = {
          ...appointMent,
          id: ele.id,
        };
        dispatch(setAppointments(persistData));
        props.navigation.navigate('BookingDetails', {id: ele.id});
        showMessage({
          message: 'Success',
          description: 'Appointment has been Successfully Booked',
          type: 'success',
        });
        setIsLoading(false);
      })
      .catch(e => {
        showMessage({
          message: 'Error',
          description:
            'Something went wrong while Booking Appointment Please Try again Later',
          type: 'danger',
        });
        setIsLoading(false);
      });
  };
  const isDisabled = () => {
    if (selectedDate && selectedTime) {
      return false;
    }
    return true;
  };
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
          {isLoading && <ModalLoader />}
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
                style={{height: 120, width: 120, resizeMode: 'center'}}
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
                  ratingCount={drSlots?.rating}
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
              dates={dates}
            />
          </View>
          <View>
            <TimeDetails
              selectedTime={selectedTime}
              setSelectedTime={val => {
                setSelectedTime(val);
              }}
              morningTime={DrData[0]?.morningTime}
              eveningTime={DrData[0]?.eveningTime}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <AppButton onPress={onConfirmAppointment} disabled={isDisabled()}>
              Confirm Appointment
            </AppButton>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ConfirmAppointment;
