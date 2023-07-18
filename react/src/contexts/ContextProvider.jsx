import { createContext, useContext, useState } from "react";

// defaultValue state context
const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {}
})

// provide context provider
export const ContextProvider = ({children}) => {
    // define actual state
    const [user, setUser] = useState ({});
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN')); // useState(null) - > 'null' replaced by 'localStorage.getItem('ACCESS_TOKEN')'
    const setToken = (token) => {
        _setToken(token)
        if (token){
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }

    // the additional {{}} means a passing of an object. Only {} mean react
    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken
        }}> 

        {children}

        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)