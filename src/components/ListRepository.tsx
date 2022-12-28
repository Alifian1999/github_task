import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const ListRepository = () =>{
    const selector = useSelector((state:any) => state.list_repositories)
    // const navigate = useNavigate()
    
    const [listRepos, setListRepos] = useState<any>([])
    const [specificRepo, setSpecificRepo] = useState<any>()

    const lastUpdate = (time:any) =>{
        let timePost:any = new Date(time)
        let timeNow:any = new Date()
        let distance = timeNow - timePost

        let milisecond= 1000
        let secondInHours= 3600
        let hoursInDay=24
        let minutes= 60
        let seconds= 60    

        let distanceDay=Math.floor( distance / (milisecond * secondInHours * hoursInDay))
        let distanceHours= Math.floor(distance/ (milisecond * minutes * seconds))
        let distanceMinutes= Math.floor(distance/(milisecond * seconds))
        let distanceSeconds= Math.floor(distance/ (milisecond))

        function displayDate(){
            if(distanceDay > 7) return (`Updated ${new Date(time).toISOString().substring(0, 10)}`)
            if(distanceDay > 1) return (`Updated ${distanceDay} days`);
            if(distanceHours === 1)return (`Updated ${distanceHours} hour`);
            if(distanceHours > 1)return (`Updated ${distanceHours} hours`);
            if(distanceMinutes === 1)return (`Updated ${distanceMinutes} minute`);
            if(distanceMinutes > 1)return (`Updated ${distanceMinutes} minutes`);
            if(distanceSeconds === 0 || 1) return (`Updated ${distanceSeconds} second`);
            if(distanceSeconds > 1) return (`Updated ${distanceSeconds} seconds`);
        }
         return displayDate()
    }    

    return(
        <ul className="flex flex-col justify-start font-semibold pb-4">
            { selector?.data.map((e:any,idx:number) =>
              <li key={idx} className='w-1/2 m-auto mt-3 bg-white shadow shadow-emerald-300 p-2 rounded-lg'>
                <Link to={`/detail/:${e.name}`} className='no-underline text-black flex'>
                    <img src={e.owner?.avatar_url} alt=""  className="w-10 mr-3"/>
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col justify-between">
                            <span className="font-semibold">{e.name}</span>
                            <span className="text-xs">{e.language}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="bg-green-200 p-1 text-center h-fit max-h-min rounded">{e.private?'Private' : 'Public'}</span>
                            <span className="text-xs">{lastUpdate(e.updated_at)}</span>
                        </div>
                    </div>
                </Link>
              </li>
            )}
        </ul>
    )
}