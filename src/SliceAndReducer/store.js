import { configureStore } from '@reduxjs/toolkit'
import listReducer from './Slice/listSlice'
export const store = configureStore({
  reducer: {
    list: listReducer
  },
})