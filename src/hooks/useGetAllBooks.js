import { useEffect, useState } from "react";
import { CancelToken } from "apisauce";
import { getAllBooks } from "../api/clientNoAuth";

export default function useGetAllBooks() {
    const [response, setResponse] = useState("");
    
    useEffect(() => {
        const source = CancelToken.source();
        const getAllBooksData = async () => {
        const response = await getAllBooks(source.token);
        setResponse(response);
        };
        getAllBooksData();
        return () => {
        source.cancel();
        };
    }, []);
    
    return response;
    }