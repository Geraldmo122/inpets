import * as React from "react";
import { FlatList, Text, View } from "react-native";
import {Todo} from '../../components/Alarma/Todo';


export function TodoList({ todosData , deleteTodos}) {
    return (
        <FlatList 
            data= {todosData}

            keyExtractor= {item => item.id.toString()}
            renderItem= {({item}) => 
            <Todo {...item} 
            deleteTodo={deleteTodos} 
            />} 
        />
    )
}


