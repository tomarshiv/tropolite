import AsyncStorage from '@react-native-community/async-storage';

import React,{useEffect,useState} from 'react';

import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,ActivityIndicator } from 'react-native';

import SearchBar from '../SearchBar';

import { getStoreData } from '../storage/taskAsyncStorage';

// definition of the Item, which will be rendered in the FlatList




// the filter

const List = (props) => {

    const [fakeData, setFakeData] = useState();

    const [clicked, setClicked] = useState(false);

    const [searchPhrase, setSearchPhrase] = useState('');



    const Item = ({item}) => {

      console.log('itemssss',item);

      return(

      <View style={styles.item}>


         <Text style={styles.title}>{item.VehicleId}</Text>

         <Text style={styles.title}>{item.VehicleCompany}</Text>

         <Text style={styles.title}>{item.VehicleModel}</Text>

         <Text style={styles.title}>{item.Price}</Text>

         <Text style={styles.title}>{item.Offer}</Text>

       </View>

      )

   }


    const getStoreDataa=async()=>{

        const data=await getStoreData('vData')

        // var datta= JSON.parse(data)

        alert('dataaa',data)

        setFakeData(data)

     

     // console.log(JSON.parse(data))

       }

       useEffect(()=>{

        getStoreDataa();

        //AsyncStorage.removeItem('vData')

   

       },[])

  const renderItem = ({item }) => {

    console.log('ndnnd',item)

    // when no input, show all

   

    if (searchPhrase === "") {

      return <Item item={item} />;

    }

    // filter of the name

    if (item.VehicleId.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {

      return <Item item={item} />;

    }

}

       

  return (

    <SafeAreaView style={styles.list__container}>

      <View

        onStartShouldSetResponder={() => {

          setClicked(false);

        }}

      >

     

      <SearchBar

        searchPhrase={searchPhrase}

        setSearchPhrase={setSearchPhrase}

        clicked={clicked}

        setClicked={setClicked}

      />

      {!fakeData ? (

        <ActivityIndicator size="large" />

      ) : (

        <FlatList

          data={fakeData}

          renderItem={renderItem}

          searchPhrase={searchPhrase}

          setClicked={setClicked}

          keyExtractor={(item) => item.VehicleId}

        />

      )}

      </View>

     

    </SafeAreaView>

  );

};



export default List;



const styles = StyleSheet.create({

  list__container: {

    margin: 10,

    height: "95%",

    width: "100%",

 

   



  },

  item: {

    display:'flex',

    flexDirection:'row',

    justifyContent:'space-between',

    width:'95%',

    borderBottomWidth: 2,

    borderBottomColor: "grey"

  },

  title: {

    fontSize: 20,

    fontWeight: "bold",

    marginBottom: 5,

    fontStyle: "italic",

  },

});