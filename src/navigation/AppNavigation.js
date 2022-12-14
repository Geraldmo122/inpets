import React ,{ useState,useEffect} from 'react'

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon} from "react-native-elements";
import { MascotasStack} from "./MascotasStack";
import { AlarmaStack} from "./AlarmaStack";
import { ClinicasStack} from "./ClinicasStack";
import { TipsStack} from "./TipsStack";
import { MisMascotasStack } from "./MisMascotasStack"
import { getAuth, onAuthStateChanged} from "firebase/auth"


import{ screen} from "../utils"
//Screens


export function AppNavigation() {

const Tab = createBottomTabNavigator();
const [currentUser, setCurrentUser] = useState(null)
useEffect(() =>{
    const auth = getAuth()
    onAuthStateChanged(auth ,(user) =>{
      setCurrentUser(user)
    })
  }, [])

    return (
        <Tab.Navigator
            screenOptions={({ route })=>({
                headerShown: false,
                tabBarActiveTintColor:"#00a680",
                tabBarInactiveTintColor:"#646464",
                tabBarIcon :({ color, size }) => screenOptions(route, color, size),
            })}
        
        >
            <Tab.Screen 
            name={screen.mascotas.tab} 
            component={MascotasStack} 
            options={{ title: "Cuenta"}} 
            />


        {!currentUser && (
          
          <Tab.Screen 
            name={screen.misMascotas.tab} 
            component={MascotasStack} 
            
            options={{ title: "Mis Mascotas"}} 
            />
        )}
        
        {currentUser && (
            <Tab.Screen 
            name={screen.misMascotas.tab} 
            component={MisMascotasStack} 
            options={{ title: "Mis Mascotas"}} 
            />
        )}


            

            <Tab.Screen 
            name={screen.alarmas.tab} 
            component={AlarmaStack} 
            options={{ title: "Alarmas"}} 
            />

            <Tab.Screen 
            name={screen.clinicas.tab} 
            component={ClinicasStack} 
            options={{ title: "Clinicas"}}
            />

            <Tab.Screen 
            name={screen.tips.tab}
            component={TipsStack} 
            options={{ title: "Tips"}} 
            />

        </Tab.Navigator>
    )
}

function screenOptions(route, color, size){
    let iconName;
    
    if(route.name === screen.mascotas.tab){
        iconName= "home-outline";
    }
    if(route.name === screen.misMascotas.tab){
        iconName= "heart-outline";
    }
    
    if(route.name === screen.alarmas.tab){
        iconName= "compass-outline";
    }

    if(route.name === screen.clinicas.tab){
        iconName= "map-marker-radius";
    }

    if(route.name === screen.tips.tab){
        iconName= "magnify";
    }    
    return(
        <Icon type="material-community" name={iconName} color={color} size={size} />
    )
}
