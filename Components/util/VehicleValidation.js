import { storeData, getStoreData } from "../storage/taskAsyncStorage";
import { Keyboard } from "react-native";



/////////Validation for Vechicle Page///////////////

export default function VehicleValidation(handleError, vehicle, countries, country) {
  Keyboard.dismiss();
  let isValid = true;
  if (!vehicle.VehicleId) {
    handleError('Please input Vehicle id', 'VehicleId');
    isValid = false;

  }


  if (!vehicle.VehicleCompany) {

    handleError('Please input VehicleCompany', 'VehicleCompany')

    isValid = false;

  }





  if (!vehicle.VehicleModel) {

    handleError('Please input vehicleModel', 'VehicleModel')

    isValid = false;

  }





  if (!vehicle.Price) {

    handleError('Please input price', 'Price')

    isValid = false;



  }
  if (!vehicle.Offer) {

    handleError('Please input Offer', 'Offer')

    isValid = false;



  }



  if (isValid) {

    const temp = async () => {

      try {

        const getVehicleData = await getStoreData('vData');

        console.log("data is :", getVehicleData);

        if (!getVehicleData) {

          await storeData('vData', [vehicle])

        } else {

          getVehicleData.push(vehicle)

          await storeData('vData', getVehicleData)

        }

      } 
      catch (err) {

   

      }
    alert('Record Submitted....')
    }

    temp()

  }

}