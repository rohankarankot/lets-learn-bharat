// api.js (or a similar file for Redux Thunks)

import { allCmsData } from "./cmsDataSlice"; // Import your action

export const fetchData = () => async (dispatch) => {
  try {
    const response = await fetch('/api/getData'); // Replace with your API route
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // Dispatch the action with the fetched data
    dispatch(allCmsData(data));

    console.log('Data from the API:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
