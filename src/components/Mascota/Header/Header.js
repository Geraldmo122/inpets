import { View, Text } from 'react-native'
import React from 'react'
import {styles} from "./Header.styles"

export function Header(props) {
    const{miMascota}= props;

  return (
    <View style={styles.content}>
      <Text style={styles.titulo} >Mi mascota</Text>
    </View>
  )
}