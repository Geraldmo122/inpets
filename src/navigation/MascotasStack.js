import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { MascotasScreen} from "../screens/Mascotas/MascotasScreen";
import { AddMascotasScreen} from "../screens/Mascotas/AddMascotasScreen"
import { LoginScreen } from "../screens/Mascotas/LoginScreen"
import { RegisterScreen} from "../screens/Mascotas/RegisterScreen"

import { screen} from "../utils";


const Stack = createNativeStackNavigator();

export function MascotasStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name= {screen.mascotas.mascotas} 
            component={MascotasScreen} 
            options={{ title: "Cuenta" ,headerShown: false}} // Con headerShown: false, eliminamos la barra de arriba que dice Mascotas
            />

            <Stack.Screen 
            name= {screen.mascotas.login} 
            component={LoginScreen} 
            options={{ title: "Iniciar sesión"}}
            />

            <Stack.Screen 
            name= {screen.mascotas.register} 
            component={RegisterScreen} 
            options={{ title: "Crear cuenta"}}
            />

            <Stack.Screen 
            name= {screen.mascotas.addMascotas} 
            component={AddMascotasScreen} 
            options={{ title: "Nueva Mascota"}}
            />

        </Stack.Navigator>
    )
}