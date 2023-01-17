import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType'
import React from 'react'
import { View } from 'react-native'
import { Text, Rating} from "react-native-elements"
import {styles} from "./Header.styles"

export function Header(props) {

  const { clinica } = props

  return (
    <View style={styles.content} >
      <View style={styles.titleView}>
        <Text style={styles.name}>{clinica.nombre}</Text>
        
      </View>
      <Rating 
        imageSize={20} 
        readonly 
        startingValue={clinica.raingMedia }

      />
      <Text style={styles.descripcion}>{clinica.descripcion}</Text>
    </View>
  )
}