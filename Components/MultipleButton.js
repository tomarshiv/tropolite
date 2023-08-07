import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;




const MultipleButton = ({
text,
  onPress,
  type = 'filled',
  //color= '#3f51b5',
  bordered = false,
  size = 'small',
}) => {
  var [btn1, setBtn1] = useState('#000')
  var [btn2, setBtn2] = useState('#fff')

  const button1 = () => {
    setBtn1('#000')
    setBtn2('#fff')
  }

  const button2 = () => {
    setBtn1('#fff')
    setBtn2('#000')
  }


  const large = width / 0.1;
  const small = width / 2.5;
  const btnSize = size === 'large' ? large : small;
  //const btnBgColor = type === 'filled' ? color  : 'transparent';
  const btnTextColor = type === 'filled' ? 'red' : '#6371c2';
  const btnBorderRadius = bordered ? 30 : 5;

  const containerCommonStyle = {
    backgroundColor: btn1,
    paddingVertical: 8,
    width: btnSize,
    borderRadius: btnBorderRadius,
  };
  const containerCommonStyle1 = {
    backgroundColor: btn2,
    paddingVertical: 8,
    width: btnSize,
    borderRadius: btnBorderRadius,
  };

  const textCommonStyle = {
    color: btnTextColor,
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: 'Quicksand-Bold',
  };

  const border = type === 'outlined' && {
    borderColor: '#e7e7e7',
    borderWidth: 2,
  };




  return (
    <>
      <View style={{
       flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between',
        width: width * 0.82,
        height: '100%',
        flex: 1

      }}>

        <TouchableOpacity onPress={() => button1()} activeOpacity={0.7}>
          <View style={[containerCommonStyle, border]}>
            <Text style={[textCommonStyle]}> yes </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => button2()} activeOpacity={0.7}>
          <View style={[containerCommonStyle1, border]}>
            <Text style={[textCommonStyle]}> no </Text>
          </View>

        </TouchableOpacity>


      </View>
    </>

  );
};

export default MultipleButton;