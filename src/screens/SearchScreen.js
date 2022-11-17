import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'
import {SearchBar, ListItem,Avatar,Icon} from "react-native-elements"
import { LoadingModal} from "../components/Shared"
import {collection, query, startAt, endAt,limit,orderBy,getDoc, getDocs} from "firebase/firestore"
import {db, screen} from "../utils"
import { useEffect } from 'react'
import {size, map} from "lodash"
import { View } from 'react-native'
import { useNavigation} from "@react-navigation/native"

export function SearchScreen() {
  const [searchText, setSearchText]= useState("")
  const [searchResults, setSearchResults]= useState(null)
  const navigation = useNavigation()

  console.log(size(searchResults))
  useEffect(()=>{
    (async()=>{
        const q = query(
            collection(db,"clinicas"),
            orderBy("especialistas"),
            startAt(searchText),
            limit(20),

        )

        const querySnapshot = await getDocs(q)
        setSearchResults(querySnapshot.docs)
    }) ()
  }, [searchText])

  const goToClinica = (idClinica) => {
    navigation.navigate(screen.clinicas.tab, {
        screen: screen.clinicas.clinica,
        params:{
            id: idClinica,
        }
    })
  }

  return (
    <>
      <SearchBar 
      placeholder='Buscar centro veterinario' 
      value={searchText}
      onChangeText={(text)=>setSearchText(text)}
      />

      {!searchResults && <LoadingModal show text="Cargando" />}

      <ScrollView>
        {size (searchResults) === 0 ? (
            <View style={{alignItems:"center", marginTop:20}}>
                <Text>No se ha encontrado centro veterinario</Text>
            </View>
        ) : (
            map(searchResults, (item)=>{
                const data= item.data()

                return(
                    <ListItem    
                        key={data.id} 
                        bottomDivider 
                        onPress={()=> goToClinica(data.id)}
                    >
                        <Avatar source={{uri: data.images[0]}} rounded />
                        <ListItem.Content>
                            <ListItem.Title>{data.nombre}</ListItem.Title>
                        </ListItem.Content>
                        <Icon type="material-community" name="chevron-right" />
                    </ListItem>
                )
            })
        )}
      </ScrollView>
    </>
  )
}