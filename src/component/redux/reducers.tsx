import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit"
import axios from "axios"
import { State } from "../utils/interface"

const initialState : State = {
 show : "dontShow"
}

export const navSlice = createSlice({
  name : "Nav" ,
  initialState,
  reducers : {
    showSideNav : (state,action) => {
      console.log(action.payload)
        state.show = action.payload
    }
  }
})



export const {showSideNav} = navSlice.actions
