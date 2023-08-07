import { storeData } from "../storage/taskAsyncStorage";
import { Keyboard } from "react-native";


  /////////Validation for input///////////////


  
export function validate(handleError, inputs, navigation) {

  Keyboard.dismiss();

  let isValid = true;

  if (!inputs.email) {

    handleError('Please input email', 'email');

    isValid = false;

  }

   else if (!inputs.email.match()) {

    handleError('Please input a valid email', 'email');

     isValid = false;

   }



   if (!inputs.fullname) {

    handleError('Please input fullname', 'fullname')

    isValid = false;

   }



   if (!inputs.phone || !inputs.phone.match(/\d{10}/)) {

     handleError('Please input phone number', 'phone');

     isValid = false;

   }



   if (!inputs.password) {

     handleError('Please input password', 'password')

     isValid = false;



   }

   else if (inputs.password.length < 5) {

     handleError('Min password length of 5', 'password')

    isValid = false;

  }


  if (isValid) {
   
     alert(JSON.stringify(inputs))
     storeData('userData', inputs)
    navigation.navigate('Login')

  }



}