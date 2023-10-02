import { configureStore } from "@reduxjs/toolkit"
import CmsDataSlice from "./slice/cmsData.slice"
import AuthSlice from "./slice/authentication.slice"

export const store = configureStore({
  reducer: {
    cmsData: CmsDataSlice,
    auth: AuthSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
