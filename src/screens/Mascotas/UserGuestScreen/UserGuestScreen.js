import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, ScrollView } from 'react-native'
import {Text, Button, Image} from "react-native-elements"
import { styles} from "./UserGuestScreen.styles"
import { screen} from "../../../utils"

export function UserGuestScreen() {

  const navigation = useNavigation();

  const goToLogin = () => {
      navigation.navigate(screen.mascotas.login);
      console.log('Ir al login');
  };

  return (
    <ScrollView centerContent={true} style={styles.content}>
      <Text style={styles.title1}>InPets</Text>
      <Image 
        source={require("../../../../assets/img/perroygato.png")} 
        style={styles.image}

      />
      <Text style={styles.title}> Consultar tu Perfil de inPets</Text>
      <Text style={styles.descripcion}> InPets es una aplicación creada enfocada en los perros y gatos para que las personas que posean estos,  puedan efectuar un correcto cuidado a su mascota</Text>
      <Button
        title="Iniciar sesión"
        onPress={goToLogin}
        buttonStyle={styles.btnStyle}

      />
    </ScrollView>
  );
}