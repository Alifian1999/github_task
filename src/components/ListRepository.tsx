import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { getListRespositories } from "../pages/main_page/reducers/actionRepositories"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons"
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons"

interface status{
    next : boolean,
    prev : boolean
}

export const ListRepository : React.FC = () =>{
    const selector = useSelector((state:any) => state.list_repositories)
    const totalItems = selector.total_repositories;
    const dispatch : any = useDispatch()

    let actvie = 'text-[30px] mr-2 cursor-pointer text-blue-500'
    let unActive = 'text-[30px] mr-2 text-gray-400'

    const [page, setPage] = useState<number>(1)
    const [status, setStatus] = useState<status>({
        next : true,
        prev : false
    })  
    const [user,setUser] = useState<string | undefined>(undefined)
    

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

        function displayDate():string | undefined{
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

    const handleSearchUser = (value:any) =>{
        let name = value.target.value
        setUser(name)
        if(value.key === 'Enter'){
            let data = {
                name : name,
                page : 1
            }
            if(name === '') return null
            dispatch(getListRespositories(data))
        }
    }

    useEffect(()=>{
        const handlePagination = () =>{
            let itemsPerPage = 10;
            let currentPage = itemsPerPage * page 
            let isPrev =  page <= 1? false : true
            let isNext =  (totalItems - currentPage) < 0? false : true

            let data = {
                name : user,
                page : page
            }
            if(isPrev === true){
                dispatch(getListRespositories(data))
            }else if(isNext === true){
                dispatch(getListRespositories(data))
            }
            setStatus({
                next : isNext,
                prev : isPrev
            })
        }
        handlePagination()
    },[page,totalItems])
    

    return(
        <ul className="flex flex-col justify-start font-semibold pb-4">
            <input 
                onKeyUp={(e) => handleSearchUser(e)} 
                className="w-1/2 m-auto p-2 rounded-lg mt-4" 
                type="text"
                placeholder="default user Alifian1999. type here to find user ..." />
            { selector.data.length !== 0?
                selector?.data.map((e:any,idx:number) =>
                <li key={idx} className='w-1/2 m-auto mt-3 bg-white shadow shadow-emerald-300 p-2 rounded-lg'>
                    <Link to={`/detail/${user === undefined? 'Alifian1999' : user}/${e.name}`} className='no-underline text-black flex'>
                        <img src={e.owner?.avatar_url} alt=""  className="w-10 mr-3"/>
                        <div className="flex justify-between w-full">
                            <div className="flex flex-col justify-between">
                                <span className="font-semibold">{e.name}</span>
                                <div>
                                    <span className="text-sm mr-2 font-normal">{e.language}</span>
                                    <span className="text-xs text-gray-400">{lastUpdate(e.updated_at)}</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="bg-green-200 p-1 text-center h-fit max-h-min rounded text-sm font-semibold text-gray-600">{e.private?'Private' : 'Public'}</span>
                            </div>
                        </div>
                    </Link>
                </li>
                )
                :
                <h2 className="w-1/2 m-auto p-2 rounded-lg mt-4 text-center absolute top-[50%] left-[25%] text-2xl">Loading ...</h2>
            }
            { selector.data.length !== 0?
            <div className="flex justify-center mt-4 mb-4">
                <button disabled={status.prev === false? true : false} onClick={()=>setPage((e) => e - 1)} className="mr-2 p-0">
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} className={status.prev === false? unActive : actvie}/>
                </button>
                <button disabled={status.next === false? true : false} onClick={()=>setPage((e) => e + 1)} className="ml-2 p-0">
                    <FontAwesomeIcon icon={faArrowAltCircleRight} className={status.next === false? unActive : actvie}/>
                </button>
            </div>
            :
            null
            }
        </ul>
    )
}