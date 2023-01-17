import React ,{ useState,useEffect} from 'react'
import { View, Text , ScrollView} from 'react-native'
import { Icon, Image, Button} from "react-native-elements"
import { screen, db } from '../../../utils'
import { styles} from "./Search.styles"
import { getAuth, onAuthStateChanged} from "firebase/auth"
import { collection, onSnapshot, orderBy, query} from "firebase/firestore"
import { LoadingModal} from "../../../components/Shared"
import {ListClinicas} from "../../../components/Clinicas/ListClinicas"
import { useNavigation} from "@react-navigation/native"
import {SearchScreen} from "../../../screens/SearchScreen"


export function Search() {
    const navigation =useNavigation();
    
    const [clinicas, setCLinicas] = useState(null)

      useEffect(() => {
        
        const q = query(
          collection(db, "clinicas"),
          orderBy("createdAt","desc")  
        )
  
        onSnapshot(q,(snapshot) => {
            setCLinicas(snapshot.docs)
          
        })
        
      }, [])
    
  
  
    
    const goToAddClinicas = () => {
  
      navigation.navigate(screen.clinicas.addClinicas)
    }
  
    return (
      <View style={styles.content}>
        {!clinicas ? (
            <LoadingModal  show text="Cargando"/>
        ):(
          
            <ListClinicas clinicas={clinicas} />
        )}

        
      </View>
      
    )
  }