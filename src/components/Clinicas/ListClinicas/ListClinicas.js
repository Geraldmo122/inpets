import { doc } from 'firebase/firestore';
import React from 'react'
import { View, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import {Text,Image} from "react-native-elements"
import { styles} from "./ListClinicas.styles"
import { useNavigation} from "@react-navigation/native"
import { screen} from "../../../utils"

export function ListClinicas(props) {

  const { clinicas} = props;
  
  const navigation= useNavigation()

  const goToClinica = (clinica) => {
    navigation.navigate(screen.clinicas.clinica,{id: clinica.id})
  }

  return (
    <View>
      <FlatList  
        data={clinicas}
        renderItem={(doc)=> {
          const clinica= doc.item.data();

          return(
            <TouchableOpacity onPress={()=> goToClinica(clinica)}>
              <Text style={styles.nameTitulo} >{clinica.name}</Text>
              <View style={styles.content}>
                <Image source={{uri:clinica.images[0]}} style={styles.image}/>
                <View>
                  <Text style={styles.name} >{clinica.nombre}</Text>
                  <Text style={styles.info}>{clinica.telefono}</Text>
                  <Text style={styles.info}>{clinica.direccion}</Text>
                  <Text style={styles.info}>{clinica.descripcion}</Text>
                </View>
              </View>

            </TouchableOpacity>  
          )
        }}
      />
    </View>
  )
}