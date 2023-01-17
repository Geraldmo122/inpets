import React, { useState } from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { TouchableOpacity, Platform, Text } from "react-native";

export function DateComponent({ date, setDate, time, setTime }) {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <TouchableOpacity onPress={() => setShow(true)}>
      <>
        <Text>{
          // show date and time in a readable format
          `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${time.getHours()}:${time.getMinutes()}`
        }</Text>
        {show && (
          <RNDateTimePicker
            mode="date"
            is24Hour={true}
            display="calendar"
            value={date}
            onChange={(event, selectedDate) => {
              const currentDate = selectedDate || date;
              setShow(Platform.OS === "ios");
              setDate(currentDate);
              setShow2(true);
            }}
          />
        )}
        {show2 && (
          <RNDateTimePicker
            mode="time"
            is24Hour={true}
            display="time"
            value={time}
            onChange={(event, selectedDate) => {
              const currentDate = selectedDate || time;
              setShow2(Platform.OS === "ios");
              setTime(currentDate);
            }}
          />
        )}
      </>
    </TouchableOpacity>
  );
}
