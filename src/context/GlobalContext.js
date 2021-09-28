//React
import React, {useReducer, useState } from 'react'
import {createContext } from "react";

//Themes
import { theme1 } from '../themes';
import AppReducer from './AppReducer';

const GlobalContext = createContext();
const initialState = {
    numero1:'',
    operando: '',
    numero2: '',
    resultado:'',
}


export function GlobalContextProvider({children}) {

    const [theme, setTheme] = useState(theme1);
    const [state, dispatch] = useReducer(AppReducer,initialState);

    return (
        <GlobalContext.Provider value={{ theme, setTheme, state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;
