import { createContext, useState } from "react";


export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const getUserFormLocalStorage = () => {
        let u=localStorage.getItem("user");
        if(u){
            return JSON.parse(u);
        }
    }

    const [alert, setAlert] = useState({});
    const [user, _setUser] = useState(getUserFormLocalStorage());

    const setUserLocalStorage = (user) => {
        localStorage.setItem("user", JSON.stringify(user));
        _setUser(user);
    }

    const values={
        user,
        setUser:setUserLocalStorage,
        setAlert,
        alert
    }
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;