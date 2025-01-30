import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    isAutoIncrementing: false,
  },
  reducers: {
    increment: (state) => {
      state.count = Math.min(state.count + 1, 98)
    },
    decrement: (state) => {
      state.count = Math.max(state.count - 1, 0)
    },
    toggleAutoIncrement: (state) => {
      state.isAutoIncrementing = !state.isAutoIncrementing
    },
  },
})

export const { increment, decrement, toggleAutoIncrement } = counterSlice.actions
export default counterSlice.reducer

