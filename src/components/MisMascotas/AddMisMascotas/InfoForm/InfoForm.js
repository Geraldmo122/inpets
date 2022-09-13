import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { styles} from "./InfoForm.styles"
import { Input} from "react-native-elements"

export function InfoForm(props) {
  const {formik}= props;

  return (
    <ScrollView style={styles.content}>
      <Input 
        placeholder=' Nombre de la mascota' 
        onChangeText={(text) => formik.setFieldValue("name",text)} 
        errorMessage={formik.errors.name}
      />

      <Input 
        placeholder=' La mascota es perro o gato'
        onChangeText={(text) => formik.setFieldValue("tipoAnimal",text)} 
        errorMessage={formik.errors.tipoAnimal}
      />
      <Input 
        placeholder=' Fecha de nacimiento de la mascota'
        onChangeText={(text) => formik.setFieldValue("fechaNacimiento",text)} 
        errorMessage={formik.errors.fechaNacimiento}
      />

      <Input 
        placeholder=' Raza de la mascota'
        onChangeText={(text) => formik.setFieldValue("raza",text)} 
        errorMessage={formik.errors.raza}
      />

      <Input 
        placeholder=' Sexo de la mascota'
        onChangeText={(text) => formik.setFieldValue("sexo",text)} 
        errorMessage={formik.errors.sexo}
      />

      <Input 
        placeholder=' Descripcion de la mascota' 
        multiline={true} 
        inputContainerStyle={styles.textArea}
        onChangeText={(text) => formik.setFieldValue("description",text)} 
        errorMessage={formik.errors.description}
      />
    </ScrollView>
  )
}