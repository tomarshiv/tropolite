import React from 'react';
import Input from '../input';
import {View,Button,text} from 'react-native';
import { validate } from '../util/validation';


///////////////Registration page////////////////////

const Registration = ({navigation}) => {
    const[inputs,setInputs]= React.useState({
     email:'',
     fullname:'',
     phone:'',
     password:'',
})



return(
    <View style={{marginVertical:20,padding:20}}>
     <Input
          onChangeText={text => handleOnchange(text, 'email')}
          onFocus={() => handleError(null, 'email')}
          iconName="email-outline"
          label="Email"
          placeholder="Enter your email address"
          error={errors.email}
        />
        <Input
          onChangeText={text => handleOnchange(text, 'fullname')}
          onFocus={() => handleError(null, 'fullname')}
          iconName="account-outline"
          label="Full Name"
          placeholder="Enter your full name"
          error={errors.fullname}
        />
        
        <Input
         keyboardType="numeric"
         onChangeText={text => handleOnchange(text, 'phone')}
         onFocus={() => handleError(null, 'phone')}
         iconName="phone-outline"
         label="Phone Number"
         placeholder="Enter your phone no"
         error={errors.phone}
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
       <Button title="Register" onPress={()=>validate(handleError,inputs,navigation)} />
     </View>
 );
}
export default Registration