import { CmsDataState } from "@/utils/declareType/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: CmsDataState = {
  cmsData: [],
};

const CmsDataSlice = createSlice({
  name: "cmsData",
  initialState,
  reducers: {
    setAllCmsData(state, action: PayloadAction<any[]>) {
      state.cmsData = action.payload;
    },
  },
});

// Define an async action creator to fetch data
export const fetchCmsData = ():any=> async (dispatch:any) => {
  try {
    const response = await fetch(
      'https://learn-bharat-default-rtdb.firebaseio.com/courses.json'
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const courseData = await response.json();

    if (courseData) {
      // Convert the data to an array if necessary (optional)
      const dataArray = Object.values(courseData);

      // Dispatch the action with the fetched data
      dispatch(CmsDataSlice.actions.setAllCmsData(dataArray));
    } else {
      // Handle the case when data is empty
      dispatch(CmsDataSlice.actions.setAllCmsData([]));
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error, e.g., show a message to the user
  }
};

export const { setAllCmsData } = CmsDataSlice.actions;

export default CmsDataSlice.reducer;
