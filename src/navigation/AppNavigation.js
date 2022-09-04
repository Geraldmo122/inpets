import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon} from "react-native-elements"

import{ screen} from "../utils"
//Screens
import { AlarmaScreen } from "../screens/AlarmaScreen";
import { ClinicasScreen } from "../screens/ClinicasScreen"
import { TipsScreen } from "../screens/TipsScreen"
import { MascotasScreen } from "../screens/MascotasScreen"

const Tab = createBottomTabNavigator();

export function AppNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route })=>({
                tabBarActiveTintColor:"#00a680",
                tabBarInactiveTintColor:"#646464",
                tabBarIcon :({ color, size }) => screenOptions(route, color, size),
            })}
        
        >
            <Tab.Screen name={screen.mascotas.tab} component={MascotasScreen} options={{ title: "Mascotas"}} />
            <Tab.Screen name={screen.alarmas.tab} component={AlarmaScreen} options={{ title: "Alarmas"}} />
            <Tab.Screen name={screen.clinicas.tab} component={ClinicasScreen} options={{ title: "Clinicas"}}/>
            <Tab.Screen name={screen.tips.tab}component={TipsScreen} options={{ title: "Tips"}} />

        </Tab.Navigator>
    )
}

function screenOptions(route, color, size){
    let iconName;
    
    if(route.name === screen.mascotas.tab){
        iconName= "home-outline";
    }
    
    if(route.name === screen.alarmas.tab){
        iconName= "heart-outline";
    }

    if(route.name === screen.clinicas.tab){
        iconName= "compass-outline";
    }

    if(route.name === screen.tips.tab){
        iconName= "magnify";
    }    
    return(
        <Icon type="material-community" name={iconName} color={color} size={size} />
    )
}
