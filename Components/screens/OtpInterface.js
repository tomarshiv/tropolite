import React from "react";
//import COLORS from "../../assets/colors";
import { Text,SafeAreaView,View,Button, Alert } from "react-native";
import Input from "../input";
import { validate } from '../util/validation';
import { storeData,getStoreData } from "../storage/taskAsyncStorage";

const OtpInterface= ({navigation}) => {
  const [btnStatus, setBtnStatus] = React.useState(false);
  const [otpStatus, setOtpStatus] = React.useState(false);
  const [btnMsg, setBtnMsg] = React.useState('Get an OTP');
  const [mobile,setMobile]=React.useState('')
  var [otp,setOtp]=React.useState('')
  var [inputOtp,setInputOtp]=React.useState('')

const ss=async()=>{
  let userData = await getStoreData('userData')
  storeData('userData',
  {...userData,password:inputs.Repassword},
  
  )
  alert('sucess')



}

  const password=()=>{
    if(inputs.NewPassword==inputs.Repassword)
   {
     alert('success')
   } 
  }


 
  const verifyOtp=()=>{
   
    if(inputs.otp==otp)
   {
      {setOtpStatus(true)}
      alert('matched')
      
   }

    else
    {
      alert('Not Matched')
    }
  

  }


    const getOtp=()=>{
    if(btnMsg=="Change Mobile")
    
    { 
      setBtnStatus(false)
      setBtnMsg("Get an OTP")
      setMobile('')}
    else{
     var otp=parseInt(Math.random()*8999)+1000
     setOtp(otp)
     alert(otp)
     setBtnStatus(true)
     setBtnMsg('Change Mobile')}
  
  
  
   }
          const [errors,setErrors]=React.useState({});
          const[inputs,setInputs]= React.useState({
            phone:'',
            otp:'',
            NewPassword:'',
            Repassword:'',
          
       })
      // alert(JSON.stringify(inputs))
          const handleOnchange = (text,input) =>{
              setInputs(prevState => ({...prevState, [input]: text}))
          }
          
          const handleError = (error,input) => {
              setErrors(prevState => ({...prevState, [input]:error}))
          }


    

    return(
        <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      
        <View style={{paddingTop: 50, paddingHorizontal: 30,marginTop:30}}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
            Forget Password
          </Text>



          <Input
         keyboardType="numeric"
         onChangeText={text => handleOnchange(text, 'phone')}
         onFocus={() => handleError(null, 'phone')}
         iconName="phone-outline"
         label="Phone Number"
         placeholder="Enter your phone no"
         error={errors.phone}/>

       <Button title="Generate Otp" onPress={()=>getOtp()}>{btnMsg}</Button>
     
        
        
        
    
     {btnStatus ?     
           <Input
           keyboardType="numeric"
           onChangeText={text => handleOnchange(text, 'otp')}
           onFocus={() => handleError(null, 'otp')}
            iconName="email-outline"
            label="OTP"
            placeholder="Enter Otp"
            
          />:<></>}
 {btnStatus ? <Button title='Verify' onPress={()=>verifyOtp()}></Button>:<></>}

        
 {otpStatus?  <Input
         onChangeText={text => handleOnchange(text, 'NewPassword')}
         onFocus={() => handleError(null, 'NewPassword')}
         iconName="lock-outline"
         label=" New Password"
         placeholder="Enter your  New password"
         error={errors.NewPassword}
         password
       />:<></>}



{otpStatus?<Input
         onChangeText={text => handleOnchange(text, 'Repassword')}
     onFocus={() => handleError(null, 'Repassword')}
         iconName="lock-outline"
         label=" Re-Enter Password"
         placeholder="ReEnter  password"
         error={errors.Repassword}
         password
         />:<></>}

{otpStatus?<Button title="Change Password" onPress={()=>ss(password,handleError,inputs,navigation)} />:<></>}



</View>

    </SafeAreaView>)
        

}
    
export default OtpInterface;