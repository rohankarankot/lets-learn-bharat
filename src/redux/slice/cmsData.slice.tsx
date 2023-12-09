import { createSlice } from "@reduxjs/toolkit"
import { deleteCmsData, fetchCmsData } from "./action"

const initialState: any = {
  cmsData: [],
  status: "idle", // Loading state
  error: null,
  searchData: [], // Error state
}

// Define an async action creator to fetch data

const cmsDataSlice = createSlice({
  name: "cmsData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCmsData.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchCmsData.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.cmsData = action.payload
      })
      .addCase(fetchCmsData.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
      .addCase(deleteCmsData.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.cmsData = action.payload
      })
    
  },
})

export default cmsDataSlice.reducer
