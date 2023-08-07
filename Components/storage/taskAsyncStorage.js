import AsyncStorage from "@react-native-community/async-storage";


  /////StoreData
  
export const storeData = async(key, body) => {
try {
console.log("stored data in Async Storage => ",body)
await AsyncStorage.setItem(key, JSON.stringify(body))
} catch (e) {
console.log('AsyncStorage Error in' + key + "&Data" + body)
}
}

export const getStoreData = async(key) => {
try {
 var data = await AsyncStorage.getItem(key)
 console.log('AsyncStorage GetData Error in',data)
return (JSON.parse(data))
} catch (e) {
console.log('AsyncStorage Error in' + key + "&Data" + body)
}
}

export const removeStoreData = (key) => {
try {
 AsyncStorage.removeItem(key)
 return (JSON.parse(data))
} catch (e) {
console.log('Error for' + key, e)
}

}

