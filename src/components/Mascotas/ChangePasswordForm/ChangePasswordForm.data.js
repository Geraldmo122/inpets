import * as Yup from "yup"

export function initialValues(){
    return{
        email:"",
        password:"",
        newPassword:"",
        confirmNewPassword:"",
    }
}

export function validationSchema(){
    return Yup.object({
        email:Yup.string().email("El email no es valido").required("El email es obligatorio"),

        password:Yup.string().required("Este campo es obligatorio"),
        newPassword:Yup.string().required("Este campo es obligatorio"),
        confirmNewPassword:Yup.string().required("Este campo es obligatorio").oneOf([Yup.ref("newPassword")],"Las contraseñas deben ser iguales"),

    })
}