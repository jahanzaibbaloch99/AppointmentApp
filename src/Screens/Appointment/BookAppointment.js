import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
// import AppointmentDetails from '../../Components/AppointmentDetails';
import AppointmentCard from '../../Components/AppointmentCard';
const BookAppointment = props => {
  const [drData, setDrData] = React.useState([]);
  React.useEffect(() => {
    setDrData(props.route.params.data);
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.5, backgroundColor: '#B2EA70'}}>
        <View
          style={{flexDirection: 'row', marginTop: 60, marginHorizontal: 10}}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}
            style={{justifyContent: 'center'}}>
            <Feather name="chevron-left" size={22} color="#fff" />
          </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: '#fff',
                paddingLeft: 85,
              }}>
              Book Your Appointment
            </Text>
          </View>
        </View>
      </View>
      <View style={{flex: 3, backgroundColor: '#CCD1E4'}}>
        <View>
          <FlatList
            data={drData}
            renderItem={data => {
              const {item} = data;
              return (
                <AppointmentCard item={item} navigation={props.navigation} />
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default BookAppointment;
