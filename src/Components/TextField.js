import React from 'react';
import {Text, TextInput, StyleSheet, View, Platform} from 'react-native';
// import TextInputMask from 'react-native-text-input-mask';

const TextInputField = ({
  field: {name, onBlur, onChange, value},
  form: {errors, touched, setFieldTouched},
  isMasked,
  isPlaceHolder,
  title,
  inputStyle,
  isSecure,
  subTitle,
  isDisable,
  ...inputProps
}) => {
  const hasError = errors[name] && touched[name];

  return (
    <>
      <View style={{paddingHorizontal: 15}}>
        <View style={{margin: 5}}>
          {title && <Text>{title}</Text>}
          {subTitle && (
            <Text
              style={{
                fontFamily: Fonts.subHeading,
                color: Colors.secondary,
              }}>
              {subTitle}
            </Text>
          )}
        </View>

        <TextInput
          editable={!isDisable}
          secureTextEntry={isSecure}
          style={[styles.textInput, inputStyle, hasError && styles.errorInput]}
          value={value}
          placeholderTextColor={'grey'}
          onChangeText={text => {
            if (name === 'email') {
              let emailText = text.trim();
              onChange(name)(emailText);
            } else {
              onChange(name)(text);
            }
          }}
          onBlur={text => {
            setFieldTouched(name);
            onBlur(name);
          }}
          {...inputProps}
        />
        {/* )} */}
        {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#DDDDDD',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'android' ? 15 : 15,
    color: 'black',
  },
  errorText: {
    fontSize: 10,
    color: 'red',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  errorInput: {
    borderColor: 'red',
  },
});

export default TextInputField;
