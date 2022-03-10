import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import { Home } from './components/Pages/Home/Home'
import { AboutUs } from './components/Pages/AboutUs/AboutUs'
import { Contact } from './components/Pages/Contact/Contact'
import { Contador } from './components/Pages/Contador/Contador'
import { TryUseComponent } from './components/Pages/TryUseComponent/TryUseComponent'
import { TryUseImage } from './components/Pages/TryUseImage/TryUseImage'
import { Login } from './components/Pages/Login/Login'
import { Register } from './components/Pages/Register/Register'
import { PageNotFound } from './components/Pages/PageNotFound/PageNotFound'

import './assets/css/App.css';


function App() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/AboutUs' element={<AboutUs />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
            <Route path='/Contador' element={<Contador />}></Route>
            <Route path='/TryUseComponent' element={<TryUseComponent />}></Route>
            <Route path='/TryUseImage' element={<TryUseImage />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/Register' element={<Register />}></Route>
            <Route path='*' element={<PageNotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
