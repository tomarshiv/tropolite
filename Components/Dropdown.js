import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';
import { Image } from 'react-native';
import { Icon } from "react-native-vector-icons/MaterialCommunityIcons";

const local_data = [

    {
        value: '1',
        lable: 'select Comapny',
        icon: () => { }


    },
    {
        value: 'Hyundai',
        lable: 'Hyundai',


    },
    {
        value: 'Suzuki',
        lable: 'Suzuki',

    }




];

const Dropdown = ({ label, error, countries, setVehicle, onFocus = () => { } }) => {

    return (
        <View>
            <View style={{}} >
                <Text>{label}</Text>
            </View>

            <SelectCountry

                style={styles.dropdown}
                selectedTextStyle={styles.selectedTextStyle}
                placeholderStyle={styles.placeholderStyle}
                imageStyle={styles.imageStyle}
                iconStyle={styles.iconStyle}
                maxHeight={200}
                value={countries}
                data={local_data}
                valueField="value"
                labelField="lable"
                imageField="image"
                placeholder='Select type'
                searchPlaceholder="Search..."



                onChange={e => {
                    onFocus(); setVehicle(prev => ({ ...prev, ['VehicleCompany']: e.value }));



                }}
            />
            {error && (
                <Text style={{ marginTop: 7, color: 'red', fontSize: 12 }}>
                    {error}
                </Text>
            )}
        </View>
    );
};




const local_datas = [

    {
        value: 'Electronics',
        label: 'select Model',


    },


    {
        value: 'Creta',
        lable: 'Creta',

    },
    {
        value: 'Swift',
        lable: 'Swift',

    },
];



const Dropdown1 = ({ label, error, country, setVehicle, onFocus = () => { } }) => {



    return (
        <View>

            <View style={{}} >
                <Text>{label}</Text>
            </View>


            <SelectCountry
                style={styles.dropdown}
                selectedTextStyle={styles.selectedTextStyle}
                placeholderStyle={styles.placeholderStyle}
                imageStyle={styles.imageStyle}
                iconStyle={styles.iconStyle}
                maxHeight={200}
                value={country}
                data={local_datas}
                valueField="value"
                labelField="lable"
                imageField="image"
                placeholder='Select Status'

                searchPlaceholder="Search..."
                onChange={e => {
                    onFocus(); setVehicle(prev => ({ ...prev, ['VehicleModel']: e.value }));
                }}

            />


            {error && (
                <Text style={{ marginTop: 7, color: 'red', fontSize: 12 }}>
                    {error}
                </Text>
            )}
        </View>

    );
};




export { Dropdown, Dropdown1 };

const styles = StyleSheet.create({
    dropdown: {
        margin: 8,
        height: 50,
        width: 320,
        backgroundColor: 'grey',
        borderRadius: 5,
        paddingHorizontal: 3,
        marginLeft: 1,
        color: 'grey',
    },


    label: {
        marginVertical: 5,
        fontSize: 14,
        color: 'grey',

    },



    imageStyle: {
        width: 24,
        height: 24,
        borderRadius: 12,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
        marginLeft: 8,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
});

