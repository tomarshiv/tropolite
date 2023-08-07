import axios from "axios"
const ServerURL = "http://192.168.1.21:6000"
const getData = async (url) => {
  try {
    var response = await fetch(`${ServerURL}/${url}`)
    var result = await response.json()
    return (result)
  } catch (e) { return (null) }
}
const postData = async (url, body) => {

  try {
    const headers = { headers: { "content-type": "multipart/form-data", } }
    var response = await axios.post(`${ServerURL}/${url}`, body, headers) 
    var result = await response.data 
    return (result)
  } catch (error) { 
    //console.log(error)
  
     return (false) }
}
const postData1 = async (url, body) => {

  try {
    var response = await axios.post(`${ServerURL}/${url}`, body) 
    var result = await response.data 
    return (result)
  } catch (error) { console.log(error)
   
     return (false) }
}
export { ServerURL, postData, getData ,postData1}