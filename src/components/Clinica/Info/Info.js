import React from 'react'
import { View } from 'react-native'
import {styles} from "./Info.styles"
import { Text, ListItem, Icon} from "react-native-elements"
import { map} from "lodash"
import { Map} from "../../../components/Shared"

export function Info(props) {

  const {clinica} = props;

  const listInfo= [
    {
      text: clinica.direccion,
      iconType:"material-community",
      iconName: "map-marker"
    },
    {
      text: clinica.telefono,
      iconType:"material-community",
      iconName: "phone"
    },
    {
      text: clinica.especialistas,
      iconType:"material-community",
      iconName: "medical-bag"
    },
    {
      text: "Horarios",
      iconType:"material-community",
      iconName: "directions"
    },
  ]
  const Horarios= [
    {
      text1:"Lunes: ",
      text: clinica.Horario[0],
    },
    {
      text1:"Martes: ",
      text: clinica.Horario[1],
    },
    {
      text1:"Miércoles: ",
      text: clinica.Horario[2],
    },
    {
      text1:"Jueves: ",
      text: clinica.Horario[3],
    },
    {
      text1:"Viernes: ",
      text: clinica.Horario[4],
    },
    {
      text1:"Sábado: ",
      text: clinica.Horario[5],
    },
    {
      text1:"Domingo: ",
      text: clinica.Horario[6],
    },
  ]

  return (
    <View style={styles.content} >
      <Text style={styles.title}>Información sobre la centro veterinaria</Text>
      <Map location={clinica.location} name={clinica.nombre} />
      {map(listInfo, (item, index)=>(
        <ListItem key={index} bottomDivider>
          <Icon
            type={item.iconType}
            name={item.iconName}
            color="#00a680"
          />
          <ListItem.Content>
            <ListItem.Title>{item.text}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        
      ))}

    {map(Horarios, (item, index)=>(
        <ListItem key={index} bottomDivider style={styles.item2}  >
          <ListItem.Content  style={styles.content2}>
            <ListItem.Title style={styles.text2}>{item.text1}{item.text}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        
      ))}
    </View>
  )
}