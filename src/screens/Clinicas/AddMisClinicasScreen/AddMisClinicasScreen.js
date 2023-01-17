import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { styles} from "./AddMisClinicasScreen.styles"
import { InfoForm, UploadImagesForm, ImageClinicas} from "../../../components/Clinicas/AddClinicas"
import { Button } from "react-native-elements"
import { useFormik} from "formik"
import { initialValues, validationSchema} from "./AddMisClinicasScreen.data"
import { v4 as uuid} from "uuid" 
import { doc, setDoc} from "firebase/firestore"
import { db} from "../../../utils"
import { useNavigation} from "@react-navigation/native"
import { getAuth } from 'firebase/auth'

export function AddClinicasScreen() {
  const navigation= useNavigation()

  //const uidUsuario= getAuth().tenantId
  const formik= useFormik({
    initialValues:initialValues(),
    validationSchema:validationSchema(),
    validateOnChange:false,
    onSubmit: async (formValue)=>{
      try{
        const newData = formValue;
        newData.id= uuid()
        newData.createdAt= new Date()

        await setDoc(doc(db, "clinicas", newData.id), newData) //permisos
        
        navigation.goBack()
      } catch (error){
        console.log(error)
      }
    }
    
  })

  return (
    <ScrollView showsVerticalScrollIndicator ={false} >




      <ImageClinicas formik={formik}/>

      <InfoForm formik={formik}/>
      <UploadImagesForm formik={formik} />

      <Button 
        title="Añadir clinica" 
        buttonStyle={styles.addClinicas} 
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </ScrollView>
  )
}