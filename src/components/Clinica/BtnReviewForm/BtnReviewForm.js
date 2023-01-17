import React,{useState,useEffect} from 'react'
import { View } from 'react-native'
import {styles} from "./BtnReviewForm.styles"
import {Text, Button } from "react-native-elements"
import { getAuth, onAuthStateChanged} from "firebase/auth"
import {query, collection, where, onSnapshot} from "firebase/firestore"
import { size} from "lodash"
import { useNavigation} from "@react-navigation/native"
import { screen, db} from "../../../utils"

export function BtnReviewForm(props) {

  const {idClinica}=props;
  const [hasLogged, setHasLogged]=useState(false);
  const [hasReview, setHasReview] = useState(false);
  const auth=getAuth();
  const navigation = useNavigation()
  
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        setHasLogged(user ? true : false)
    })
  }, [])


  useEffect(()=>{
    if(hasLogged){
        const q = query(
            collection(db, "reviews"),
            where("idClinica", "==", idClinica),
            where("idUser", "==", auth.currentUser.uid)
        )
        onSnapshot(q, (snapshot)=>{
            if (size(snapshot.docs)>0) setHasReview(true)
        })
    }
  }, [hasLogged])

  const goToLogin = () =>{
    navigation.navigate(screen.mascotas.login)
  }

  const goToAddReview = () =>{
    navigation.navigate(screen.clinicas.addReviewClinica,{
        idClinica,
    })
  }

  if (hasLogged && hasReview){
    return(
        <View style={styles.content} >
            <Text style={styles.textSendReview} >Ya has enviado un review a esta clinica</Text>
        </View>
    )
  }

  return (
    <View style={styles.content}>
        {hasLogged ? (
            <Button 
                title="Escribe una opinión"
                icon={{
                    type:"material-community",
                    name:"square-edit-outline",
                    color:"#00a680"
                }}
                buttonStyle={styles.button}
                titleStyle={styles.btnText}
                onPress={goToAddReview}
            />
        ):(
            <Text style={styles.text} onPress={goToLogin}>
                Para escribir una opinión es necesario logeado{" "} 
                <Text style={styles.textClick}>pulsa AQUÍ para iniciar sesión</Text>
            </Text>
            
        )}
    </View>
  )
}