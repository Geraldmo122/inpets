import React from 'react'
import { View, ScrollView } from 'react-native'
import { Text, Image} from "react-native-elements"
import{ useNavigation} from "@react-navigation/native"
import { screen } from "../../../utils"

import { LoginForm } from "../../../components/Auth"
import { RecoverPassword } from "../../../screens/Mascotas/RecoverPassword"

import { styles} from "./LoginScreen.styles";


export function LoginScreen() {
  const navigation = useNavigation();

  const goToRegister = ()=>{
    navigation.navigate(screen.mascotas.register)
  }

  const goToRecuperarContraseña = ()=>{
    navigation.navigate(screen.mascotas.recoverPassword)
  }
  return (
    <ScrollView>
      <Image source={require("../../../../assets/img/perroygato.png")} style={styles.image}/>
      <View style={styles.content}>
        <LoginForm/>

        <Text style={styles.textRegister}>
          ¿Aún no tiene cuenta? <Text style={styles.btnRegister} onPress={goToRegister}> Regístrarse</Text>
        </Text>
        <Text style={styles.textRegister}>
          ¿Olvidaste tu contraseña? <Text style={styles.btnRegister} onPress={goToRecuperarContraseña}> Recuperar contraseña</Text>
        </Text>
      </View>
    </ScrollView>
  )
}