import { useDispatch,useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getSpecificRepository } from "../main_page/reducers/actionRepositories"
import { Navbar } from "../../components/Navbar"


export const DetailPage = () =>{
    const dispatch = useDispatch<any>()
    let {name,repo} = useParams()
    
    let data = {
        user : name,
        repo : repo
    }
    return(
        <div>
            <Navbar/>
            <div className="min-h-screen w-full flex items-center justify-center">
                <button 
                    className="border-[1px] border-solid border-black hover:bg-blue-400 rounded-lg" 
                    onClick={()=>dispatch(getSpecificRepository(data))}>
                        Click here to see <b>{repo}</b> Repository
                </button>
            </div>
        </div>
    )
}