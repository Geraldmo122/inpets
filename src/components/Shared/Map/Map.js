import React from 'react'
import { View, Text } from 'react-native'
import {styles} from "./Map.styles"
import MapView  from "react-native-maps"

import openMap from "react-native-open-maps"

export function Map(props) {

    const {location, name} = props;

    const openAppMap= () => {
        openMap({
            latitude: location.latitude,
            longitude: location.longitude,
            end: name,
            zoom:19,
            
        })
    }

  return (
  
    0

  )
}