import React, { useState} from 'react'
import { View, Text } from 'react-native'
import { Input, Button, Icon} from "react-native-elements"
import { styles } from '../ChangeDisplayNameForm/ChangeDisplayNameForm.styles';
import {useFormik, validateYupSchema} from "formik"
import { initialValues, validationSchema} from "./ChangeEmailForm.data"
import { 
    getAuth, 
    updateEmail, 
    EmailAuthProvider,
    reauthenticateWithCredential,
    signInWithEmailAndPassword
} from "firebase/auth"
import Toast  from "react-native-toast-message";


export function ChangeEmailForm( props) {
  const {onClose,onReload } = props;
  
  const [ showPassword, setShowPassword]= useState(false);

  const onShowPassword= () => setShowPassword((prevState)=> !prevState);

  const formik = useFormik({
    initialValues:initialValues(),
    validationSchema:validationSchema(),
    validateOnChange: false,
    onSubmit: async(formValue)=>{

      try{
          const auth = getAuth();
                await signInWithEmailAndPassword(
                    auth,
                    formValue.emailActual,
                    formValue.password
                    )
          try{
              const currentUser = getAuth().currentUser;

              const credential =EmailAuthProvider.credential(
                  currentUser.email,
                  formValue.password
                  );
              reauthenticateWithCredential(currentUser, credential);
              await updateEmail( currentUser, formValue.email)
                  
              onReload();
              onClose();
          }catch(error){
              Toast.show({
                  type:"error",
                  position:"bottom",
                  text1:"Error al cambiar el email"
              })
          }
        }catch (error){
          console.log(error)
          Toast.show({
            type:"error",
            position:"bottom",
            text1:"Usuario o contraseña incorrectos"
          })
        }
    }

  })
  return (
    <View style={styles.content}>

    <Input 
        placeholder='Correo electronico actual' 
        containerStyle={styles.input}
        rightIcon={
          <Icon 
              type='material-community' 
              name='at' 
              iconStyle={styles.icon} 
          />
      }

        onChangeText={(text) => formik.setFieldValue("emailActual", text)}
        errorMessage={formik.errors.emailActual}
      />


      <Input 
        placeholder='Contraseña' 
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={{  
          type:"material-community",
          name: showPassword ? "eye-off-outline" : "eye-outline",
          color:"#c2c2c2",
          onPress: onShowPassword
          }}
        onChangeText={(text)=> formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password} 
        />

      <Input 
        placeholder='Nuevo email' 
        containerStyle={styles.input} 
        rightIcon={
          <Icon 
              type='material-community' 
              name='at' 
              iconStyle={styles.icon} 
          />
      }
        onChangeText={(text)=> formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      

      <Button 
        title ="Cambiar email" 
        containerStyle ={styles.btnContainer} 
        buttonStyle={styles.btn} 
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  )
}