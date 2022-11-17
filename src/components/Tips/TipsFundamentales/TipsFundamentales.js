import React from 'react';
import{StyleSheet,View,Text, FlatList, SafeAreaView,Image, ScrollView} from 'react-native';
import { map} from "lodash"
import {  ListItem, Icon} from "react-native-elements"

export  function TipsFundamentales() { 
  
  const tips = [
    {
      id: 1,
      name: 'Todo perro debe transitar en vía pública con collar y traílla. Todo perro de manejo especial además deberá llevar bozal y debe ser llevado por un adulto responsable.',
      image: require('../../../../assets/img/collar.png'),
    },
    {
      id: 2,
      name: 'No permita que su mascota deambule sola en la calle.',
      image: require('../../../../assets/img/peligro.png'),
    },
    {
      id: 3,
      name: 'Siempre que tu mascota defeque en la vía publica debes recogerla.',
      image: require('../../../../assets/img/aseo.png'),
    },
    {
      id: 4,
      name: 'Todo daño o molestia que cause la mascota es tu responsabilidad.',
      image: require('../../../../assets/img/curita.png'),
    },
    {
      id: 5,
      name: 'La vacunación antirrábica es obligatoria, y se debe realizar de forma anual a partir de los 3 meses de edad.',
      image: require('../../../../assets/img/vacuna.png'),
    },
    {
      id: 6,
      name: 'Debes desparasitar tu mascota cada 3 o 4 meses.',
      image: require('../../../../assets/img/desparasitarla.png'),
    },
    {
      id: 7,
      name: 'Enseñar a socializar un cachorro evitará accidentes en el futuro.',
      image: require('../../../../assets/img/socializar.png'),
    },
    {
      id: 8,
      name: 'Todo aquel que cause daño físico o psicológico a un animal deberá ser sancionado.',
      image: require('../../../../assets/img/sancion.png'),
    },
    {
      id: 9,
      name: 'Haz esterilizar tu mascota para evitar perros y gatos callejeros en nuestra comunidad.',
      image: require('../../../../assets/img/esterilizar.png'),
    },
    {
      id: 10,
      name: 'Recuerde que de una buena alimentación y agua fresca depende la salud de tu mascota.',
      image: require('../../../../assets/img/comida.png'),
    },
    {
      id: 11,
      name: 'Debes llevar periódicamente tu mascota al Médico Veterinario.',
      image: require('../../../../assets/img/veterinario.png'),
    },

  ];

const  itemSeparator = () => {
  return <View style= {styles.separator}></View>
}

  return (
    <ScrollView style={styles.content}>
    <Text style={styles.listHeadline}>Tips Fundamentales para la Tenencia Responsable de Mascotas</Text>
    {map(tips, (item, index)=>(
        <ListItem key={index} bottomDivider>
          <Image source={item.image} style = {styles.avatar}/>
          <ListItem.Content>
            
            <ListItem.Title>{item.name}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </ScrollView>
  );
    
}

const styles = StyleSheet.create({
  listHeader:{
    height: 95,
    color: '#14ab8b',
    textDecorationColor: '14ab8b',
    alignItems: 'center',
    justifyContent: 'center',

    
    
  },
  content:{
    marginHorizontal:15,
    marginBottom:10,
},
  separator: {
    height: 15,
    width: '100%',
    
    backgroundColor: '#14ab8b'
    
  },
  listHeadline:{
    color: '#000000',
    fontSize: 20,
    paddingTop: 20,
    marginBottom:15,
    fontWeight: 'bold',


  },
  item:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 29,
    
    
  }, /////
  avatarContainer:{
    backgroundColor: '#D9D9D9',
    borderRadius: 100,
    height: 57,
    width: 57,
    justifyContent: 'center',
    alignItems: 'center',
    
    
  },

  name:{
    fontWeight: '600',
    fontSize: 15,
    marginLeft: 13,
    fontWeight: 'bold',
    marginRight: 70
    
    
    
  },
  avatar:{
    height: 55,
    width: 55,

    
    
  },
});