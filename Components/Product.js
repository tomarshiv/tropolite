import React, { useEffect, useState, createRef } from "react";
import { View, Text, SafeAreaView, ScrollView, Image, Keyboard } from 'react-native';
import Button from "./Button";
import Input from "./input";
import MultipleButton from "./MultipleButton";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import FilePicker, { types } from 'react-native-document-picker'
import SignatureCapture from "react-native-signature-capture";
import { validate } from "./util/validation";
import { postData } from "./storage/Services/FetchNodeServices";

const Product = () => {
  const [dates, setdates] = useState('')
  const [name_of_product, setName_of_product] = useState('')
  const [batch_size, setBatch_size] = useState('')
  const [batch_number, setBatch_number] = useState('')
  const [premix_number, setPremix_number] = useState('')
  const [water_premix_kg, setWater_premix_Kg] = useState('')
  const [oil_premix_kg, setOil_premix_Kg] = useState('')
  const [batch_start_time, setBatch_start_time] = useState('')
  const [Pasterurization_time_from, setPasterurization_time_from] = useState('')
  const [Pasterurization_time_to, setPasterurization_time_to] = useState('')
  const [Pasterurization_temp, setPasterurization_temp] = useState('')
  const [magnetic_filtration_checked_at_time, setMagnetic_filtration_checked_at_time] = useState('')
  const [magnetic_filtration_magnet_present, setMagnetic_filtration_magnet_present] = useState('')
  const [magnetic_filtration_strainer_condition, setMagnetic_filtration_strainer_condition] = useState('')
  const [homogenization_start_time, setHomogenization_start_time] = useState('')
  const [homogenization_end_time, setHomogenization_end_time] = useState('')
  const [homogenization_pressure, setHomogenization_pressure] = useState('')
  const [ageing_tank_number, setAgeing_tank_number] = useState('')
  const [ageing_temp, setAgeing_temp] = useState('')
  const [chilling_temp, setChilling_temp] = useState('')
  const [filling_temp, setFilling_temp] = useState('')
  const [filling_start_time, setFilling_start_time] = useState('')
  const [filling_start_temp, setFilling_start_temp] = useState('')
  const [weight_of_box, setWeight_of_box] = useState('')
  const [top_sealing_heater_temp, setTop_sealing_heater_temp] = useState('')
  const [bottom_sealing_heater_temp, setBottom_sealing_heater_temp] = useState('')
  const [filling_end_time, setFilling_end_time] = useState('')
  const [filling_end_temp, setFilling_end_temp] = useState('')
  const [total_packing_time, setTotal_packing_time] = useState('')
  const [ccp_02_metal_detector_checked_at_time, setCcp_02_metal_detector_checked_at_time] = useState('')
  const [ccp_02_metal_detector_ss, setCcp_02_metal_detector_ss] = useState('')
  const [ccp_02_metal_detector_non_ferous, setCcp_02_metal_detector_non_ferous] = useState('')
  const [ccp_02_metal_detector_ferous, setCcp_02_metal_detector_ferous] = useState('')
  const [total_damage, setTotal_damage] = useState('')
  const [blast_freezing_blast_room_number, setBlast_freezing_blast_room_number] = useState('')
  const [blast_freezing_loading_start_time, setBlast_freezing_loading_start_time] = useState('')
  const [blast_freezing_loading_end_time, setBlast_freezing_loading_end_time] = useState('')
  const [blast_freezing_oprp_2_time, setBlast_freezing_oprp_2_time] = useState('')
  const [blast_freezing_oprp_2_product_core_temp, setBlast_freezing_oprp_2_product_core_temp] = useState('')
  const [blast_freezing_oprp_2_product_cartoon_packed, setBlast_freezing_cartoon_packed] = useState('')
  const [blast_freezing_total_kg, setBlast_freezing_total_kg] = useState('')
  const [blast_freezing_reference_sample, setBlast_freezing_reference_sample] = useState('')
  const [blast_freezing_total_recovery, setBlast_freezing_total_recovery] = useState('')
  const [blast_freezing_supervisor_sign, setBlast_freezing_supervisor_sign] = useState('')
  const [blast_freezing_remarks, setBlast_freezing_remarks] = useState('')

  const [currentDate, setCurrentDate] = useState('')
  const [errors, setErrors] = React.useState({});
  const [batchstarttime, setBatchstarttime] = useState('')
  const [pasturetime, setPasturetime] = useState('')
  const [pasturetimeto, setPasturetimeto] = useState('')
  const [magneticat, setMagneticat] = useState('')
  const [homogenizationstart, setHomogenizationstart] = useState('')
  const [homogenizationend, sethomogenizationend] = useState('')
  const [fillingstart, setFillingstart] = useState('')
  const [fillingend, setFillingend] = useState('')
  const [metalat, setMetalat] = useState('')
  const [blaststarttime, setBlaststarttime] = useState('')
  const [blastendtime, setBlastendtime] = useState('')





  var date = new Date().getDate()
  var month = new Date().getMonth() + 1
  var year = new Date().getFullYear()
  var hrs = new Date().getHours()
  var min = new Date().getMinutes()
  var sec = new Date().getSeconds()
  var cd = date + '/' + month + '/' + year
  var ct = hrs + '-' + min + '-' + sec


  const handleDate = () => {
    setCurrentDate(cd)
  }


  const handleBatchStartTime = () => {
    setBatchstarttime(ct)
  }


  const handlePastureTime = () => {
    setPasturetime(ct)
  }

  const handlePastureTimeTo = () => {
    setPasturetimeto(ct)
  }

  const handleMagneticatTime = () => {
    setMagneticat(ct)
  }

  const handleHomogenizationStartTime = () => {
    setHomogenizationstart(ct)
  }


  const handleHomogenizationEndTime = () => {
    sethomogenizationend(ct)
  }


  const handleFillingStartTime = () => {
    setFillingstart(ct)
  }

  const handleFillingEndTime = () => {
    setFillingend(ct)
  }

  const handleMetalatTime = () => {
    setMetalat(ct)
  }

  const handleBlastStartTime = () => {
    setBlaststarttime(ct)
  }

  const handleBlastEndTime = () => {
    setBlastendtime(ct)
  }



  const [inputs, setInputs] = useState({
    dates: new Date().toUTCString(),
    name_of_product: '',
    batch_number: '',
    batch_size: '',
    premix_number: '',
    water_premix_kg: '',
    oil_premix_kg: '',
    batch_start_time: new Date().toTimeString(),
    Pasterurization_time_from: new Date().toTimeString(),
    Pasterurization_time_to: new Date().toTimeString(),
    Pasterurization_temp: '',
    magnetic_filtration_checked_at_time: new Date().toTimeString(),
    magnetic_filtration_magnet_present: 'yes',
    magnetic_filtration_strainer_condition: 'ok',
    homogenization_start_time: new Date().toTimeString(),
    homogenization_end_time: new Date().toTimeString(),
    homogenization_pressure: '',
    ageing_tank_number: '',
    ageing_temp: '',
    chilling_temp: '',
    filling_temp: '',
    filling_start_time: new Date().toTimeString(),
    filling_start_temp: '',
    weight_of_box: '',
    top_sealing_heater_temp: '',
    bottom_sealing_heater_temp: '',
    filling_end_time: new Date().toTimeString(),
    filling_end_temp: '',
    total_packing_time: '',
    ccp_02_metal_detector_checked_at_time: new Date().toTimeString(),
    ccp_02_metal_detector_ss: '',
    ccp_02_metal_detector_non_ferous: '',
    ccp_02_metal_detector_ferous: '',
    total_damage: '',
    blast_freezing_blast_room_number: '',
    blast_freezing_loading_start_time: new Date().toTimeString(),
    blast_freezing_loading_end_time: new Date().toTimeString(),
    blast_freezing_oprp_2_time: '',
    blast_freezing_oprp_2_product_core_temp: '',
    blast_freezing_oprp_2_product_cartoon_packed: '',
    blast_freezing_total_kg: '',
    blast_freezing_reference_sample: '',
    blast_freezing_total_recovery: '',

    blast_freezing_remarks: ''
  })


  const handleOnchange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };


  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.name_of_product) {
      handleError('Please input name of product', 'name_of_product');
      isValid = false;
    }
    console.log("1", isValid)

    if (!inputs.batch_number) {
      handleError('Please input batch_number', 'batch_number');
      isValid = false;
    }
    console.log("2", isValid)



    if (!inputs.batch_size) {
      handleError('Please input batch size', 'batch_size');
      isValid = false;
    }
    console.log("3", isValid)



    if (!inputs.premix_number) {
      handleError('Please input premix number', 'premix_number');
      isValid = false;
    }
    console.log("4", isValid)


    if (!inputs.water_premix_kg) {
      handleError('Please input water premix kg', 'water_premix_kg');
      isValid = false;
    }
    console.log("5", isValid)




    if (!inputs.oil_premix_kg) {
      handleError('Please input oil premix kg', 'oil_premix_kg');
      isValid = false;
    }
    console.log("6", isValid)



    if (!inputs.batch_start_time) {
      handleError('Please input batch start time', 'batch_start_time');
      isValid = false;
    }
    console.log("7", isValid)
    if (!inputs.Pasterurization_time_from) {
      handleError('Please input Pasterurization time from', 'Pasterurization_time_from');
      isValid = false;
    }
    console.log("8", isValid)
    if (!inputs.Pasterurization_time_to) {
      handleError('Please input Pasterurization_time_to ', 'Pasterurization time to ');
      isValid = false;
    }
    console.log("9", isValid)
    if (!inputs.Pasterurization_temp) {
      handleError('Please input Pasterurization temp', 'Pasterurization_temp');
      isValid = false;
    }
    console.log("10", isValid)
    if (!inputs.magnetic_filtration_checked_at_time) {
      handleError('Please input magnetic filtration checked at time ', 'magnetic_filtration_checked_at_time ');
      isValid = false;
    }
    console.log("11", isValid)
    if (!inputs.magnetic_filtration_magnet_present) {
      handleError('Please input magnetic filtration magnet present', 'magnetic_filtration_magnet_present');
      isValid = false;
    }
    console.log("12", isValid)

    if (!inputs.homogenization_start_time) {
      handleError('Please input homogenization start time', 'homogenization_start_time');
      isValid = false;
    }
    console.log("13", isValid)
    if (!inputs.homogenization_end_time) {
      handleError('Please input homogenization end time', 'homogenization_end_time');
      isValid = false;
    }
    console.log("14", isValid)
    if (!inputs.homogenization_pressure) {
      handleError('Please input homogenization pressure', 'homogenization_pressure');
      isValid = false;
    }
    console.log("15", isValid)
    if (!inputs.ageing_tank_number) {
      handleError('Please input ageing tank number', 'ageing_tank_number');
      isValid = false;
    }
    console.log("16", isValid)
    if (!inputs.ageing_temp) {
      handleError('Please input ageing temp', 'ageing_temp');
      isValid = false;
    }
    console.log("17", isValid)
    if (!inputs.chilling_temp) {
      handleError('Please input chilling temp', 'chilling_temp');
      isValid = false;
    }
    console.log("18", isValid)

    if (!inputs.filling_temp) {
      handleError('Please input filling temp', 'filling_temp');
      isValid = false;
    }
    console.log("19", isValid)

    if (!inputs.filling_start_time) {
      handleError('Please input filling start time', 'filling_start_time');
      isValid = false;
    }
    console.log("20", isValid)

    if (!inputs.filling_start_temp) {
      handleError('Please input filling_start_temp', 'filling_start_temp');
      isValid = false;
    }

    console.log("21", isValid)

    if (!inputs.weight_of_box) {
      handleError('Please input weight of box', 'weight_of_box');
      isValid = false;
    }

    console.log("22", isValid)
    if (!inputs.top_sealing_heater_temp) {
      handleError('Please input top_sealing_heater_temp', 'top_sealing_heater_temp');
      isValid = false;
    }
    console.log("23", isValid)
    if (!inputs.bottom_sealing_heater_temp) {
      handleError('Please input bottom sealing heater temp', 'bottom_sealing_heater_temp');
      isValid = false;
    }
    console.log("24", isValid)
    if (!inputs.filling_end_time) {
      handleError('Please input filling end time ', 'filling_end_time ');
      isValid = false;
    }
    console.log("25", isValid)



    if (!inputs.filling_end_temp) {
      handleError('Please input filling_end_temp', 'filling_end_temp');
      isValid = false;
    }
    console.log("26", isValid)



    if (!inputs.total_packing_time) {
      handleError('Please input total packing time', 'total_packing_time');
      isValid = false;
    }
    console.log("27", isValid)
    if (!inputs.ccp_02_metal_detector_checked_at_time) {
      handleError('Please input ccp 02 metal detector checked at time', 'ccp_02_metal_detector_checked_at_time');
      isValid = false;
    }
    console.log("28", isValid)

    if (!inputs.ccp_02_metal_detector_ss) {
      handleError('Please input ccp 02 metal detector ss', 'ccp_02_metal_detector_ss');
      isValid = false;
    }
    console.log("29", isValid)
    if (!inputs.ccp_02_metal_detector_non_ferous) {
      handleError('Please input ccp 02 metal detector non ferous', 'ccp_02_metal_detector_non_ferous');
      isValid = false;
    }
    console.log("30", isValid)
    if (!inputs.ccp_02_metal_detector_ferous) {
      handleError('Please input ccp 02 metal detector ferous', 'ccp_02_metal_detector_ferous');
      isValid = false;
    }
    console.log("31", isValid)
    if (!inputs.total_damage) {
      handleError('Please input total damage', 'total_damage');
      isValid = false;
    }
    console.log("32", isValid)

    if (!inputs.blast_freezing_blast_room_number) {
      handleError('Please input blast freezing blast room number', 'blast_freezing_blast_room_number');
      isValid = false;
    }
    console.log("33", isValid)
    if (!inputs.blast_freezing_loading_start_time) {
      handleError('Please input blast freezing loading start time', 'blast_freezing_loading_start_time');
      isValid = false;
    }
    console.log("34", isValid)
    if (!inputs.blast_freezing_loading_end_time) {
      handleError('Please input blast freezing loading end time', 'blast_freezing_loading_end_time');
      isValid = false;
    }
    console.log("35", isValid)


    if (!inputs.blast_freezing_oprp_2_time) {
      handleError('Please input blast_freezing_oprp_2_time', 'blast_freezing_oprp_2_time');
      isValid = false;
    }
    console.log("36", isValid)







    if (!inputs.blast_freezing_oprp_2_product_core_temp) {
      handleError('Please input blast freezing oprp 2 product core temp', 'blast_freezing_oprp_2_product_core_temp');
      isValid = false;
    }
    console.log("37", isValid)
    if (!inputs.blast_freezing_oprp_2_product_cartoon_packed) {
      handleError('Please input blast freezing oprp 2 product cartoon packed', 'blast_freezing_oprp_2_product_cartoon_packed');
      isValid = false;
    }
    console.log("38", isValid)
    if (!inputs.blast_freezing_total_kg) {
      handleError('Please input blast freezing total kg', 'blast_freezing_total_kg');
      isValid = false;
    }
    console.log("39", isValid)

    if (!inputs.blast_freezing_reference_sample) {
      handleError('Please input blast freezing reference sample', 'blast_freezing_reference_sample');
      isValid = false;
    }
    console.log("40", isValid)
    if (!inputs.blast_freezing_total_recovery) {
      handleError('Please input blast freezing total recovery', 'blast_freezing_total_recovery');
      isValid = false;
    }
    console.log("41", isValid)

    if (!inputs.blast_freezing_remarks) {
      handleError('Please input blast_freezing_remarks', 'blast_freezing_remarks');
      isValid = false;
    }


    if (isValid) {
      var formData = new FormData();


      formData.append('dates', inputs.dates),
        formData.append('name_of_product', inputs.name_of_product),
        formData.append('batch_size', inputs.batch_size),
        formData.append('batch_number', inputs.batch_number),
        formData.append('premix_number', inputs.premix_number),
        formData.append('water_premix_kg', inputs.water_premix_kg),
        formData.append('oil_premix_kg', inputs.oil_premix_kg),
        formData.append('batch_start_time', inputs.batch_start_time),
        formData.append('Pasterurization_time_from', inputs.Pasterurization_time_from),
        formData.append('Pasterurization_time_to', inputs.Pasterurization_time_to),
        formData.append('Pasterurization_temp', inputs.Pasterurization_temp),
        formData.append('magnetic_filtration_checked_at_time', inputs.magnetic_filtration_checked_at_time),
        formData.append('magnetic_filtration_magnet_present', inputs.magnetic_filtration_magnet_present),
        formData.append('magnetic_filtration_strainer_condition', inputs.magnetic_filtration_strainer_condition),
        formData.append('homogenization_start_time', inputs.homogenization_start_time),
        formData.append('homogenization_end_time', inputs.homogenization_end_time),
        formData.append('homogenization_pressure', inputs.homogenization_pressure),
        formData.append('ageing_tank_number', inputs.ageing_tank_number),
        formData.append('ageing_temp', inputs.ageing_temp),
        formData.append('chilling_temp', inputs.chilling_temp),
        formData.append('filling_temp', inputs.filling_temp),
        formData.append('filling_start_time', inputs.filling_start_time),
        formData.append('filling_start_temp', inputs.filling_end_temp),
        formData.append('weight_of_box', inputs.weight_of_box),
        formData.append('top_sealing_heater_temp', inputs.top_sealing_heater_temp),
        formData.append('bottom_sealing_heater_temp', inputs.bottom_sealing_heater_temp),
        formData.append('filling_end_time', inputs.filling_end_temp),
        formData.append('filling_end_temp', inputs.filling_end_time),
        formData.append('total_packing_time', inputs.total_packing_time),
        formData.append('ccp_02_metal_detector_checked_at_time', inputs.ccp_02_metal_detector_checked_at_time),
        formData.append('ccp_02_metal_detector_ss', inputs.ccp_02_metal_detector_ss),
        formData.append('ccp_02_metal_detector_non_ferous', inputs.ccp_02_metal_detector_non_ferous),

        formData.append('ccp_02_metal_detector_ferous', inputs.ccp_02_metal_detector_ferous),
        formData.append('total_damage', inputs.total_damage),
        formData.append('blast_freezing_blast_room_number', inputs.blast_freezing_blast_room_number),
        formData.append('blast_freezing_loading_start_time', inputs.blast_freezing_loading_start_time),
        formData.append('blast_freezing_loading_end_time', inputs.blast_freezing_loading_end_time),
        formData.append('blast_freezing_oprp_2_time', inputs.blast_freezing_oprp_2_time),
        formData.append('blast_freezing_oprp_2_product_core_temp', inputs.blast_freezing_oprp_2_product_core_temp),
        formData.append('blast_freezing_oprp_2_product_cartoon_packed', inputs.blast_freezing_oprp_2_product_cartoon_packed),
        formData.append('blast_freezing_total_kg', inputs.blast_freezing_total_kg),
        formData.append('blast_freezing_reference_sample', inputs.blast_freezing_reference_sample),
        formData.append('blast_freezing_total_recovery', inputs.blast_freezing_total_recovery),
        formData.append('blast_freezing_remarks', inputs.blast_freezing_remarks)


      imageUri.map((item, i) => {
        console.log(item)
        formData.append('pictures', {
          name: item.name,
          type: item.type,
          uri: item.uri
        })
      })
    

      if (blast_freezing_supervisor_sign) {
        formData.append('blast_freezing_supervisor_sign', blast_freezing_supervisor_sign)
      }

      fileData.map(item => {
        formData.append('attachments', {
          ...item,
        })
      })
      console.log('key', formData)

      var result = await postData('adddata/add', formData)
      if (result.status) {
        alert('success')
      }

    }

  }
  const [imageUri, SetImageUri] = useState([])
  const openCamera = () => {
    let options = {
      storageOption: {
        Path: 'images',
        mediaType: 'photo'
      },

      includeBase64: true,
    };

    launchCamera(options, (response => {
      console.log('Response', response)
      if (response.didCancel) {
        console.log('user cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error', response.error)
      }
      else if (response.customButton) {
        console.log('user tapped custom button', response.customButton)
      } else {
        const source = { base64: 'data:image/jpeg;base64,' + response.assets[0].base64, name: response.assets[0].fileName, type: response.assets[0].type, uri: response.assets[0].uri }
        SetImageUri([...imageUri, source])
      }


    }))

  }


  const openGallery = () => {
    let options = {
      storageOption: {
        Path: 'images',
        mediaType: 'photo'
      },

      includeBase64: true,
    };

    launchImageLibrary(options, (response => {
      console.log('Response', response)
      if (response.didCancel) {
        console.log('user cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error', response.error)
      }
      else if (response.customButton) {
        console.log('user tapped custom button', response.customButton)
      } else {
        const source = { base64: 'data:image/jpeg;base64,' + response.assets[0].base64, name: response.assets[0].fileName, type: response.assets[0].type, uri: response.assets[0].uri }
        SetImageUri([...imageUri, source])
      }

    }))

  }


  const sign = createRef()
  const saveSign = () => {
    sign.current.saveImage()
  }

  const resetSign = () => {
    sign.current.resetImage()
  }


  const _onSaveEvent = (result) => {
    console.log(result.encoded)
    setBlast_freezing_supervisor_sign({ name: 'signature' + Date.now() + "png", type: "image/png", uri: "data:image/jpeg;base64" + result.encoded })
  }

  const _onDragEvent = () => {
    console.log("dragged")
  }

  const [fileData, setFileData] = useState([])
  const handleFilePicker = async () => {
    try {
      const response = await FilePicker.pick({
        presentationStyle: 'fullScreen',
        allowMultiSelection: true,
        type: [types.images, types.video, types.pdf]

      })
      setFileData(response)
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }




  return (
    <ScrollView>
      <SafeAreaView style={{ backgroundColor: 'pink', flex: 1 }}>

        <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>
            Product Details

          </Text>
        </View>
        <View style={{ width: '90%', height: 'auto', backgroundColor: '#fff', display: 'flex', alignSelf: 'center', marginTop: 10, elevation: 10 }}>
          <View style={{ marginRight: 10, marginLeft: 10, marginTop: -20, date: new Date }}>

            <View style={{ marginTop: 5 }}>

              <Input
                onChangeText={text => handleOnchange(text, 'dates')}
                iconName="update"
                placeholder="Date"
                onFocus={() => handleDate()}
                value={currentDate}



              />
            </View>




            <View style={{ marginTop: -40 }}>
              <Input
                onChangeText={text => handleOnchange(text, 'name_of_product')}
                iconName="basketball"
                placeholder="Name of product"
                onFocus={() => handleError(null, 'name_of_product')}
                // value={inputs.name_of_product}
                error={errors.name_of_product}
              />
            </View>
            <View style={{ marginTop: -40 }}>
              <Input


                iconName="alert-octagram-outline"
                onChangeText={text => handleOnchange(text, 'batch_number')}
                onFocus={() => handleError(null, 'batch_number')}
                placeholder="Batch number"
                value={inputs.batch_number}
                error={errors.batch_number}

              />
            </View>

          </View>
          <View style={{ flexDirection: 'row', marginTop: -50 }}>
            <View style={{ margin: 10, width: '45%' }}>
              <Input

                iconName="alert-octagram-outline"
                onChangeText={text => handleOnchange(text, 'batch_size')}
                onFocus={() => handleError(null, 'batch_size')}
                placeholder="Batch Size"
                value={inputs.batch_size}
                error={errors.batch_size}

              />

            </View>
            <View style={{ marginLeft: 10, margin: 10, width: '44%' }}>
              <Input


                iconName="alert-octagram-outline"
                onChangeText={text => handleOnchange(text, 'premix_number')}
                onFocus={() => handleError(null, 'premix_number')}
                placeholder="Premix No"
                value={inputs.premix_number}
                error={errors.premix_number}
              />
            </View>
          </View>
          <View style={{ marginTop: -60, flexDirection: 'row' }}>
            <View style={{ margin: 10, width: '45%' }}>
              <Input


                iconName="alert-octagram-outline"
                onChangeText={text => handleOnchange(text, 'water_premix_kg')}
                onFocus={() => handleError(null, 'water_premix_kg')}
                placeholder="Water Premix Kg"
                value={inputs.water_premix_kg}
                error={errors.water_premix_kg}

              />
            </View>
            <View style={{ marginLeft: 10, width: '44%', height: 30, margin: 10 }}>
              <Input


                iconName="alert-octagram-outline"
                onChangeText={text => handleOnchange(text, 'oil_premix_kg')}
                onFocus={() => handleError(null, 'oil_premix_kg')}
                placeholder="Oil Premix Kg"
                value={inputs.oil_premix_kg}
                error={errors.oil_premix_kg}

              />
            </View>
          </View>
          <View style={{ marginRight: 10, marginLeft: 10, marginTop: -50 }}>
            <Input
              onChangeText={text => handleOnchange(text, 'batch_start_time')}

              iconName="alert-octagram-outline"
              placeholder="Time"
              onFocus={() => handleBatchStartTime()}
              value={batchstarttime}



            />
          </View>

        </View>


        <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>
            Pasterurization

          </Text>
        </View>

        <View style={{ width: '90%', height: 'auto', backgroundColor: '#fff', display: 'flex', alignSelf: 'center', marginTop: 10, elevation: 10 }}>
          <View style={{ marginTop: -30, flexDirection: 'row' }}>
            <View style={{ margin: 10, width: '45%' }}>
              <Input
                onChangeText={text => handleOnchange(text, 'Pasterurization_time_from')}
                iconName="alert-octagram-outline"
                placeholder="Time"
                onFocus={() => handlePastureTime()}

                value={pasturetime}

              />
            </View>
            <View style={{ marginLeft: 10, width: '44%', margin: 10 }}>
              <Input
                onChangeText={text => handleOnchange(text, 'Pasterurization_time_to')}

                iconName="alert-octagram-outline"
                placeholder="Time"
                onFocus={() => handlePastureTimeTo()}
                value={pasturetimeto}

              />
            </View>
          </View>
          <View style={{ marginRight: 10, marginLeft: 10, marginTop: -50 }}>
            <Input

              iconName="alert-octagram-outline"
              placeholder="Temp"
              onChangeText={text => handleOnchange(text, 'Pasterurization_temp')}
              onFocus={() => handleError(null, 'Pasterurization_temp')}
              value={inputs.Pasterurization_temp}
              error={errors.Pasterurization_temp}
            />
          </View>

        </View>

        <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>
            Magnetic Filteration

          </Text>
        </View>
        <View style={{ width: '90%', height: 'auto', backgroundColor: '#fff', display: 'flex', alignSelf: 'center', marginTop: 10, elevation: 10 }}>
          <View style={{ marginRight: 10, marginLeft: 10, marginTop: -20 }}>
            <Input
              onChangeText={text => handleOnchange(text, 'magnetic_filtration_checked_at_time')}
              iconName="alert-octagram-outline"
              placeholder="Time"
              onFocus={() => handleMagneticatTime()}
              value={magneticat}

            />

            <View style={{ marginRight: 50, marginLeft: 10, marginTop: 20, marginBottom: 10 }}>
              <MultipleButton />
            </View>
          </View>
        </View>

        <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>
            Strainer Condition

          </Text>
        </View>
        <View style={{ width: '90%', height: 'auto', backgroundColor: '#fff', display: 'flex', alignSelf: 'center', marginTop: 10, elevation: 10 }}>
          <View style={{ marginRight: 50, marginLeft: 10, marginTop: 20, marginBottom: 10 }}>
            <MultipleButton />
          </View>



        </View>


        <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>
            Homogenation

          </Text>
        </View>

        <View style={{ width: '90%', height: 'auto', backgroundColor: '#fff', display: 'flex', alignSelf: 'center', marginTop: 10, elevation: 10 }}>
          <View style={{ marginTop: -30, flexDirection: 'row' }}>
            <View style={{ margin: 10, width: '45%' }}>
              <Input
                onChangeText={text => handleOnchange(text, 'homogenization_start_time')}

                iconName="alert-octagram-outline"
                placeholder=" StartTime"
                onFocus={() => handleHomogenizationStartTime()}

                value={homogenizationstart}
              />
            </View>
            <View style={{ marginLeft: 10, width: '44%', margin: 10 }}>
              <Input
                onChangeText={text => handleOnchange(text, 'homogenization_end_time')}

                iconName="alert-octagram-outline"
                placeholder=" StartTime"
                onFocus={() => handleHomogenizationEndTime()}
                value={homogenizationend}

              />
            </View>
          </View>
          <View style={{ marginRight: 10, marginLeft: 10, marginTop: -50 }}>
            <Input


              iconName="alert-octagram-outline"
              onChangeText={text => handleOnchange(text, 'homogenization_pressure')}
              onFocus={() => handleError(null, 'homogenization_pressure')}
              placeholder="Pressure"
              value={inputs.homogenization_pressure}
              error={errors.homogenization_pressure}



            />
          </View>

        </View>


        <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>
            Ageing

          </Text>
        </View>

        <View style={{ width: '90%', height: 'auto', backgroundColor: '#fff', display: 'flex', alignSelf: 'center', marginTop: 10, elevation: 10 }}>
          <View style={{ marginTop: -30, flexDirection: 'row' }}>
            <View style={{ margin: 10, width: '45%' }}>
              <Input


                iconName="alert-octagram-outline"
                onChangeText={text => handleOnchange(text, 'ageing_tank_number')}
                onFocus={() => handleError(null, 'ageing_tank_number')}
                placeholder="Tank No"
                value={inputs.ageing_tank_number}
                error={errors.ageing_tank_number}

              />
            </View>
            <View style={{ marginLeft: 10, width: '44%', margin: 10 }}>
              <Input


                iconName="alert-octagram-outline"
                onChangeText={text => handleOnchange(text, 'ageing_temp')}
                onFocus={() => handleError(null, 'ageing_temp')}
                placeholder="Temp"
                value={inputs.ageing_temp}
                error={errors.ageing_temp}


              />
            </View>
          </View>
          <View style={{ marginTop: -60, flexDirection: 'row' }}>
            <View style={{ margin: 10, width: '45%' }}>
              <Input
                onChangeText={text => handleOnchange(text, 'chilling_temp')}
                onFocus={() => handleError(null, 'chilling_temp')}
                iconName="alert-octagram-outline"

                placeholder="ChillingTemp"
                value={inputs.chilling_temp}
                error={errors.chilling_temp}

              />
            </View>
            <View style={{ marginLeft: 10, width: '44%', margin: 10 }}>
              <Input
                onChangeText={text => handleOnchange(text, 'filling_temp')}
                onFocus={() => handleError(null, 'filling_temp')}

                iconName="alert-octagram-outline"

                placeholder="Filling Temp"
                value={inputs.filling_temp}
                error={errors.filling_temp}
              />
            </View>
          </View>
        </View>

        <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>
            Filling Start

          </Text>
        </View>
        <View style={{ width: '90%', height: 'auto', backgroundColor: '#fff', display: 'flex', alignSelf: 'center', marginTop: 10, elevation: 10 }}>
          <View style={{ marginTop: -30, flexDirection: 'row' }}>
            <View style={{ margin: 10, width: '45%' }}>
              <Input
                onChangeText={text => handleOnchange(text, 'filling_start_time')}
                iconName="alert-octagram-outline"
                placeholder="Time"
                onFocus={() => handleFillingStartTime()}

                value={fillingstart}



              />
            </View>
            <View style={{ marginLeft: 10, width: '44%', margin: 10 }}>
              <Input
                onChangeText={text => handleOnchange(text, 'filling_start_temp')}
                onFocus={() => handleError(null, 'filling_start_temp')}


                iconName="alert-octagram-outline"

                placeholder="Temp"

                error={errors.filling_start_temp}

              />
            </View>
          </View>
          <View style={{ marginLeft: 10, width: '95%', margin: 10, marginTop: -50 }}>
            <Input
              onChangeText={text => handleOnchange(text, 'weight_of_box')}
              onFocus={() => handleError(null, 'weight_of_box')}


              iconName="alert-octagram-outline"

              placeholder="Weight of box"
              value={inputs.weight_of_box}
              error={errors.weight_of_box}

            />
          </View>
          <View style={{ marginTop: -60, flexDirection: 'row' }}>
            <View style={{ margin: 10, width: '45%' }}>
              <Input
                onChangeText={text => handleOnchange(text, 'top_sealing_heater_temp')}
                onFocus={() => handleError(null, 'top_sealing_heater_temp')}

                iconName="alert-octagram-outline"

                placeholder="Top temp"
                value={inputs.top_sealing_heater_temp}
                error={errors.top_sealing_heater_temp}

              />
            </View>
            <View style={{ marginLeft: 10, width: '44%', margin: 10 }}>
              <Input
                onChangeText={text => handleOnchange(text, 'bottom_sealing_heater_temp')}
                onFocus={() => handleError(null, 'bottom_sealing_heater_temp')}

                iconName="alert-octagram-outline"
                placeholder="BottomTemp"
                value={inputs.bottom_sealing_heater_temp}
                error={errors.bottom_sealing_heater_temp}

              />
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>
            Filling End

          </Text>
        </View>
        <View style={{ width: '90%', height: 'auto', backgroundColor: '#fff', display: 'flex', alignSelf: 'center', marginTop: 10, elevation: 10 }}>
          <View style={{ marginTop: -30, flexDirection: 'row' }}>
            <View style={{ margin: 10, width: '45%' }}>
              <Input
                onChangeText={text => handleOnchange(text, 'filling_end_time')}

                iconName="alert-octagram-outline"
                placeholder="Time"
                onFocus={() => handleFillingEndTime()}

                value={fillingend}

              />
            </View>
            <View style={{ marginLeft: 10, width: '44%', margin: 10 }}>
              <Input
                onChangeText={text => handleOnchange(text, 'filling_end_temp')}
                onFocus={() => handleError(null, 'filling_end_temp')}
                iconName="alert-octagram-outline"

                placeholder="End Time"
                value={inputs.filling_end_temp}
                error={errors.filling_end_temp}

              />
            </View>
          </View>
          <View style={{ marginLeft: 10, width: '95%', margin: 10, marginTop: -50 }}>
            <Input
              onChangeText={text => handleOnchange(text, 'total_packing_time')}
              onFocus={() => handleError(null, 'total_packing_time')}
              iconName="alert-octagram-outline"

              placeholder="SS"
              value={inputs.total_packing_time}
              error={errors.total_packing_time}

            />
          </View>
        </View>

        <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>
            Metal Detector

          </Text>
        </View>
        <View style={{ width: '90%', height: 'auto', backgroundColor: '#fff', display: 'flex', alignSelf: 'center', marginTop: 10, elevation: 10 }}>
          <View style={{ marginTop: -30, flexDirection: 'row' }}>
            <View style={{ margin: 10, width: '45%' }}>
              <Input
                onChangeText={text => handleOnchange(text, 'ccp_02_metal_detector_checked_at_time')}
                iconName="alert-octagram-outline"
                placeholder="Time"
                onFocus={() => handleMetalatTime()}

                value={metalat}
              />
            </View>
            <View style={{ marginLeft: 10, width: '44%', margin: 10 }}>
              <Input
                onChangeText={text => handleOnchange(text, 'ccp_02_metal_detector_ss')}
                onFocus={() => handleError(null, 'ccp_02_metal_detector_ss')}
                iconName="alert-octagram-outline"

                placeholder="SS"
                value={inputs.ccp_02_metal_detector_ss}
                error={errors.ccp_02_metal_detector_ss}

              />
            </View>
          </View>
          <View style={{ marginTop: -60, flexDirection: 'row' }}>
            <View style={{ margin: 10, width: '45%' }}>
              <Input


                iconName="alert-octagram-outline"
                onChangeText={text => handleOnchange(text, 'ccp_02_metal_detector_non_ferous')}
                onFocus={() => handleError(null, 'ccp_02_metal_detector_non_ferous')}
                placeholder=" NON Ferous"
                value={inputs.ccp_02_metal_detector_non_ferous}
                error={errors.ccp_02_metal_detector_non_ferous}

              />
            </View>
            <View style={{ marginLeft: 10, width: '44%', margin: 10 }}>
              <Input
                iconName="alert-octagram-outline"
                onChangeText={text => handleOnchange(text, 'ccp_02_metal_detector_ferous')}
                onFocus={() => handleError(null, 'ccp_02_metal_detector_ferous')}
                placeholder="Ferous"
                value={inputs.ccp_02_metal_detector_ferous}
                error={errors.ccp_02_metal_detector_ferous}
              />
            </View>
          </View>
          <View style={{ marginLeft: 10, width: '95%', margin: 10, marginTop: -50 }}>
            <Input


              iconName="alert-octagram-outline"
              onChangeText={text => handleOnchange(text, 'total_damage')}
              onFocus={() => handleError(null, 'total_damage')}
              placeholder="Total Damage"
              value={inputs.total_damage}
              error={errors.total_damage}

            />
          </View>
        </View>
        <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>
            Blast Freezing

          </Text>
        </View>
        <View style={{ width: '90%', height: 'auto', backgroundColor: '#fff', display: 'flex', alignSelf: 'center', marginTop: 10, elevation: 10 }}>
          <View style={{ marginLeft: 10, width: '95%', margin: 10, marginTop: -20 }}>
            <Input

              iconName="alert-octagram-outline"
              onChangeText={text => handleOnchange(text, 'blast_freezing_blast_room_number')}
              onFocus={() => handleError(null, 'blast_freezing_blast_room_number')}
              placeholder="Blast Room No"
              value={inputs.blast_freezing_blast_room_number}
              error={errors.blast_freezing_blast_room_number}

            />
          </View>

          <View style={{ marginTop: -60, flexDirection: 'row' }}>
            <View style={{ margin: 10, width: '45%' }}>
              <Input
                onChangeText={text => handleOnchange(text, 'blast_freezing_loading_start_time')}
                iconName="alert-octagram-outline"
                placeholder=" StartTime"
                onFocus={() => handleBlastStartTime()}

                value={blaststarttime}

              />
            </View>
            <View style={{ marginLeft: 10, width: '44%', margin: 10 }}>
              <Input
                onChangeText={text => handleOnchange(text, 'blast_freezing_loading_end_time')}

                iconName="alert-octagram-outline"
                placeholder=" EndTime"
                onFocus={() => handleBlastEndTime()}

                value={blastendtime}

              />
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>
            OPRP-2

          </Text>
        </View>
        <View style={{ width: '90%', height: 'auto', backgroundColor: '#fff', display: 'flex', alignSelf: 'center', marginTop: 10, elevation: 10 }}>
          <View style={{ marginLeft: 10, width: '95%', margin: 10, marginTop: -20 }}>
            <Input
              onChangeText={text => handleOnchange(text, 'blast_freezing_oprp_2_time')}
              placeholder='Opr-2'
              iconName="alert-octagram-outline"

            //value={Time}

            />
          </View>
          <View style={{ marginLeft: 10, width: '95%', margin: 10, marginTop: -50 }}>
            <Input


              iconName="alert-octagram-outline"
              onChangeText={text => handleOnchange(text, 'blast_freezing_oprp_2_product_core_temp')}
              onFocus={() => handleError(null, 'blast_freezing_oprp_2_product_core_temp')}
              placeholder="Product Core Temperture"
              value={inputs.blast_freezing_oprp_2_product_core_temp}
              error={errors.blast_freezing_oprp_2_product_core_temp}

            />
          </View>
          <View style={{ marginTop: -60, flexDirection: 'row' }}>
            <View style={{ margin: 10, width: '45%' }}>
              <Input


                iconName="alert-octagram-outline"
                onChangeText={text => handleOnchange(text, 'blast_freezing_oprp_2_product_cartoon_packed')}
                onFocus={() => handleError(null, 'blast_freezing_oprp_2_product_cartoon_packed')}
                placeholder="Cartoon packed"
                value={inputs.blast_freezing_oprp_2_product_cartoon_packed}
                error={errors.blast_freezing_oprp_2_product_cartoon_packed}

              />
            </View>
            <View style={{ marginLeft: 10, width: '44%', margin: 10 }}>
              <Input


                iconName="alert-octagram-outline"
                onChangeText={text => handleOnchange(text, 'blast_freezing_total_kg')}
                onFocus={() => handleError(null, 'blast_freezing_total_kg')}
                placeholder="Total kg"
                value={inputs.blast_freezing_total_kg}
                error={errors.blast_freezing_total_kg}

              />
            </View>
          </View>
          <View style={{ marginLeft: 10, width: '95%', margin: 10, marginTop: -50 }}>
            <Input


              iconName="alert-octagram-outline"
              onChangeText={text => handleOnchange(text, 'blast_freezing_reference_sample')}
              onFocus={() => handleError(null, 'blast_freezing_reference_sample')}
              placeholder="Refrence sample"
              value={inputs.blast_freezing_reference_sample}
              error={errors.blast_freezing_reference_sample}

            />
          </View>
          <View style={{ marginLeft: 10, width: '95%', margin: 10, marginTop: -50 }}>
            <Input


              iconName="alert-octagram-outline"
              onChangeText={text => handleOnchange(text, 'blast_freezing_total_recovery')}
              onFocus={() => handleError(null, 'blast_freezing_total_recovery')}
              placeholder="Total Recovery"
              value={inputs.blast_freezing_total_recovery}
              error={errors.blast_freezing_total_recovery}

            />
          </View>
          <View style={{ marginLeft: 10, width: '95%', margin: 10, marginTop: -50 }}>
            <Input


              iconName="alert-octagram-outline"
              onChangeText={text => handleOnchange(text, 'blast_freezing_remarks')}
              onFocus={() => handleError(null, 'blast_freezing_remarks')}
              placeholder="Remark"
              value={inputs.blast_freezing_remarks}
              error={errors.blast_freezing_remarks}

            />
          </View>
        </View>
        <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>
            Upload Image...

          </Text>
        </View>
        <View style={{ width: '90%', backgroundColor: '#fff', display: 'flex', alignSelf: 'center', marginTop: 10, elevation: 10 }}>

          <View style={{ flexDirection: 'row', display: 'flex' }}>
            {imageUri.map((item, index) => {

              console.log(item)
              return (
                <Image
                  source={{ uri: item.base64 }}
                  style={{ height: 80, width: 80, boderRadius: 100, borderWidth: 1, borderColor: 'black', marginRight: (index + 1) % 4 == 0 ? 0 : 28 }}
                />
              )
            })}



          </View>
          <View style={{ marginTop: 10, flexDirection: 'row' }}>

            <View style={{ margin: 50, width: '45%', marginTop: 40, marginLeft: 20 }}>
              <Button onPress={() => openCamera()} size="small" color="pink" text='Take' />
            </View>
            <View style={{ margin: 50, width: '45%', marginTop: 20, marginLeft: -30 }}>
              <Button onPress={() => openGallery()} size="small" color="pink" text='Gallery' />
            </View>
          </View>
        </View>




        <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>
            Signature Here...</Text>
        </View>
        <View style={{ width: '90%', backgroundColor: '#fff', display: 'flex', alignSelf: 'center', marginTop: 10, elevation: 10 }}>
          <View style={{ margin: 30, flexDirection: 'row', borderWidth: 5.0 }}>
            <SignatureCapture
              style={{ width: "100%" }}
              ref={sign}
              onSaveEvent={_onSaveEvent}
              onDragEvent={_onDragEvent}
              showNativeButtons={false}

              showTitleLabel={false}
              //backgroundColor='#fff'
              minStrokeWidth={4}
              maxStrokeWidth={4}
              //strokeColor="black"
              viewMode={"portrait"} />






            <View style={{ flexDirection: 'row', marginTop: 300, margin: 10, marginLeft: -240, justifyContent: 'space-between' }}>


              <Button onPress={() => saveSign()} size="small" color="pink" text='save' />
            </View>


            <View style={{ marginTop: 300, marginLeft: 15 }}>
              <Button onPress={() => resetSign()} size="small" color="pink" text='Reset' />


            </View>


          </View>
        </View>
        <View style={{ width: '90%', height: 100, backgroundColor: '#fff', display: 'flex', alignSelf: 'center', marginTop: 10, elevation: 10 }}>






          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 27 }}>




            {fileData.length > 0 ? fileData.map((ls, index) => {
              console.log(ls)
              return (
                <View key={index}>
                  <Text>
                    Name:{ls.name}
                  </Text>
                </View>

              )
            }) : null}


            <Button onPress={() => handleFilePicker()} text='Attachment' size="large" color='pink' />
          </View>
        </View>

        <View style={{ width: '90%', height: 100, backgroundColor: '#fff', display: 'flex', alignSelf: 'center', marginTop: 10, elevation: 10 }}>

          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
            <Button text='submit' size="large" color='pink' onPress={() => validate()} />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>

  )




}

export default Product;