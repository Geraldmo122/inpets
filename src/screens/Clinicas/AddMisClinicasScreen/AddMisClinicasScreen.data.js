import { yupToFormErrors } from "formik"
import * as Yup from "yup"

export function initialValues(){
    return{
        nombre:"",
        horarios:"",
        telefono:"",
        descripcion:"", 
        direccion:"",
        images: [],
        location:null
    }
}

export function validationSchema(){
    return Yup.object({
        nombre: Yup.string().required("Campo obligatorio"),
        horarios: Yup.string().required("Campo obligatorio"),
        telefono: Yup.string().required("Campo obligatorio"),
        descripcion: Yup.string().required("Campo obligatorio"),
        direccion: Yup.string().required("Campo obligatorio"),
        images: Yup.array().min(1, "Se requiere una imagen de la Clinica veterinaria").required("La imagen es requerida"),
        location: Yup.object().required("La localizacion es requerida")
    })
}