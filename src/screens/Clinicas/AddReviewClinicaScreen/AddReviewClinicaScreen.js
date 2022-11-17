import { View, Text } from 'react-native'
import React from 'react'
import {styles} from "./AddReviewClinicaScreen.styles"
import { AirbnbRating, Input, Button} from "react-native-elements"
import { useFormik} from "formik"
import { initialValues, validationSchema} from "./AddReviewClinicaScreen.data"
import { async } from '@firebase/util'
import Toast from "react-native-toast-message"
import { v4 as uuid} from "uuid"
import { getAuth} from "firebase/auth"
import {
    doc,
    setDoc,
    query,
    collection,
    where,
    onSnapshot,
    updateDoc,
} from "firebase/firestore"
import { map, mean} from "lodash"
import { db} from "../../../utils"
import { useNavigation} from "@react-navigation/native"

export function AddReviewClinicaScreen(props) {

  const { route }= props 

  const navigation = useNavigation()
  
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange:false,
    onSubmit: async (formValue) =>{
        try{
            const auth = getAuth()
            const idDoc= uuid()
            const newData= formValue
            newData.id= idDoc;
            newData.idClinica = route.params.idClinica;
            newData.idUser = auth.currentUser.uid;
            newData.avatar = auth.currentUser.photoURL;
            newData.createdAt = new Date();

            await setDoc(doc(db, "reviews", idDoc), newData)
            await updateClinica()
        }catch(error){
            Toast.show({
                type:"error",
                position:"bottom",
                text1:"Error al enviar review"
            })
        }
    }
  })

  const updateClinica = async ()=>{
    const q = query(
        collection(db, "reviews"),
        where("idClinica", "==", route.params.idClinica)
    )

    onSnapshot(q, async (snapshot) => {
        const review = snapshot.docs
        const arrayStarts = map(review, (review)=> review.data().rating)

        const media = mean(arrayStarts)
        
        console.log("media")
        console.log(arrayStarts)
        console.log("media")

        const clinicaRef = doc(db, "clinicas",route.params.idClinica)

        await updateDoc(clinicaRef, {
            raingMedia: media
        })
        navigation.goBack()
    })
  }

  return (
    <View style={styles.content}>
      <View>
        <View style={styles.ratingContent}>
            <AirbnbRating 
                count={5} 
                reviews={[
                    "Pesimo",
                    "Deficiente",
                    "Normal",
                    "Muy bueno",
                    "Excelente",
                ]}
                defaultRating={formik.values.rating}
                size={35}
                onFinishRating={(rating)=> formik.setFieldValue("rating", rating)}
            />
        </View>
        <View>
            <Input 
                placeholder="Titulo"
                onChangeText={(text)=>formik.setFieldValue("title", text)}
                errorMessage={formik.errors.title}
            />
            <Input
                placeholder="Comentario"
                multiline
                inputContainerStyle={styles.comment}
                onChangeText={(text)=>formik.setFieldValue("comment", text)}
                errorMessage={formik.errors.comment}
            />
        </View>
      </View>
      <Button 
        title="Enviar review" 
        containerStyle={styles.btnContainer} 
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  )
}