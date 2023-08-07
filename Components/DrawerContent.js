// import { DrawerContent } from "@react-navigation/drawer";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer'
import MI from 'react-native-vector-icons/MaterialIcons'
import { getStoreData, storeData } from "./storage/taskAsyncStorage";




const DrawerContent = (props) => {
    const [userDetails, setUserDetails] = React.useState({});

    React.useEffect(() => {

        getUserData();

    }, []);



    const getUserData = async () => {

        const userData = await getStoreData('userData');



        if (userData) {

            setUserDetails(userData);

        }

    };

    const logout = async () => {



        storeData(

            'userData',

            { ...userDetails, loggedIn: false });

        props.navigation.navigate('Login');

    };
    return (
        <DrawerContentScrollView {...props}>
            <View style={{ flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 100, height: 100, borderRadius: 50 }} source={require('./images/alice.jpg')} />
                <Text style={{ padding: 5, fontSize: 16, fontWeight: 'bold', letterSpacing: 1 }}> Alice</Text>
                <Text style={{ padding: 3, fontSize: 14, letterSpacing: 1 }}> alisingh@gamil.com</Text>
            </View>
            <View>




                <TouchableOpacity onPress={() => props.navigation.navigate('AddVehicle')}>
                    <View style={{ marginLeft: 10, padding: 5, display: 'flex', flexDirection: 'row' }}>
                        <MI name="shopping-cart" size={25} />
                        <Text style={{ padding: 5 }}>Add Vehicle</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('DisplayVehicle')}>
                    <View style={{ marginLeft: 10, padding: 5, display: 'flex', flexDirection: 'row' }}>
                        <MI name="list-alt" size={25} />
                        <Text style={{ padding: 5 }}>DisplayVehicle</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Product')}>
                    <View style={{ marginLeft: 10, padding: 5, display: 'flex', flexDirection: 'row' }}>
                        <MI name="shopping-cart" size={25} />
                        <Text style={{ padding: 5 }}>Products</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('Vendor')}>
                    <View style={{ marginLeft: 10, padding: 5, display: 'flex', flexDirection: 'row' }}>
                        <MI name="shopping-cart" size={25} />
                        <Text style={{ padding: 5 }}>Vendor</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('VendorDisplay')}>
                    <View style={{ marginLeft: 10, padding: 5, display: 'flex', flexDirection: 'row' }}>
                        <MI name="shopping-cart" size={25} />
                        <Text style={{ padding: 5 }}>VendorDisplay</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => logout()}>
                    <View style={{ marginLeft: 10, padding: 5, display: 'flex', flexDirection: 'row' }}>
                        <MI name="login" size={25} />
                        <Text style={{ padding: 5 }}>Logout</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </DrawerContentScrollView>


    )

}
export default DrawerContent; 