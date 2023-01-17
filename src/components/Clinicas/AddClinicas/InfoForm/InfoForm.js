import React, { useState}from 'react'
import { View, Text, ScrollView } from 'react-native'
import { styles} from "./InfoForm.styles"
import { Input} from "react-native-elements"
import { MapForm} from "../MapForm"

export function InfoForm(props) {
  const {formik}= props;
  const [showMap, setShowMap]=useState(false)

  const onOpenCloseMap= ()=> setShowMap((prevState)=>!prevState)

  return (
    <>
    <ScrollView style={styles.content}>
      <Input 
        placeholder=' Nombre de la Clinica veterinaria' 
        onChangeText={(text) => formik.setFieldValue("nombre",text)} 
        errorMessage={formik.errors.nombre}
      />

      <Input 
        placeholder=' Horarios de la clinica'
        onChangeText={(text) => formik.setFieldValue("horarios",text)} 
        errorMessage={formik.errors.horarios}
      />
      <Input 
        placeholder=' Telefono de la clinica'
        onChangeText={(text) => formik.setFieldValue("telefono",text)} 
        errorMessage={formik.errors.telefono}
      />
      
      <Input 
        placeholder=' Direccion de la clinica'
        rightIcon={{
          type:"material-community",
          name:"map-marker-radius",
          color:getColorIconMap(formik),
          onPress:onOpenCloseMap,
        }}
        onChangeText={(text) => formik.setFieldValue("direccion",text)} 
        errorMessage={formik.errors.direccion}
      />

      <Input 
        placeholder=' Descripcion de la clinica' 
        multiline={true} 
        inputContainerStyle={styles.textArea}
        onChangeText={(text) => formik.setFieldValue("descripcion",text)} 
        errorMessage={formik.errors.descripcion}
      />
    </ScrollView>
    <MapForm show={showMap} close={onOpenCloseMap} formik={formik}/>
    </>
  )
}


const getColorIconMap = (formik) => {
  if (formik.errors.location) return "#ff0000";

  if (formik.values.location) return "#00a680";

  return "#c2c2c2";
}