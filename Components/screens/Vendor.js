import React, { useEffect ,useState} from 'react';
import Input from '../input'
import {View,Button,text} from 'react-native';
import {validate} from './util/validation';
import { createTable,insertRecord, ReadAll,deleteTableRows} from '../sqlite/sql';
import {postData1}from '../storage/Services/FetchNodeServices'
import { ResultType } from '@remix-run/router/dist/utils';
import NetInfo from "@react-native-community/netinfo";
export default function Vendor(){
const[inputs,setInputs]= React.useState({
       
        Vendorid:'',
        Vendorname:'',
        demands:'',
        demanddate:'',
        remark:'',
  
      })
   
  
      const[getDatas,setDatas]=useState([])
  useEffect(function(){

    ReadAll(setDatas)
  },[])

  console.log('data',getDatas)


  const vendorData=()=>{
    getDatas.map((itm)=>{
      {itm}
      console.log('itemm',itm)
      if(netInfo==true){
        postData1('adddata/add_vendor',itm)
      }
    })
  }
useEffect(function(){
  vendorData()
},[getDatas])


//////////delete/////////////////

useEffect(()=>{
  if(netInfo==true){
    setTimeout(()=>{
      deleteTableRows()
    },2000)
  }
  vendorData()
},[getDatas])

//////////delete/////////////////




      const [netInfo, setNetInfo] = useState();
  
      useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) =>
         { setNetInfo(state.isConnected) }); 
    
         return () => {
         unsubscribe();
        };
      }, []);
    




   
   const handleSubmit=async()=>{
   var body={vendor_id:inputs.Vendorid,vendor_name:inputs.Vendorname,demand:inputs.demands,demand_date:inputs.demanddate,remark:inputs.remark}
   
   if(netInfo==false){
   insertRecord(body)
   
   alert('submit in sqlite')
  }
   else(netInfo==true)
   {
    var response=await postData1('adddata/add_vendor',body)
     if(response.status){
    alert('submit in Mysql')
   }

  }
   
}





  
 
  
   const handleOnchange = (text,input) =>{
    setInputs(prevState => ({...prevState, [input]: text}))
}
useEffect(function(){
  createTable()
 },[])
 
   const [errors,setErrors]=React.useState({})

 const handleError = (error,input) => {
     setErrors(prevState => ({...prevState, [input]:text}))
}


    return(
          <View style={{marginVertical:20,padding:20}}>
    

      <Input
          onChangeText={text => handleOnchange(text, 'Vendorid')}
          onFocus={() => handleError(null,'vendorid')}
          iconName="email-outline"
          label="VendorId"
          placeholder="Enter your Vendor Id"
          error={errors. Vendorid}
        />

       <Input
          onChangeText={text => handleOnchange(text, 'Vendorname')}
          onFocus={() => handleError(null, 'vendorname')}
          iconName="email-outline"
          label="VendorName"
          placeholder="Enter your Vendor Name"
          error={errors. Vendorname}
        />

      <Input
          onChangeText={text => handleOnchange(text, 'demands')}
         onFocus={() => handleError(null, 'demands')}
          iconName="email-outline"
          label="Demands"
          placeholder="Enter your demands"
          error={errors. demands}
        />

       <Input
          onChangeText={text => handleOnchange(text, 'demanddate')}
          onFocus={() => handleError(null, 'demanddate')}
          iconName="email-outline"
          label="Demand Date"
          placeholder="Enter your demands"
         error={errors. demanddate}
        />

      <Input
          onChangeText={text => handleOnchange(text, 'remark')}
          onFocus={() => handleError(null, 'remark')}
          iconName="email-outline"
          label="Remark"
          placeholder="Enter your remark"
          error={errors. remark}
        />


<Button title="Submit" onPress={()=>handleSubmit()} />
        </View>
    )

}