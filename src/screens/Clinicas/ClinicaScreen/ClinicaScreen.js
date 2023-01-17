import React,{useState,useEffect} from 'react'
import { View, Text } from 'react-native'
import { styles} from "./ClinicaScreen.styles"
import{
doc,
onSnapshot,
collection,
query,
where,
orderBy
}from "firebase/firestore"
import { db} from "../../../utils"
import { Header, Info} from "../../../components/Clinica"
import {Carousel2,Carousel} from "../../../components/Shared"
import { ScrollView } from 'react-native-gesture-handler'
import { BtnReviewForm} from "../../../components/Clinica/BtnReviewForm"
import { Reviews} from "../../../components/Clinica/Reviews"

export function ClinicaScreen(props) {
   
    const { route } = props
    const [clinica, setClinica]= useState(null);

    useEffect(()=>{
        setClinica(null)
        onSnapshot(doc(db,"clinicas",route.params.id), (doc)=>{
            setClinica(doc.data())
        })
    }, [route.params.id])
    
    if (!clinica) return null
    
    return (
        <ScrollView>
            <Carousel2 imagenPrincipal={clinica.images[0]} />
            <Header clinica={clinica} style={styles.descripcion} />
            
            <Info clinica={clinica} />
            <BtnReviewForm idClinica={route.params.id} />
            <Reviews idClinica={route.params.id} />
            
        </ScrollView>
    )
}