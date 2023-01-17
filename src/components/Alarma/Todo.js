//renderiza cada todo

import * as React from "react";
import { StyleSheet, View, Text, Switch,Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Button} from "react-native-elements"

export function Todo({ id, text, date, time, reminder, isCompleted, deleteTodo }) {
  const [completed, setCompleted] = React.useState(isCompleted);
  const [reminderEnabled, setReminderEnabled] = React.useState(reminder);

  const handleCompleted = async () => {
    const todos = await AsyncStorage.getItem("@Todos");
    const parsedTodos = JSON.parse(todos);
    const updatedTodos = parsedTodos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !completed,
        };
      }
      return todo;
    });
    await AsyncStorage.setItem("@Todos", JSON.stringify(updatedTodos));
    setCompleted(!completed);
  };

  const handleReminder = async () => {
    const todos = await AsyncStorage.getItem("@Todos");
    const parsedTodos = JSON.parse(todos);
    const updatedTodos = parsedTodos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          reminder: !reminderEnabled,
        };
      }
      return todo;
    });
    await AsyncStorage.setItem("@Todos", JSON.stringify(updatedTodos));
    setReminderEnabled(!reminderEnabled);
  };

  const eliminarAlarma=()=>{
    Alert.alert(
      //titulo
      '¿Quieres eliminar a tu alarma?',

      //body
      '¿Seguro?',
      [
        {
          text:'Si',
          onPress:() =>{
            deleteTodo(id)
          }
        },
        
        {
          text:'No',
          onPress:()=>{
            console.log('No')
          }
        }
      ]
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.text}>
        {`${date.getDate() + 1}/${date.getMonth() + 1}/${date.getFullYear()}
        ${time.getHours()}:${time.getMinutes()}`}
      </Text>
      
      <Text style={styles.text}>Completa</Text>
      <Switch value={completed} onValueChange={handleCompleted} />
      <Button 
        title="Eliminar alarma" 
        containerStyle={styles.btnContainer} 
        buttonStyle={styles.btn} 
        onPress={()=>eliminarAlarma()}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer:{
    marginTop:20,
  },
  btn:{
    backgroundColor:"#00a680",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
  text: {
    fontSize: 20,
  },
});
