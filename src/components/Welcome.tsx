import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner1 from "../Images/Banner1.png";
import Banner2 from "../Images/Banner2.png";
import Banner3 from "../Images/Banner3.png"
const Welcome=()=>{
    return(
          <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div className='h-52'>
                    <img src={Banner1} className='h-52' />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={Banner2} className='h-52' />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={Banner3} className='h-52' />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>  
       
    )
}
export default Welcome