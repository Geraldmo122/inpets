import { doc } from 'firebase/firestore';
import React from 'react'
import { View, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import {Text,Image} from "react-native-elements"
import { styles} from "./ListMisMascotas.styles"
import { useNavigation} from "@react-navigation/native"
import { screen} from "../../../utils"

export function ListMisMascotas(props) {

  const { misMascotas} = props;
  
  const navigation= useNavigation()

  const goToMisMascotas = (miMascota) => {
    navigation.navigate(screen.misMascotas.miMascota,{id: miMascota.id})
  }

  return (
    <View>
      <FlatList  
        data={misMascotas}
        renderItem={(doc)=> {
          const miMascota= doc.item.data();

          return(
            <TouchableOpacity onPress={()=> goToMisMascotas(miMascota)}>
              <Text style={styles.nameTitulo} >{miMascota.name}</Text>
              <View style={styles.content}>
                <Image source={{uri:miMascota.images[0]}} style={styles.image}/>
                <View>
                  <Text style={styles.name} >{miMascota.name}</Text>
                  <Text style={styles.info}>{miMascota.tipoAnimal}</Text>
                  <Text style={styles.info}>{miMascota.raza}</Text>
                  <Text style={styles.info}>{miMascota.sexo}</Text>
                  <Text style={styles.info}>{miMascota.fechaNacimiento}</Text>
                </View>
              </View>

            </TouchableOpacity>  
          )
        }}
      />
    </View>
  )
}