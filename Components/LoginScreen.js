import React from 'react';
import { Button, View, Text, SafeAreaView, Keyboard, Alert } from 'react-native'
import { getStoreData, storeData } from "./storage/taskAsyncStorage"
import Input from "./input"
import { validate } from '../../util/validation';

const LoginScreen = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({ email: '', password: '' });
  const [errors, setErrors] = React.useState({});


  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = async () => {

    let userData = await getStoreData('userData')
    //alert(JSON.stringify(userData))
    if (userData) {
      if (
        inputs.email == userData.email &&
        inputs.password == userData.password
      ) {
        navigation.navigate('HomeScreen');
        storeData(
          'userData',
          JSON.stringify({ ...userData, loggedIn: true }),

        );
      } else {
        Alert.alert('Error', 'Invalid Details');
      }
    } else {
      Alert.alert('Error', 'User does not exist');
    }

  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>

      <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold' }}>
          Log In
        </Text>
        <Text style={{ color: 'grey', fontSize: 18, marginVertical: 10 }}>
          Enter Your Details to Login
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            error={errors.email}
          />
          <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />


          <Button title="Log In" onPress={validate} />
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text
              onPress={() => navigation.navigate('Registration')}
              style={{
                color: 'black',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 16,

              }}>
              Register
            </Text>


            <Text
              onPress={() => navigation.navigate('OtpInterface')}
              style={{
                color: 'black',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 16,
                marginLeft: '40%'
              }}>
              Forget password
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
