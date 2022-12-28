import { useState,useEffect } from "react"
import { octokit } from "../utilities/config"

export const ListRepository = () =>{
    const [value, setValue] = useState<any[]>([])
  
    useEffect(()=>{
      const getData = async()=>{
        let data = await octokit.request('GET /users/{username}/repos', {
          username : 'Alifian1999'
        })
        setValue(data)
      }
      getData()
    },[])
    console.log(value);
    return(
        <div>
            List Repository
        </div>
    )
}