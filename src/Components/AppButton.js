import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Image, View} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

const AppButton = ({
  textStyle,
  onPress,
  children,
  containerStyles,
  disabled,
  iconOnly,
  reverted,
  gradientColor,
  touchStyle,
  icon,
}) => (
  <TouchableOpacity
    activeOpacity={0.6}
    disabled={disabled}
    onPress={onPress}
    style={[touchStyle]}>
    <View
      style={[
        styles.appButtonContainer,
        {
          opacity: disabled ? 0.7 : 1,
          backgroundColor: '#4D96FF',
          borderRadius: 25,
        },
        containerStyles,
      ]}>
      {iconOnly ? (
        <Image
          source={iconOnly}
          style={{...styles.appButtonText, height: 20, width: 20}}
        />
      ) : icon ? (
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={[styles.appButtonText, textStyle]}>{children}</Text>
          <View style={{marginHorizontal: 10}}>
            <Icon name={icon} size={25} color="white" />
          </View>
        </View>
      ) : (
        <Text style={[styles.appButtonText, textStyle]}>{children}</Text>
      )}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  appButtonText: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center',
  },
});

export default AppButton;
