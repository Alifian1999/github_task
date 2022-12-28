import { useEffect } from "react"
import { useDispatch } from "react-redux" 

import { Navbar } from "../../components/Navbar"
import { ListRepository } from "../../components/ListRepository"

import { getListRespositories } from "./reducers/actionRepositories"

export const Dashboard = () =>{

    const dispatch : any = useDispatch()
    useEffect(()=>{
        dispatch(getListRespositories())
    },[])

    return(
        <div className="flex flex-col w-full">
            <Navbar/>
            <ListRepository/>
        </div>
    )
}