import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  Switch,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { DateComponent } from "../../components/Alarma/Date";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import * as Notifications from "expo-notifications";

export function AddTodo({ route }) {
  const { setTodos } = route.params;
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [withAlert, setWithAlert] = useState(false);
  const [listTodos, setListTodos] = useState([]);
  const navigation = useNavigation();

  //CON RESPECTO A ESTO :  hour: isToday ? date.toString() : new Date(date).getDate() + 24 * 60 * 60 * 1000,
  /*
                aca le estamos pasando el dia de hoy, si es hoy, 
        le damos la fecha de ahora, pero si queremos que el todo sea para mañana le damos una nueva date
        new Date (la date que tenemos hoy + 1 dia porque sera para el dia siguiente, entonces:
        utilizamos getdate() que nos da el dia del mes utilizando el local time
        a este dia le agregamos 24 horas y lo multiplicamos por 60 segundos que tiene cada minuto
        y todo eso por 60 minutos que tiene cada hora, y todo eso por 1000
        
        dsps de las multiplicaciones, seria la misma + 24 horas.
    */

  const addTodo = async () => {
    try {
      const newTodo = {
        id: listTodos.length + 1,
        text: name,
        date: date,
        time: time,
        isCompleted: false,
        reminder: withAlert,
      };
      if (withAlert) {
        await scheduleTodoNotification(newTodo);
        console.log("Notificacion programada");
      }
      const newTodos = [...listTodos, newTodo];
      AsyncStorage.setItem("@Todos", JSON.stringify([...listTodos, newTodo]));
      setListTodos(newTodos);
      setTodos(newTodos);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  const scheduleTodoNotification = async (todo) => {
    const dateA = new Date(todo.date);
    const time = new Date(todo.time);
    const day = dateA.getDate();
    const month = dateA.getMonth();

    const hour = time.getHours();
    const minute = time.getMinutes();

    try {
      const notificationID = await Notifications.scheduleNotificationAsync({
        content: {
          //contenido de la notificacion
          title: "¡Recordatorio InPets!",
          body: todo.text,
        },
        trigger: {
          day,
          month,
          hour,
          minute,
          repeats: true,
        },
      });
    } catch (error) {
      console.log(error);
      alert("Error al programar la notificacion");
    }
  };

  const getTodos = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@Todos");
      console.log(jsonValue);
      if (jsonValue !== null) {
        const parsedTodos = JSON.parse(jsonValue);

        const todos = parsedTodos.map((todo) => {
          return {
            ...todo,
            date: new Date(todo.date),
            time: new Date(todo.time),
          };
        });
        setListTodos(todos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Agregar Tarea</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Nombre</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Task"
            placeholderTextColor="#00000030"
            onChangeText={(text) => {
              setName(text);
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Fecha</Text>
          <DateComponent
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
          />
        </View>
        <View
          style={[
            styles.inputContainer,
            { paddingBottom: 0, alignItems: "center" },
          ]}
        >
          <View>
            <Text style={styles.inputTitle}>Alerta</Text>
            <Text style={{ color: "#00000040", fontSize: 12, maxWidth: "85%" }}>
              Recibiras una alerta a la hora que programes este recordatorio
            </Text>
          </View>
          <Switch
            value={withAlert}
            onValueChange={(value) => {
              setWithAlert(value);
            }}
          />
        </View>

        <TouchableOpacity onPress={addTodo} style={styles.button}>
          <Text style={{ color: "white" }}>Listo</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 35,
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
    paddingHorizontal: 30,
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 24,
  },
  textInput: {
    width: "80%",
    borderBottomColor: "#00000030",
    borderBottomWidth: 1,
    paddingLeft: 10,
  },
  inputContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 30,
  },
  button: {
    marginTop: 30,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    height: 46,
    borderRadius: 11,
  },
});
