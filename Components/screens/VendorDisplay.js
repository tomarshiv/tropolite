import React from "react";
import { useState,useEffect } from "react";
import { View,Text } from "react-native";
import { ReadAll } from "../sqlite/sql";

///////////////Display page of vendor////////////////////
 export default function VendorDisplay(){
  const[data,setData]=useState([])

useEffect(function(){
    ReadAll(setData)

},[])
console.log('bbhhhh',data)

let getdata=data?.map((item,index)=>{
    return(
        <View key={index}>
            <Text>{item.remark}</Text>
        </View>
    )
 

})
return(
    <>
    {getdata}
    </>
)

 }