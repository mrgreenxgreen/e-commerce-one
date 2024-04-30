
// import { useEffect } from "react";
// import axios from 'axios'
import { BaseURI } from "../Utils/config";


// useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await axios.get(`${BaseURI}`);
//             const jsonData = response.data;
//             setItems(jsonData);
//             console.log(Items); 
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };
//     fetchData(); 
// }, []);

import axios from 'axios';

export interface Item {
  // Define the expected structure of each item in the response data
  // Replace with your actual properties (e.g., id, name, etc.)
  [key: string]: any;
}

export const fetchItems = async (fetchCategory:any): Promise<Item[]> => {
  try {
    const response = await axios.get(`${BaseURI}${fetchCategory}`);
    return response.data as Item[]; // Type assertion for safety
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error for centralized handling
  }
};