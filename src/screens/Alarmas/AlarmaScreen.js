import * as React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { todosData } from "../../../data/todos";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TodoList } from "../../components/Alarma/TodoList";
import { useNavigation } from "@react-navigation/native";
import { async } from "@firebase/util";

Notifications.setNotificationHandler({
  //permite poner settings en las notificaciones de nuestra app
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export function AlarmaScreen() {
  const [todos, setTodos] = useState([]);
  const navigation = useNavigation();

  const getTodos = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@Todos");
      console.log(jsonValue);
      if (jsonValue !== null) {
        console.log("Todos recuperados");

        const parsedTodos = JSON.parse(jsonValue);

        const todos = parsedTodos.map((todo) => {
          return {
            ...todo,
            date: new Date(todo.date),
            time: new Date(todo.time),
          };
        });
        setTodos(todos);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const eliminar = async (id) => {
    const filteredTodo = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(filteredTodo)
    await AsyncStorage.setItem("@Todos",JSON.stringify(filteredTodo))
  }
  
  useEffect(() => {
    getTodos();
  }, []);

  if (todos.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.presionar}>Presiona "+" para agregar una tarea</Text>
        <Text style={styles.noTareas}>No hay tareas pendientes</Text>
        <Image source={require("../../../assets/perrovaca.png")} style={styles.noTareaImg}/>
        
        <TodoList todosData={todos}  />
        <TouchableOpacity
          onPress={() => navigation.navigate("Agregar Tarea", {
          setTodos,
         })}
          style={styles.button}
        >
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
      </View>
      
    );
  }

  return (
    <View style={styles.container}>
      <TodoList todosData={todos} deleteTodos={eliminar}/>
      <TouchableOpacity
        onPress={() => navigation.navigate("Agregar Tarea", {
          setTodos,
        })}
        style={styles.button}
      >
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  pic: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignSelf: "flex-end",
    marginTop: 15,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 35,
    marginTop: 10,
  },
  button: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#000",
    position: "absolute",
    bottom: 50,
    right: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  plus: {
    fontSize: 40,
    color: "#fff",
    position: "absolute",
    top: -6,
    left: 9,
  },
  noTareas: {
    fontSize: 35,
    color: "#000000",
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    textDecorationStyle: "solid",
    textShadowColor: "000000",
    top: 180


  },
  noTareaImg: {
    bottom:90,
    resizeMode: "center",
    width: "80%",
    length:"80%",
    marginLeft: 40
  },
  presionar: {
    color: "#08a890",
     fontSize: 16,
    maxWidth: "85%",
    top: 550,
    textAlign: "center",
    marginLeft: 30


  }

});
