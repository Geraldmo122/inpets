import { doc } from 'firebase/firestore';
import React from 'react'
import { View, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import {Text,Image} from "react-native-elements"
import { styles} from "./Carousel2.styles"
import { useNavigation} from "@react-navigation/native"
import { screen} from "../../../utils"

export function Carousel2(props) {

  const{imagenPrincipal}= props;
  
  return(
    <View>
        <Image source={{uri:imagenPrincipal}} style={styles.image} />
    </View>

  )
}