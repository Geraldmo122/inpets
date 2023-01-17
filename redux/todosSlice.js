import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos : []
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodosReducer:(state, action) => {
            state.todos = action.payload
            console.log(state.todos);
        },
        addTodoReducer:(state, action) => {
            state.todos.push(action.payload)   //agregamos un Todo
        },
        hideCompletedReducer:(state) => {
            state.todos = state.todos.filter(todo => !todo.isCompleted)
        },
        updateTodoReducer:(state,action) => {
            state.todo = state.todos.map(todo => {
                if(todo.id === action.payload.id)  {
                    todo.isCompleted = !todo.isCompleted
                }
                return todo;
                    
            })
        },
        deleteTodoReducer:(state,action) => {
            const id = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== id);
        }

    },
});

export const {
    setTodosReducer,
    addTodoReducer,
    hideCompletedReducer,
    updateTodoReducer,
    deleteTodoReducer,
} = todosSlice.actions;

export default todosSlice.reducer;









//NO FUNCIONA:

/* import {createSlice} from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
    todos : [],
};

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        setTodosReducer:(state, action) => {
            state.todos = action.payload
            console.log(state.todos);
        },
        addTodoReducer:(state, action) => {
            state.todos.push(action.payload)   //agregamos un Todo
        },
        hideCompletedReducer:(state) => {
            state.todos = state.todos.filter(todo => !todo.isCompleted)
        },
        updateTodoReducer:(state,action) => {
            state.todo = state.todos.map(todo => {
                if(todo.id === action.payload.id)  {
                    todo.isCompleted = !todo.isCompleted;
                }
                return todo;
                    
            });
        },
        deleteTodoReducer:(state,action) => {
            const id = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== id);
            state.todos = todos;
        }

    },
});

export const {
    setTodosReducer,
    addTodoReducer,
    hideCompletedReducer,
    updateTodoReducer,
    deleteTodoReducer,
} = todosSlice.actions;

export default todosSlice.reducer;  */