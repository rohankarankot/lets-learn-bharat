import { getDatabase } from 'firebase/database';
import React from 'react'

export const  Database:any = () => {    
          const db = getDatabase();

  return db
}


