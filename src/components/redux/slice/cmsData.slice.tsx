import { CmsDataState } from '@/components/utils/declareType/type'
import { createSlice } from '@reduxjs/toolkit'
import provideData from '../../../mock-data/card.json'
import React from 'react'
const initialState:CmsDataState={
  cmsData:[],
}
const CmsDataSlice =createSlice({
  name:"cmsData",
  initialState,

  reducers:{
    AllCmsData(state){
     state.cmsData=provideData
    }
  }
})

export const { AllCmsData } = CmsDataSlice.actions;

export default CmsDataSlice.reducer;
