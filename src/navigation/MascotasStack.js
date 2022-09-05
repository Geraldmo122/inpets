import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { MascotasScreen} from "../screens/Mascotas/MascotasScreen";
import { AddMascotasScreen} from "../screens/Mascotas/AddMascotasScreen"
import { LoginScreen } from "../screens/Mascotas/LoginScreen"
import { screen} from "../utils";


const Stack = createNativeStackNavigator();

export function MascotasStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name= {screen.mascotas.mascotas} 
            component={MascotasScreen} 
            options={{ title: "Mascotas" ,headerShown: false}} // Con headerShown: false, eliminamos la barra de arriba que dice Mascotas
            />

            <Stack.Screen 
            name= {screen.mascotas.login} 
            component={LoginScreen} 
            options={{ title: "Iniciar sesión"}}
            />

            <Stack.Screen 
            name= {screen.mascotas.addMascotas} 
            component={AddMascotasScreen} 
            options={{ title: "Nueva Mascota"}}
            />
        </Stack.Navigator>
    )
}