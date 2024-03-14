import React,{useState} from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Menubar from './Menubar';
import Welcome from './Welcome';
import Footer from './Footer';

const Main = () => {
    const[search,setSearch]=useState("");
    const [menu,setMenu]=useState()
    return (
        <div>
            <Navbar setSearch={setSearch}/>
            <Menubar setMenu={setMenu}/>
            <Welcome/>
            <Home search={search} menu={menu}/>
            <Footer/>
        </div>
    )
}
export default Main