import React from "react";
import lens from "../Images/lens.png";
import User from "../Images/User.png";
import ShoppingCart from "../Images/ShoppingCart.png";
import Seller from "../Images/Seller.png";
import Logout from "../Images/Logout.png";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/setup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface searchProp {
    setSearch: any
}

const Navbar = (props: searchProp) => {
    const logout = async () => {
        try {
            await signOut(auth);
            toast.success("Logout Successfully")
        }
        catch (error) {
            console.error(error);
        }

    }
    return (
        <>           
         <ToastContainer autoClose={2000}/>

            <div className="grid grid-cols-2 p-3">
                <div className="flex">
                    <div className="ml-20">
                        <h1 className="text-xl italic font-bold text-blue-700">Flipkart</h1>
                        <h4 className="italic text-gray-500">Explores</h4>
                    </div>
                    <div className="flex items-center w-full p-4 rounded-lg bg-blue-50 ml-7">
                        <img src={lens} className="w-5 h-5 ml-4" />
                        <input onChange={(e) => props.setSearch(e.target.value)} className="block w-full ml-3 text-xl text-gray-900 rounded-lg outline-none bg-blue-50" placeholder="Search for Products,Brands and More" required />

                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex ml-24">
                        <img src={Seller} className="w-6 h-6" />
                        <h1 className="ml-2">Become a Seller</h1>
                    </div>
                    {!auth.currentUser?.phoneNumber && (<Link to="/signin"><div className="flex ml-24">
                        <img src={User} className="w-6 h-6" />
                        <h1 className="ml-2">SignIn</h1>
                    </div>
                    </Link>)}
                    <div className="flex ml-24">
                        <img src={ShoppingCart} className="w-6 h-6" />
                        <h1 className="ml-2">Cart</h1>
                    </div>
                    {/* {auth.currentUser?.phoneNumber && (<div onClick={logout} className="flex ml-24">
                        <img src={Logout} className="w-6 h-6" />
                        <h1 className="ml-2">LogOut</h1>
                    </div>)}  */}
                    <div onClick={logout} className="flex ml-24">
                        <img src={Logout} className="w-6 h-6" />
                        <h1 className="ml-2">LogOut</h1>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Navbar