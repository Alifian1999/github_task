import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getSpecificRepository } from "../pages/main_page/reducers/actionRepositories"

export const ListRepository = () =>{
    const dispatch = useDispatch<any>()
    const selector = useSelector((state:any) => state.list_repositories)
    
    const [listRepos, setListRepos] = useState<any>([])
    const [specificRepo, setSpecificRepo] = useState<any>()

    const onclickRepository = (name:string) =>{
        dispatch(getSpecificRepository(name))
    }

    return(
        <ul className="flex flex-col justify-center items-center font-semibold">
            { selector?.data.map((e:any,idx:number) =>
              <li key={idx} onClick={()=>onclickRepository(e.name)}>{e.name}</li>
            )}
        </ul>
    )
}