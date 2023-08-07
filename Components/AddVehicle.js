import React from "react";
import { Text,SafeAreaView,View,Button } from "react-native";
import VehicleValidation from "./util/VehicleValidation";
import Input from "./input";
import  {Dropdown,Dropdown1}  from "./Dropdown";
import { getStoreData ,storeData } from "./storage/taskAsyncStorage";



const AddVehicle=()=>{
    const [errors,setErrors]=React.useState({});
    const[vehicle,setVehicle]= React.useState({
      VehicleId:'',
      VehicleCompany:'',
      VehicleModel:'',
      Offer:'',
      Price:'',
    
 })
 const[country,setCountry]=React.useState('')
  const[countries,setCountries]=React.useState('')

 const handleOnchange = (text, input) => {
    setVehicle(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
return(
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      
        <View style={{paddingTop: 50, paddingHorizontal: 30}}>
          <Text style={{color: 'black', fontSize: 25, fontWeight: 'bold'}}>
            Add Vehicle
          </Text>

      <Input
         keyboardType="numeric"
         onChangeText={text => handleOnchange(text, 'VehicleId')}
         onFocus={() => handleError(null, 'VehicleId')}
         iconName="phone-outline"
         label=" Vehicle id"
         placeholder="Enter your Vehicle Id"
         error={errors.VehicleId}
       />

       <Dropdown
       onFocus={() => handleError(null, 'VehicleCompany')}
       label='Vehicle Company' 
       setVehicle={setVehicle}
       countries={countries}
       setCountries={setCountries}
       error={errors.VehicleCompany}/>


<Dropdown1 
          onFocus={() => handleError(null, 'VehicleModel')}
          label='Model' 
          vehicle={vehicle}
          setVehicle={setVehicle}
          country={country}
          setCountry={setCountry}
  error={errors.VehicleModel}

 
       
       />
        
       
<Input
         keyboardType="numeric"
        onChangeText={text => handleOnchange(text, 'Price')}
         onFocus={() => handleError(null, 'Price')}
         iconName="phone-outline"
         label=" Price"
         placeholder="Price"
         error={errors.Price}
       />  
       
<Input
         keyboardType="numeric"
         onChangeText={text => handleOnchange(text, 'Offer')}
         onFocus={() => handleError(null, 'Offer')}
         iconName="phone-outline"
         label=" Offer"
         placeholder="Offer"
         error={errors.Offer}
       /> 
       
       
       <Button title="submit"  onPress={()=>VehicleValidation(handleError,vehicle,countries,country)} />
       



       </View>
      </SafeAreaView>



)
}

export default AddVehicle;