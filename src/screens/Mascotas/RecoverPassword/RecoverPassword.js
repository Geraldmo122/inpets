import { async } from '@firebase/util'
import React,{useState} from 'react'
import {StyleSheet, View, Text, Alert } from 'react-native'
import { Button, Icon, Input } from "react-native-elements"
import {LoadingModal} from "../../../components/Shared/LoadingModal" 
import { forgotPassword} from '../../../utils/actions'
import { validateEmail } from '../../../utils/helpers'
import { useNavigation} from "@react-navigation/native"



 export function RecoverPassword() {
  const [email, setEmail]= useState(null)
  const [errorEmail, setErorEmail]= useState(null)
  const [loading, setloading]= useState(null)

  const navigation= useNavigation()


  const validateData = () =>{
    setErorEmail(null)
    let valid = true

    if (!validateEmail(email)){
      setErorEmail("Debes ingresar un email válido.")
      valid = false
    }
    return valid
  }

  const onSubmit = async()=>{
    if (!validateData()){
      return
    }
    setloading(true)
    const result = await forgotPassword(email)
    setloading(false)
  }

   return (
     <View style={styles.formContainer} >
        <Input
          placeholder="Ingresa tu email..."
          containerStyle={styles.inputForm}
          onChange={(e)=>setEmail(e.nativeEvent.text)}
          defaultValue={email}
          errorMessage={errorEmail}
          keyboardType="email-address"
          rightIcon={
            <Icon 
              type="material-community"
              name="at"
              iconStyle={styles.icon}
            />
          }
        />
        <Button 
          title="Recuperar Contraseña"
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btnRecover}
          onPress={onSubmit}
        />
        <LoadingModal isVisible={loading} text="Recuperando contraseña..." />
     </View>
   )
 }
 

 const styles = StyleSheet.create({
  formContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    marginTop:30,
  },
  inputForm:{
    width:"90%"
  },
  btnContainer:{
    marginTop:20,
    width:"85%",
    alignSelf:"center",
  },
  btnRecover:{
    backgroundColor:"#00a680"
  },
  icon:{
    color:"#c1c1c1"
  }
 })