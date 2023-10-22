import { Database } from "@/app/db/database";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, getDatabase, ref, remove } from "firebase/database";
import { useSelector } from "react-redux";

export const fetchCmsData:any = createAsyncThunk("cmsData/fetchCmsData", async (data:any) => {
   
    const cmsRef = ref(Database(), "/courses"); // Replace with your database path
  
    const snapshot = await get(cmsRef);
     if(data){
    return data
    }
   else  if (snapshot.exists()) {
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
 export const filteredData:any = createAsyncThunk("cmsData/filteredData",  ({value,allCmsData}:any) => {
  const filteredData:any = allCmsData.filter((item:any) =>
    item.title.toLowerCase().trim().includes(value.toLowerCase().trim())
  );

  return filteredData;
});

