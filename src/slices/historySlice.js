import { createSlice } from "@reduxjs/toolkit";

export const historySlice = createSlice({
  name: "history",
  initialState: {
    tasks: [],
    nextId: 0,
  },
  reducers: {
    addHistoryTask: (state, action) => {
      const newTasks = state.tasks;
      newTasks.push({
        text: action.payload.text,
        status: action.payload.status,
        id: state.nextId,
        date: new Date(),
      });
      state.nextId += 1;
      state.tasks = newTasks;
    },
  },
});

export const { addHistoryTask } = historySlice.actions;

export default historySlice.reducer;
