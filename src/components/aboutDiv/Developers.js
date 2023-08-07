import React from 'react'
import img from '../../images/rectangle-developer.png'
import img1 from '../../images/linkedin.png'
import { ReactComponent as Partition } from '../../svg/horizontal.svg'
export default function Developers(props) {
  return (
    <div className='h-[515px] bg-no-repeat flex flex-col items-center justify-around py-10 px-2 rounded-[40px]' style={{backgroundImage:`url(${img})`}}>
       
        <div className='h-[250px] w-[250px] rounded-full bg-[#211E2E] flex items-center justify-center' >
        <div className='h-[225px] w-[225px] rounded-full bg-no-repeat bg-cover' style={{backgroundImage:`url(${props.image})`}}>
        
        </div>
        </div>
        <div className='text-[18px] font-bold text-center' >{props.name}</div>
        <Partition/>
        <div className='text-[12px] text-center'>{props.about}</div>
        <a href={`${props.linkedin}`}> <button
            className="text-txtPurple  bg-gradient-to-r hover:bg-gradient-to-l from-customPurple to-customIndigo  px-24 py-4  rounded-3xl text-md   font-bold transition duration-900 text-center"
           
          >
            LinkedIn
          </button> </a>
     
    </div>
  )
}
