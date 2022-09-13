import React ,{ useState,useEffect} from 'react'
import { View, Text , ScrollView} from 'react-native'
import { Icon, Image, Button} from "react-native-elements"
import { screen, db } from '../../../utils'
import { styles} from "./MisMascotasScreen.styles"
import { getAuth, onAuthStateChanged} from "firebase/auth"
import { collection, onSnapshot, orderBy, query} from "firebase/firestore"
import { LoadingModal} from "../../../components/Shared"
import { ListMisMascotas} from "../../../components/MisMascotas/ListMisMascotas"
import { AddMisMascotasScreen} from "../AddMisMascotasScreen/AddMisMascotasScreen"


export function MisMascotasScreen(props) {
  const {navigation} = props;

  const [currentUser, setCurrentUser] = useState(null)

  const [misMascotas, setMisMascotas] = useState(null)
  
  //const uidUsuario=getAuth().currentUser.uid

  useEffect(() =>{
    const auth = getAuth()
    onAuthStateChanged(auth ,(user) =>{
      setCurrentUser(user)
    })
  }, [])


 
  
    const uidUsuario=getAuth().currentUser.uid

    useEffect(() => {
      
      const q = query(
        collection(db, uidUsuario),
        orderBy("createdAt","desc")  
      )

      onSnapshot(q,(snapshot) => {
        setMisMascotas(snapshot.docs)
        
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
      {(!misMascotas || !currentUser )? (
          
          <Text>  </Text>
        ):(
          <ListMisMascotas misMascotas={misMascotas} />
        )}
       
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
        <ScrollView centerContent={true} style={styles.content1} showsVerticalScrollIndicator={false}>
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