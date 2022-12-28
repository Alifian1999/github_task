import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages/main_page/Dashboard';
import { DetailPage } from '../pages/detail_page/DetailPage';


export const AppRoute = () =>{
    return(
    <BrowserRouter>
        <Routes>
            <Route element={<Dashboard/>} path='/'/>
            <Route element={<DetailPage/>} path='/detail/:name' />
        </Routes>
    </BrowserRouter>
    )
}