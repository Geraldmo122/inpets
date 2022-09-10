import * as Yup from "yup"

export function initialValues(){
    return{
        email:"",
        password:"",
        displayName:"",
    }
}

export function validationSchema(){
    return Yup.object({
        email:Yup.string().email("El email no es valido").required("El email es obligatorio"),
        password:Yup.string().required("Este campo es obligatorio"),
        displayName:Yup.string().required("El nombre de usuario es requerido"),
    })
}