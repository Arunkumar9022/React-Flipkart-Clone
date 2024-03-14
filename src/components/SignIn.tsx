import React, { useState } from 'react'
import Home from "../Images/home.png";
import '../index.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../firebase/setup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignIn = () => {
  const navigate =useNavigate()
  const [phone, setPhone] = useState("");
  const [user,setUser]    = useState<any>(null);
  const [otp,setOtp]      = useState("")

  const requestOtp=async()=>{
    try{
      const recaptcha = new RecaptchaVerifier(auth,"recaptcha",{});
      const confirmation = await signInWithPhoneNumber(auth,phone,recaptcha)
      setUser(confirmation);

    }catch(err){
      console.error(err);
    }
   
  }

  const verifyotp=async()=>{
    try{
        await user.confirm(otp);
        auth.currentUser?.phoneNumber && navigate("/")
        toast.success("Sign in Successfully");
        // console.log(data);

    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className='grid grid-cols-3'>
      <div className='w-10/12 h-full p-10 bg-blue-600'>
        <h1 className='text-3xl font-semibold text-white'>Login</h1>
        <h1 className='pt-5 text-lg text-gray-200'>Get access to your orders,WishList and Recommendations</h1>
        <img src={Home} className='mt-64 ml-1 w-80' />
      </div>
      <div className='p-10'>
        {/* <input type="text" className="outline-none border border-b-2 border-gray-300 text-gray-900 text-lg  block w-96 w-11/12 p-2.5" placeholder="Enter Your Email/mobile Number" required /> */}
        <PhoneInput country={'us'} value={phone} onChange={(phone)=>setPhone("+" + phone)} inputStyle={{width:"510px",borderTop:'1px',borderRight:'1px'}} placeholder='Enter Mobile Number'/>
        <h1 className='p-2 text-gray-500'>By continuing, you agree to Flipkart's <span className='text-blue-700'>Terms of Use </span>and<span className='text-blue-700'>Privacy Policy.</span></h1>
        <button onClick={requestOtp} className="w-11/12 h-12 px-4 py-2 mt-5 font-bold text-white bg-orange-500 rounded">
          Register OTP
        </button>
        <div id="recaptcha" className='mt-4'>

        </div>
       { phone &&<input type="text" onChange={(e)=>setOtp(e.target.value)} className="bg-gray-50 border outline-none border-gray-300 mt-4 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5" placeholder="Enter OTP" required />}
       {otp &&  <button onClick={verifyotp} className="w-11/12 h-12 px-4 py-2 mt-5 font-bold text-white bg-orange-500 rounded">
          Verify OTP
        </button>}
        <h1 className='mt-24 font-semibold text-center text-blue-700'>New to Flikart? Create an Account</h1>
      </div>
    </div>
  )
}
export default SignIn