import { combineReducers, configureStore } from "@reduxjs/toolkit"
import CmsDataSlice from "./slice/cmsData.slice"
import AuthSlice from "./slice/authentication.slice"
import { persistReducer, persistStore } from "redux-persist"
import localStorage from "redux-persist/es/storage"

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
