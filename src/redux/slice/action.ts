import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, getDatabase, ref, remove } from "firebase/database";

export const fetchCmsData:any = createAsyncThunk("cmsData/fetchCmsData", async () => {
    const db = getDatabase();
    const cmsRef = ref(db, "/courses"); // Replace with your database path
  
    const snapshot = await get(cmsRef);
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    } else {
      throw new Error("No data available");
    }
  });
  
  // Define an async action creator to delete data
  export const deleteCmsData:any = createAsyncThunk("cmsData/deleteCmsData", async (dataToDelete) => {
    const db = getDatabase();
    const cmsRef = ref(db, "/courses"); // Replace with your database path
  
    // Delete data in Firebase
    await remove(cmsRef);
  
    // Return the updated data (this may be a filtered data array, depending on your use case)
    return dataToDelete;
  });