import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@/lib/redux/features/user/userSlice'
import boardReducer from "@/lib/redux/features/user/boardSlice"
export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      board:boardReducer
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']