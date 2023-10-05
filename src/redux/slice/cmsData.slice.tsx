import { CmsDataState } from "@/utils/declareType/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { get, getDatabase, ref } from "firebase/database";

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
export const fetchCmsData = ():any => async (dispatch: any) => {
  console.log("bm,m,");
  try {
    // Reference to the data location in the Realtime Database
    const db = getDatabase();
    const cmsRef = ref(db, "/courses"); // Replace 'course' with your database path

    // Use the `get` function to fetch data from the database
    const snapshot = await get(cmsRef);
    console.log("snapshot", snapshot);
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log("data///", data);
      dispatch(setAllCmsData(data));
    } else {
      console.log("No data available");
    }
  } catch (e) {
    console.error("Error:", e);
  }
};

export const { setAllCmsData } = CmsDataSlice.actions;

export default CmsDataSlice.reducer;
