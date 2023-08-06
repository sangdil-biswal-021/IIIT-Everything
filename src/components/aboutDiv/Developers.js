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
        <div className='text-[20px] font-bold text-center' >{props.name}</div>
        <Partition/>
        <div className='text-[12px] text-center'>{props.about}</div>
        <a href={`${props.linkedin}`}><button className='h-[50px] w-[155px] bg-no-repeat' style={{backgroundImage:`url(${img1})`}}>
            <text className='text-black'>Linkedin</text>
       </button> </a>
     
    </div>
  )
}
