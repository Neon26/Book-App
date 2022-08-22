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
    const [user, _setUser] = useState(getUserFormLocalStorage());
   
    const setUserLocalStorage = (user) => {
        localStorage.setItem("user", JSON.stringify(user));
        _setUser(user);
    }

    const getBookFromLocalStorage= ()=> {
        let b=localStorage.getItem("book");
        if(b){
            return JSON.parse(b);
        }
    }

    const [readingList, setReadingList] = useState([]);
    const [book, setBook] = useState(getBookFromLocalStorage());

    const [readingListState, dispatch] = useReducer(readingListReducer, readingList);

    useEffect(() => {
        localStorage.setItem("readingList", JSON.stringify(readingListState));
    }, [readingListState]);
    


    const values={
        alert,
        setAlert,
        user,
        setUser: setUserLocalStorage,
        setUserLocalStorage,
        readingList,
        setReadingList,
        book,
        setBook,
        addToReadingList: (book) => 
        dispatch({type: readingListActions.addToReadingList, book}),
        addbulkToReadingList: (book) =>
        dispatch({type: readingListActions.addBulkToReadingList, book}),
        removeFromReadingList: (book) =>
        dispatch({type: readingListActions.removeFromReadingList, book}),
        clearReadingList: () =>
        dispatch({type: readingListActions.clearReadingList})


        
        
    }
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;