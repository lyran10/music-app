import {configureStore} from "@reduxjs/toolkit"

import { navSlice } from "./reducers"


export const store = configureStore({
  reducer : {
    navData : navSlice.reducer,
  } 
})


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>