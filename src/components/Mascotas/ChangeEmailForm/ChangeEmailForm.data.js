import * as Yup from "yup"

export function initialValues(){
    return{
        emailActual:"",
        email:"",
        password:"",
    }
}

export function validationSchema(){
    return Yup.object({
        emailActual:Yup.string().required("El email es obligatorio"),
        email:Yup.string().email("El email no es valido").required("El email es obligatorio"),
        password:Yup.string().required("La contraseña es obligatoria"),
    })
}