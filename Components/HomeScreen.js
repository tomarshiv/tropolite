import React from "react";
import { View, Text } from "react-native";

import MI from 'react-native-vector-icons/MaterialIcons'

const HomeScreen = (props) => {

    return (
        <View>
            <MI name='menu' size={30} onPress={() => props.navigation.openDrawer()} />
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Text> HomeScreen</Text>
            </View>
        </View>
    )

}
export default HomeScreen; 