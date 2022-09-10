import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { InfoUser, MascotasOptions } from "../../../components/Mascotas"
import { styles} from "./UserLoggedScreen.styles"
import { Button} from "react-native-elements"
import { getAuth, signOut} from "firebase/auth"
import {LoadingModal} from "../../../components"

export function UserLoggedScreen() {

  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [_, setReload] = useState(false) // poner "_" cuando no se ocupe una variable

  const onReload = () => setReload ((prevState) => !prevState );

  
  const logout= async() =>{
    const auth = getAuth();
    await signOut (auth);
  };

  return (
    <View style={styles.content}>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText}/>

      <MascotasOptions onReload={onReload} />

      <Button 
        title="Cerrar sesión" 
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.btnTextStyle} 
        onPress={logout}
      />

      <LoadingModal show={loading} text={loadingText}/>
    </View>
  )
}