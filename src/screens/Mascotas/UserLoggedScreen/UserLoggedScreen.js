import React from 'react'
import { View, Text } from 'react-native'
import { InfoUser} from "../../../components/Mascotas"
import { styles} from "./UserLoggedScreen.styles"
import { Button} from "react-native-elements"
import { getAuth, signOut} from "firebase/auth"

export function UserLoggedScreen() {


    
  const logout= async() =>{
    const auth = getAuth();
    await signOut (auth);
  };

  return (
    <View style={styles.content}>
      <InfoUser/>

      <Button 
        title="Cerrar sesión" 
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.btnTextStyle} 
        onPress={logout}
      />
    </View>
  )
}