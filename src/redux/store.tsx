import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import localStorage from "redux-persist/es/storage"
import AuthSlice from "./slice/authentication.slice"
import CmsDataSlice from "./slice/cmsData.slice"

const persistConfig = {
  key: "root",
  storage: localStorage,
}

const rootReducer = combineReducers({
  cmsData: CmsDataSlice,
  auth: AuthSlice,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
