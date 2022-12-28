import { useState,useEffect } from "react"
import { octokit } from "../../utilities/config"


export const ListRepository = () =>{
    const [listRepos, setListRepos] = useState<any>([])
    const [specificRepo, setSpecificRepo] = useState<any>()
  
    useEffect(()=>{
      const getData = async()=>{
        let data = await octokit.request('GET /users/{username}/repos', {
          username : 'Alifian1999'
        })
        setListRepos(data.data)
      }
      getData()
    },[])
    
    const getSpecificRepo = async(name:string) =>{
      let data = await octokit.request('GET /repos/{owner}/{repo}', {
        owner: 'Alifian1999',
        repo: `${name}`
      })
      setSpecificRepo(data)
    }
    return(
        <ul className="flex flex-col justify-center items-center font-semibold">
            { listRepos?.map((e:any,idx:number) =>
              <li key={idx} onClick={()=>getSpecificRepo(e.name)}>{e.name}</li>
            )}
        </ul>
    )
}