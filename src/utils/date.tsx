'use client'
import { useEffect, useState } from "react";

export const DateFinder=()=>{
    const [date,setDate]=useState<Date>();
    useEffect(()=>{
        return setDate(new Date());
    },[date])
    return date
}