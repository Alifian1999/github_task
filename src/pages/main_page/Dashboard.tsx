import { useEffect } from "react"
import { useDispatch } from "react-redux" 

import { Navbar } from "../../components/Navbar"
import { ListRepository } from "../../components/ListRepository"

import { getListRespositories } from "./reducers/actionRepositories"

export const Dashboard = () =>{

    const dispatch : any = useDispatch()
    useEffect(()=>{
        let data = {
            name : undefined,
            page : 1
        }
        dispatch(getListRespositories(data))
    },[])

    return(
        <div className="flex flex-col w-full">
            <Navbar/>
            <ListRepository/>
        </div>
    )
}