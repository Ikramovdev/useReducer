import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch =(URL) =>{
    const [data,setData] = useState([])

    useEffect(()=>{
    axios.get(`https://dummyjson.com${URL}`).then(response => {
        setData(response.data);
    })
    },[])

    return data
} 