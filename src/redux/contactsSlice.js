import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksInitialState = []

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        if (state.find(element => element.name === action.payload.name)) {
          alert(`${action.payload.name} is already in contacts.`)
          return
        }
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});


export const { addContact, deleteContact } = tasksSlice.actions;
export const contactReducer = tasksSlice.reducer;