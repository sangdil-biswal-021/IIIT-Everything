import React from 'react'
import buildingImg from '../../images/buildingsIIIT.png';
import { ReactComponent as DownArrow } from '../../svg/arrowDown.svg';
import { ReactComponent as Image } from "../../svg/about.svg";
import { ReactComponent as Arrow } from "../../svg/ArrowLong.svg";
import { ReactComponent as ArrowRight } from "../../svg/rightArrow.svg";

import img from '../../images/buildingsIIIT.png'
import anirudh from '../../images/anirudh.jpeg'
import kaniskaa from '../../images/kaniskaa.jpeg'
import sangdil from '../../images/sangdil.jpeg'
import swoyam from '../../images/swoyam.jpeg'
import Developers from './Developers';

export default function About() {
    const data = [
        {image:anirudh,
            name:"Anirudh Parida",
            about:"Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
            linkedin:"https://www.linkedin.com/in/anirudh-parida"
        },
        {image:kaniskaa,
            name:"Kaniskaa Behera",
            about:"about",
            linkedin:"https://www.linkedin.com/in/kaniskaa-behera-b30b53145"
        },
        {image:img,
            name:"Prince Pious Omm Prakash",
            about:"about",
            linkedin:"https://www.linkedin.com/in/prince03/"
        },
        {image:sangdil,
            name:"Sangdil Biswal",
            about:"about",
            linkedin:"https://www.linkedin.com/in/sangdil-biswal-bb1ba2263"
        },
        {image:swoyam,
            name:"Swoyam Siddharth Nayak",
            about:"about",
            linkedin:"https://www.linkedin.com/in/swoyam2609"
        }
    ]
    const contributors = [
        "Lorem ipsum dolor sit","Lorem ipsum dolor sit ","Lorem ipsum dolor sit ",
        "Lorem ipsum dolor sit ","Lorem ipsum dolor sit ","Lorem ipsum dolor sit "
    ]
  return (
    <>
    <div className="flex justify-center flex-col items-center mt-8">
     <div className='flex'>
        <div className='w-1/2 flex flex-col p-5 m-5 text-mono text-white'>
            <text className='font-bold text-[36px]'>ABOUT</text>
            <text className='font-thin text-[36px]'>THE CREATORS</text>
            <text className='text-[16px] mt-2 leading-7' >Lorem ipsum dolor sit amet consectetur. Scelerisque enim magna mattis nisl varius. Sed mollis consectetur at at rhoncus mi rhoncus vitae. Eget quis in duis senectus blandit facilisi laoreet. Lorem vel pellentesque ac vel venenatis quis nunc nibh. Neque vel vivamus massa aliquet tortor aliquet sed. Risus lacinia condimentum egestas lectus facilisis. Euismod odio amet sit mi est adipiscing lectus nec. Lacus ornare id facilisi volutpat orci nulla scelerisque curabitur. Sed lorem pellentesque porta dolor sed habitant molestie turpis.</text>
        </div>
        <div><Image/></div>
     </div>
     <div className='flex flex-col font-mono text-white mx-10'>
        <div className='flex flex-col text-[36px]'>
            <text className='-mb-[30px] font-thin'>THE</text>
            <text className='flex items-center mr-2 font-bold'>DEVELOPERS<div className='ml-10'><Arrow/></div></text>
            </div>
        <div className='mt-10 grid grid-cols-4 gap-2 '>
           {
            data.map((e)=>
            <>
            <Developers image={e.image} name={e.name} about={e.about} linkedin={e.linkedin}/>
            </>)
           }


        </div>
     </div>
     <div className='flex flex-col font-mono text-white mx-10 mt-5'>
        <div className='flex flex-col text-[36px]'>
            <text className='-mb-[30px] font-thin'>THE</text>
            <text className='flex items-center mr-2 font-bold'>CONTRIBUTORS<div className='ml-10'><Arrow/></div></text>
            </div>
        <div className='mt-10 grid grid-cols-4 gap-4 '>
           {
            contributors.map((e)=>
            <div className='flex items-center'>
                <div><ArrowRight/></div>
            <text>{e}</text>
            </div>)
           }


        </div>
     </div>
    </div>
  </>
  )
}
