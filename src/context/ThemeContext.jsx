"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getThemeFromLocalStorage = () => {
    if (typeof window !== "undefined") { // if only it is a client component
        const value = localStorage.getItem("theme");
        return value || "light"; // first time the local storage will be empty so the default theme is light
    }
    // return "light";
}

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
        return getThemeFromLocalStorage();
    });

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme])

    return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>
}