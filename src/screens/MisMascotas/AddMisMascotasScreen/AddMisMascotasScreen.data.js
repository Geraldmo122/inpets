import { yupToFormErrors } from "formik"
import * as Yup from "yup"

export function initialValues(){
    return{
        name:"",
        tipoAnimal:"",
        fechaNacimiento:"",
        raza:"", 
        sexo:"",
        description:"",
        images: []
    }
}

export function validationSchema(){
    return Yup.object({
        name: Yup.string().required("Campo obligatorio"),
        tipoAnimal: Yup.string().required("Campo obligatorio"),
        fechaNacimiento: Yup.string().required("Campo obligatorio"),
        raza: Yup.string().required("Campo obligatorio"),
        sexo: Yup.string().required("Campo obligatorio"),
        description: Yup.string().required("Campo obligatorio"),
        images: Yup.array().min(1, "Se requiere una imagen de la mascota").required("La imagen es requerida"),

    })
}