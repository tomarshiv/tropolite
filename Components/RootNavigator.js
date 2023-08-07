import React from "react";
import { View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import Registration from './screens/Registration'
import OtpInterface from "./screens/OtpInterface"
import { createStackNavigator } from "@react-navigation/stack"
import DrawerContent from "./DrawerContent";
import DisplayVehicle from "./screens/DisplayVehicle";
import AddVehicle from "./AddVehicle";
import Product from "./Product";
import Vendor from "./screens/Vendor";
import VendorDisplay from "./screens/VendorDisplay";
import { getStoreData, storeData } from "./storage/taskAsyncStorage";

export default function RootNavigator(props) {

  var StackNav = createStackNavigator()
  const [initialRouteName, setInitialRouteName] = React.useState('')

  React.useEffect(function () {

    authUser()

  }, [])

  const authUser = async () => {

    let userData = await getStoreData('userData');

    

    if (userData) {

      if (userData.loggedIn) {

        setInitialRouteName('HomeScreen')

      }

      else {

        setInitialRouteName('LoginScreen')

      }

    }

    else {

      setInitialRouteName('Registration')

    }

  }



  function Component() {
    return (
      <StackNav.Navigator  initialRouteName="Homescreen">
        <StackNav.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <StackNav.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <StackNav.Screen name="Registration" component={Registration} />

        <StackNav.Screen name="OtpInterface" component={OtpInterface} />
        <StackNav.Screen name="AddVehicle" component={AddVehicle} />
        <StackNav.Screen name="DisplayVehicle" component={DisplayVehicle} />
        <StackNav.Screen name="Product" component={Product} />
        <StackNav.Screen name="Vendor" component={Vendor} />
        <StackNav.Screen name="VendorDisplay" component={VendorDisplay} />
      </StackNav.Navigator>
    )
  }


  const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator initialRouteName="HomeScreen" drawerContent={(props) => <DrawerContent{...props} />}>
      <Drawer.Screen
        initialRoutename="HomeScreen"
        name="Home"
        component={Component}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  )



}
