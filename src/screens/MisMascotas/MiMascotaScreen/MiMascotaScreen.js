import React, { useEffect, useState } from 'react'
import { ScrollView, Text , Alert} from 'react-native'
import { styles} from "./MiMascotaScreen.styles"
import { getAuth, onAuthStateChanged} from "firebase/auth"
import { Button} from "react-native-elements"

import {
  doc,
  onSnapshot,
  collection,
  query,
  where,
  orderBy,
  deleteDoc,
  getDoc } from "firebase/firestore"
import { db} from "../../../utils"
import { Carousel} from "../../../components/Shared/Carousel"

import { Header} from "../../../components/Mascota"
import { Info} from "../../../components/Mascota/Info"
import { useNavigation} from "@react-navigation/native"
import { screen} from "../../../utils"

export function MiMascotaScreen(props) {
  
  const { route} =props

  const uidUsuario=getAuth().currentUser.uid

  const [miMascota,setMiMascota]= useState(null)

  useEffect(()=>{
    
    setMiMascota(null),
    onSnapshot(doc(db,uidUsuario,route.params.id), (doc)=>{
      
      setMiMascota(doc.data())
    })
    
  },[route.params.id])
  const navigation =useNavigation();
  const twoOptionAlert=()=>{
    Alert.alert(
      //titulo
      '¿Quieres eliminar a tu mascota?',

      //body
      '¿Seguro?',
      [
        {
          text:'Si',
          onPress:() =>{
            
            deleteDoc(doc(db,uidUsuario,route.params.id))
            navigation.navigate(screen.misMascotas.misMascotas)
          }
        },
        
        {
          text:'No',
          onPress:()=>{
            console.log('No')
          }
        }
      ]
    )
  }

  if (!miMascota) return null
  return (
    <ScrollView>
      <Header miMascota={miMascota}/>
      <Carousel  imagenPrincipal={miMascota.images[0]}/>
      
      <Info miMascota={miMascota}/>

      <Button 
        title="Eliminar mascota" 
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.btnTextStyle} 
        onPress={twoOptionAlert}
      />

    </ScrollView>

    //<image arrayImages={uidUsuario.images} height={250} width={300} />
  )
}