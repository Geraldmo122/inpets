import React ,{ useState,useEffect} from 'react'
import { View, Text , ScrollView} from 'react-native'
import { Icon, Image, Button} from "react-native-elements"
import { screen } from '../../../utils'
import { styles} from "./MisMascotasScreen.styles"
import { getAuth, onAuthStateChanged} from "firebase/auth"

export function MisMascotasScreen(props) {
  const {navigation} = props;

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() =>{
    const auth = getAuth()
    onAuthStateChanged(auth ,(user) =>{
      setCurrentUser(user)
    })
  }, [])

  const goToAddMisMascotas = () => {

    navigation.navigate(screen.misMascotas.addMisMascotas)
  }

  const goToInciar = () => {
    //navigation.navigate(screen.mascotas.tab, {screen: screen.mascotas.mascotas })
    navigation.navigate(screen.mascotas.login)
  }

  return (
    <View style={styles.content}>
 
      {currentUser && (

        <Icon
          reverse
          type='material-community'
          name="plus"
          color="#00a680"
          containerStyle={styles.btnContainer}
          onPress={goToAddMisMascotas}
          />
          )}
      {!currentUser &&(
        <ScrollView centerContent={true} style={styles.content1}>
        <Text style={styles.title1}>InPets</Text>
        <Image 
          source={require("../../../../assets/img/perroygato.png")} 
          style={styles.image}
  
        />
        <Text style={styles.title}> Debes iniciar sesión para agregar a tu mascota</Text>
        <Text style={styles.descripcion}> </Text>
        <Button
          title="Iniciar sesión"
          onPress={goToInciar}
          buttonStyle={styles.btnStyle}
  
        />
      </ScrollView>
 
      )}
    </View>
    
  )
}