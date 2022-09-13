import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { styles} from "./AddMisMascotasScreen.styles"
import { InfoForm, UploadImagesForm, ImageMisMascotas} from "../../../components/MisMascotas/AddMisMascotas"
import { Button } from "react-native-elements"
import { useFormik} from "formik"
import { initialValues, validationSchema} from "./AddMisMascotasScreen.data"
import { v4 as uuid} from "uuid" 
import { doc, setDoc} from "firebase/firestore"
import { db} from "../../../utils"
import { useNavigation} from "@react-navigation/native"
import { getAuth } from 'firebase/auth'

export function AddMisMascotasScreen() {
  const navigation= useNavigation()

  //const uidUsuario= getAuth().tenantId
  const uidUsuario=getAuth().currentUser.uid
  const formik= useFormik({
    initialValues:initialValues(),
    validationSchema:validationSchema(),
    validateOnChange:false,
    onSubmit: async (formValue)=>{
      try{
        const newData = formValue;
        newData.id= uuid()
        newData.createdAt= new Date()

        await setDoc(doc(db, uidUsuario, newData.id), newData) //permisos
        
        console.log(uidUsuario)
        navigation.goBack()
      } catch (error){
        console.log(error)
      }
    }
    
  })

  return (
    <ScrollView showsVerticalScrollIndicator ={false} >




      <ImageMisMascotas formik={formik}/>

      <InfoForm formik={formik}/>
      <UploadImagesForm formik={formik} />

      <Button 
        title="Añadir mascota" 
        buttonStyle={styles.addMisMascotas} 
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </ScrollView>
  )
}