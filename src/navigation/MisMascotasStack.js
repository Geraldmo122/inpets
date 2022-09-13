import { createNativeStackNavigator} from "@react-navigation/native-stack";
import {  MisMascotasScreen} from "../screens/MisMascotas/MisMascotasScreen/MisMascotasScreen";
import { AddMisMascotasScreen} from "../screens/MisMascotas/AddMisMascotasScreen/AddMisMascotasScreen"
import { MiMascotaScreen} from "../screens/MisMascotas/MiMascotaScreen"


import { screen} from "../utils";


const Stack = createNativeStackNavigator();

export function MisMascotasStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name= {screen.misMascotas.misMascotas} 
            component={MisMascotasScreen} 
            options={{ title: "Mis Mascotas" }} // Con headerShown: false, eliminamos la barra de arriba que dice Mascotas
            />

            <Stack.Screen 
            name= {screen.misMascotas.addMisMascotas} 
            component={AddMisMascotasScreen} 
            options={{ title: "Nueva Mascota"}}
            />

            <Stack.Screen 
            name= {screen.misMascotas.miMascota} 
            component={MiMascotaScreen} 
            options={{ title: "Mi Mascota"}}
            />

        </Stack.Navigator>
    )
}