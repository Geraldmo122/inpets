import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { AlarmaScreen} from "../screens/Alarmas/AlarmaScreen";

import {AddTodo } from "../screens/Alarmas/AddTodo";

import { screen} from "../utils";

import {store} from "../../redux/store";
import {Provider} from 'react-redux';


const Stack = createNativeStackNavigator();

export function AlarmaStack() {
    return(

        <Provider store={store}>
        
             <Stack.Navigator>
                <Stack.Screen 
                name= {screen.alarmas.alarmas} 
                component={AlarmaScreen} 
                options={{ title: "Alarmas" ,headerShown: false}} // Con headerShown: false, eliminamos la barra de arriba que dice Mascotas
                />
                <Stack.Screen
                name="Agregar Tarea"
                component={AddTodo}
                options= {{presentation: "modal", headerShown: false}}
                />
            </Stack.Navigator>
        
       </Provider>
    )
}