import { createContext, useState, useReducer, useEffect } from "react";
import { readingListReducer, readingListActions } from "../reducers/readingListReducer";


export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const getUserFormLocalStorage = () => {
        let u=localStorage.getItem("user");
        if(u){
            return JSON.parse(u);
        }
    }
    
    const [alert, setAlert] = useState({});
    const [readingList, dispatch] = useReducer(readingListReducer, []);
    const [user, _setUser] = useState(getUserFormLocalStorage());
   
    const setUser=(user)=>{
        _setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    }

  

    


    const values={
        user,
        setUser,
        alert,
        setAlert,
        readingList,
        addToReadingList:
            (book) => dispatch({
                type: readingListActions.addToReadingList,book
            }),
        removeFromReadingList:
            (book) => dispatch({
                type: readingListActions.removeFromReadingList,book
            }),
        clearReadingList:
            () => dispatch({
                type: readingListActions.clearReadingList,
            }),
        }
    

        
        
    
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;