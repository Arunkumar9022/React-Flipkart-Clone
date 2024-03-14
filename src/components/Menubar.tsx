import React from "react";
import Electronic from "../Images/Electronic.png";
import WomensSaree from "../Images/Women'sSaree.png";
import Fashion from "../Images/Fashion.png";
import Jewellery from "../Images/Jewellery.png";
interface menuProp{
    setMenu:any,
   
}
const Menubar = (props:menuProp) => {
    return (
        <div className="flex justify-between p-3">
            <div onClick={()=>props.setMenu("electronic")}>
                <img className="w-20 h-20" src={Electronic} />
                <h1 className="font-semibold">Electronics</h1>
            </div>

            <div onClick={()=>props.setMenu("men's clothing")}>
                <img className="w-24 h-22" src={Fashion} />
                <h1 className="ml-10 font-semibold">Men's Dress</h1>
            </div>

            <div onClick={()=>props.setMenu("jewelery")}>
                <img className="w-32 h-20" src={Jewellery} />
                <h1 className="ml-10 font-semibold">Jewellery</h1>
            </div>

            <div onClick={()=>props.setMenu("women's clothing")}>
                <img className="w-32 h-20" src={WomensSaree} />
                <h1 className="ml-10 font-semibold">Women's dress</h1>
            </div>
        </div>
    )
}
export default Menubar