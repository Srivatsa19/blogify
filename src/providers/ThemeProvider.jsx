"use client"
import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext, useEffect, useState } from 'react'

export const ThemeProvider = ({children}) => {

    const {theme} = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []) // making sure it is a client side component

    if (mounted) {
        return (
            <div className={theme}>{children}</div>
        )
    }
}
