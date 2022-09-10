import React , {useState} from 'react'
import { View } from 'react-native'
import { styles} from "./ChangeDisplayNameForm.styles"
import {Input, Button,Icon} from "react-native-elements"
import { useFormik} from "formik"
import { initialValues, validationSchema} from "./ChangeDisplayNameForm.data"
import { getAuth, 
    updateProfile,
    updatePassword, 
    EmailAuthProvider,
    reauthenticateWithCredential,
    signInWithEmailAndPassword
} from "firebase/auth"
import Toast from "react-native-toast-message"
import { async } from '@firebase/util'

export function ChaneDisplayNameForm(props) {

  const [showPassword, setShowPassword] =useState(false);
  const onShowPassword= () => setShowPassword((prevState)=> !prevState);


  const{ onClose, onReload}= props;
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema:validationSchema(),
    validateOnChange:false,

    onSubmit: async(formValue)=> {

      try{
        const auth = getAuth();
        await signInWithEmailAndPassword(
            auth,
            formValue.email,
            formValue.password
            )
      
        try{
          const {displayName}= formValue;
          const currentUser= getAuth().currentUser;
          await updateProfile(currentUser,{ displayName});
          
          onReload();
          onClose();

        }catch(error){
          Toast.show({
            type:"error",
            position:"bottom",
            text1:"Error al cambiar nombre de usuario"
          })
        }
      }catch(error){
                console.log(error)
                Toast.show({
                    type:"error",
                    position:"bottom",
                    text1:"Usuario o contraseña incorrectos"
                })
      }
    }
  });
   
  return (
    <View style={styles.content}>
      <Input 
        placeholder='Correo electronico' 
        containerStyle={styles.input}
        rightIcon={
          <Icon 
              type='material-community' 
              name='at' 
              iconStyle={styles.icon} 
          />
      }

        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
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
        placeholder='Nombre de usuario' 
        rightIcon={{  
          type:"material-community",
          name:"account-circle-outline",
          color:"#c2c2c2",
          }} 
          onChangeText={(text) => formik.setFieldValue("displayName", text)}
          errorMessage={formik.errors.displayName}
          />

      <Button 
        title ="Cambiar nombre de Usuario" 
        containerStyle ={styles.btnContainer} 
        buttonStyle={styles.btn} 
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  )
}