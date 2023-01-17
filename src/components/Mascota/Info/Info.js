import { View } from 'react-native'
import React from 'react'
import {styles } from "./Info.styles"
import { Text,ListItem,Icon} from "react-native-elements"
import {map} from "lodash"


 export function Info(props) {
  

  const {miMascota}= props;
  const listInfo=[
    {
        descripcion:"Nombre:",
        text: miMascota.name,
        iconType:"material-community",
        iconName:"fountain-pen-tip",
    },
    {
        descripcion:"Tipo Mascota:",
        text: miMascota.tipoAnimal,
        iconType:"material-community",
        iconName:"fountain-pen-tip",
    },
    { 
        descripcion:"Raza:",
        text: miMascota.raza,
        iconType:"material-community",
        iconName:"fountain-pen-tip",
    },
    {
        descripcion:"Sexo:",
        text: miMascota.sexo,
        iconType:"material-community",
        iconName:"fountain-pen-tip",
    },
    {
        descripcion:"Fecha Nacimiento:",
        text: miMascota.fechaNacimiento,
        iconType:"material-community",
        iconName:"fountain-pen-tip",
    }
  ]
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Datos de la mascota</Text>
      {map(listInfo, (item,index)=>(
        <ListItem key={index} bottomDivider>
           <ListItem.Title style={styles.descripcion}>{item.descripcion}</ListItem.Title>
           <ListItem.Content>
                
                <ListItem.Title>{item.text}</ListItem.Title>
           </ListItem.Content>
        </ListItem>
      ))}
    </View>
  )
}