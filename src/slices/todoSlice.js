import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [],
    nextId: 0,
  },
  reducers: {
    addTask: (state, action) => {
      const newTasks = state.tasks;
      newTasks.push({ text: action.payload, id: state.nextId });
      state.nextId += 1;
      state.tasks = newTasks;
    },
    dropTask: (state, action) => {
      const newTasks = state.tasks.filter((task) => task.id != action.payload);
      state.tasks = newTasks;
    },
    modifyTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id == action.payload.id
      );
      state.tasks[index].text = action.payload.text;
    },
  },
});

export const { addTask, dropTask, modifyTask } = todoSlice.actions;

export default todoSlice.reducer;
