import React, {useState} from 'react'
import { View } from 'react-native'
import { styles} from "./ChangePasswordForm.styles"
import { Input, Button, Icon} from "react-native-elements"
import { useFormik} from "formik"
import { initialValues, validationSchema} from "./ChangePasswordForm.data"
import { 
    getAuth, 
    updatePassword, 
    EmailAuthProvider,
    reauthenticateWithCredential,
    signInWithEmailAndPassword
} from "firebase/auth"
import Toast from "react-native-toast-message"

export function ChangePasswordForm(props) {

    const {onClose}= props;

    const [showPassword, setShowPassword] =useState(false);
    const onShowPassword= () => setShowPassword((prevState)=> !prevState);

    const [showPassword2, setShowPassword2] =useState(false);
    const onShowPassword2= () => setShowPassword2((prevState)=> !prevState);

    const [showPassword3, setShowPassword3] =useState(false);
    const onShowPassword3= () => setShowPassword3((prevState)=> !prevState);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async(formValue)=>{

            try{
                const auth = getAuth();
                await signInWithEmailAndPassword(
                    auth,
                    formValue.email,
                    formValue.password
                    )
                try{
                    const currentUser = getAuth().currentUser;

                    const credential =EmailAuthProvider.credential(
                        currentUser.email,
                        formValue.password
                        );
                    reauthenticateWithCredential(currentUser, credential)

                    await updatePassword(currentUser, formValue.newPassword)
                    

                    onClose()
                }catch(error){
                    Toast.show({
                        type:"error",
                        position:"bottom",
                        text1:"Error al cambiar la contraseña"
                    })
                }
            }catch(error){
                Toast.show({
                    type:"error",
                    position:"bottom",
                    text1:"Usuario o contraseña incorrectos"
                })
            }
        }
    })
    
  return (
    <View style= { styles.content} >
        
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

        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />

        <Input 
            placeholder='Contraseña actual' 
            containerStyle={styles.input} 
            secureTextEntry={showPassword ? false : true}
            rightIcon={{
                type:"material-community",
                name: showPassword ? "eye-off-outline" : "eye-outline",
                color:"#c2c2c2",
                onPress: onShowPassword,  
            }}
            onChangeText={(text)=>formik.setFieldValue("password",text)}
            errorMessage={formik.errors.password}
        />
    
        <Input 
            placeholder='Nueva contraseña' 
            containerStyle={styles.input} 
            secureTextEntry={showPassword2 ? false : true}
            rightIcon={{
                type:"material-community",
                name: showPassword2 ? "eye-off-outline" : "eye-outline",
                color:"#c2c2c2",
                onPress: onShowPassword2,  
            }}
            onChangeText={(text)=>formik.setFieldValue("newPassword",text)}
            errorMessage={formik.errors.newPassword}
        />

        <Input 
            placeholder='Repite la nueva contraseña' 
            containerStyle={styles.input} 
            secureTextEntry={showPassword3 ? false : true}
            rightIcon={{
                type:"material-community",
                name: showPassword3 ? "eye-off-outline" : "eye-outline",
                color:"#c2c2c2",
                onPress: onShowPassword3,  
            }}
            onChangeText={(text)=>formik.setFieldValue("confirmNewPassword",text)}
            errorMessage={formik.errors.confirmNewPassword}
        />

        <Button 
            title="Cambiar contraseña" 
            containerStyle={styles.btnContainer} 
            buttonStyle={styles.btn} 
            onPress={formik.handleSubmit}
            loading={formik.isSubmitting}
            />
    </View>
  )
}