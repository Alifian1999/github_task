import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { getSpecificRepository } from "../main_page/reducers/actionRepositories"


export const DetailPage = () =>{
    
    const dispatch = useDispatch<any>()
    useEffect(()=>{
    },[])
    return(
        <div>Detail Page</div>
    )
}