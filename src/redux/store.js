import { configureStore } from '@reduxjs/toolkit'
import unreadReducer from "./slices/showunreadslice"

export const store = configureStore({
  reducer: {
    unread:unreadReducer
  },
})