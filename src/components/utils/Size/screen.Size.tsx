"use client";
import { useEffect, useState } from 'react';

export const Size = () => {
    const [fullHeight, setFullHeight] = useState<number>(0);
    const [fullWidth, setFullWidth] = useState<number>(0);

    useEffect(() => {

        const handleResize = () => {
            setFullHeight(window.innerHeight);
            setFullWidth(window.innerWidth);
        };


        if (typeof window !== 'undefined') {
            setFullHeight(window.innerHeight);
            setFullWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);

    return { fullHeight, fullWidth };
};