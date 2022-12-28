import { Navbar } from "../components/Navbar"
import { ListRepository } from "../components/list_repository/ListRepository"

export const Main = () =>{

    return(
        <div className="flex flex-col w-full">
            <Navbar/>
            <ListRepository/>
        </div>
    )
}