import React,{useState} from 'react'
import { View, Text,FlatList,TouchableOpacity } from 'react-native'
import {styles} from "./Map.styles"
import MapView ,{Marker} from 'react-native-maps'
import { palette } from '../../theme'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

import { screen, db } from '../../../utils'

import { collection, onSnapshot, orderBy, query} from "firebase/firestore"


import { useEffect } from 'react'
import { map} from "lodash"

export function Map() {

  const [clinicas, setCLinicas] = useState(null)

  useEffect(() => {
    
    const q = query(
      collection(db, "clinicas"),
      orderBy("createdAt","desc")  
    )

    onSnapshot(q,(snapshot) => {
        setCLinicas(snapshot.docs)
      
    })
    
  }, [])

  const [state, setState]=React.useState(clinicas)

    const [origin,setOrigin]=React.useState({
        latitude:-33.02259594819903,
        longitude:-71.55156905851906,
    })
  return ( 
    <View style={styles.content}>
      <MapView
                  style={styles.map}
                  initialRegion={{
                  latitude:origin.latitude,
                  longitude:origin.longitude,
                  latitudeDelta:0.09,
                  longitudeDelta:0.04,
                  }} >
                    
            
           
      </MapView>        

    </View>
  )
}