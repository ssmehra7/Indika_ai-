import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const unreadSlice = createSlice({
  name: 'unread',
  initialState,
  reducers: {
    setunread: (state) => {
      state.value = true
    },
    unsetunread:(state) =>{
        state.value = false
    }
    
  },
})


export const { setunread,unsetunread } = unreadSlice.actions

export default unreadSlice.reducer