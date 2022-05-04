import React from 'react';
import {View, TouchableOpacity, Text, FlatList} from 'react-native';
import BookingHistoryCard from '../../Components/BookingHistoryCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import {getAppointments} from '../../Utilities/FirebaseUtils';
const BookingHistory = props => {
  const [appointments, setAppointments] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(false);
  React.useEffect(() => {
    getAllappointments();
  }, []);

  const getAllappointments = () => {
    setIsloading(true);
    let myApp = [];
    getAppointments().then(ele => {
      ele.docs.forEach(ele => {
        const appobj = {
          ...ele.data(),
          id: ele.id,
        };
        myApp.push(appobj);
      });
      setAppointments(myApp);
      setIsloading(false);
    });
  };

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
        <FlatList
          data={appointments}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('BookingDetails', {id: item.id});
                }}>
                <BookingHistoryCard
                  name={item.drName}
                  address={`${item.speciality} , ${item.city}`}
                  time={`Appointment Time : ${item.time}`}
                  image={item.image}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default BookingHistory;
