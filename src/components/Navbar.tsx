import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'
import { useParams } from 'react-router-dom'

export const Navbar = () =>{
    const selector : any = useSelector((state:any) => state.list_repositories)
    const getTotalRepositories : number = selector.data?.length
    const { name } = useParams()
    const displayRepositories : number = name !== undefined? 1 : getTotalRepositories

    const previousPage = () =>{
        history.go(-1)
    }
    
    return(
        <div className="flex flex-row justify-between bg-gray-900 h-fit">
            <div className='flex items-center'>
                <FontAwesomeIcon onClick={()=>previousPage()} icon={faArrowAltCircleLeft} className='text-white pl-3 text-[20px]'/>
            </div>
            <button className='flex justify-center items-center'>
                <FontAwesomeIcon icon={faGithub} size={'2x'} color='white'/>
                <div className='flex'>
                    <span className='ml-3 font-bold text-lg text-white'>List Repositorys</span>
                    <span className='bg-gray-700 text-[12px] pl-1 pr-1 m-auto font-semibold text-gray-300 ml-1'>{displayRepositories}</span>
                </div>
            </button>
            <div></div>
        </div>
    )
}