import { createSlice } from "@reduxjs/toolkit"
import provideData from "../../mock-data/card.json"
import { CmsDataState } from "@/utils/declareType/type"
const initialState: CmsDataState = {
  cmsData: [],
}
const CmsDataSlice = createSlice({
  name: "cmsData",
  initialState,

  reducers: {
    AllCmsData(state) {
      state.cmsData = provideData
    },
  },
})

export const { AllCmsData } = CmsDataSlice.actions

export default CmsDataSlice.reducer
