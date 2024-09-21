"use client"
import Image from 'next/image'
import React from 'react'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Link from 'next/link';
import { CardData, Timer } from '@/types';
import { useState,useEffect } from 'react';
function Cards({data}:{data:CardData}) {
    const [status,setStatus]=useState<string>("Upcoming")
    const [timeLeft, setTimeLeft] = useState<Timer>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds:0
    });
    const [ended,setEnded]=useState<string>("");
    
    // useEffect(() => {
    //     const rn = new Date().getTime();
    //     const starts = data.start.getTime();
    //     const ends = data.end.getTime();

    //     if (rn < starts) {
    //         setStatus("Upcoming");
    //     } else if (rn >= starts && rn < ends) {
    //         setStatus("Active");
    //     } else {
    //         setStatus("Past");
    //     }
    //     setEnded(()=>{
    //         const date =data.end.toString().split(' ').splice(0,4).join(" ")
    //         return date
    //     })
    // }, [data.start, data.end]);
    const TimeLeft=()=>{
        const now = new Date();
        const end = data.end;
        const diff = end.getTime()-now.getTime();//ms remains
        if(diff>0){
            const days=Math.floor(diff/(1000*60*60*24));
            const hours=Math.floor(diff/(1000*60*60)%24);
            const minutes=Math.floor(diff/(1000*60)%60);
            const seconds=Math.floor(diff/(1000)%60);
            setTimeLeft({ days, hours, minutes,seconds });
            // console.log({ days, hours, minutes, seconds });
        }else{
            setTimeLeft({ days: 0, hours: 0, minutes: 0,seconds:0});
        }
    }
    useEffect(()=>{
        // console.log(data)
        // TimeLeft();
        // const timer = setInterval(TimeLeft,1000)
        // return ()=>clearInterval(timer)
    },[])
    // console.log(data)
  return (
        <Link href={`/details/${data._id}`}>
            <div className='bg-white w-96 rounded-[17px] overflow-hidden'>
            <div className='w-96 h-48 relative'>
                <Image
                className='object-cover'
                    src={data.image}
                    fill
                    alt='image'
                />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='bg-[#FBF1D2] px-3 py-1 rounded-lg my-4'>{status}</p>
                <p className='text-xl font-semibold px-4 break-words max-w-xs text-center'>
                    {data.title}
                </p>

                <p className='mt-8 text-[#454545]'>{status==="Upcoming"?"Starts in":status==="Active"?"Active":"Ended"}</p>
                <div className='flex flex-col justify-center items-center'>
                    {status==="Past"?(
                        <p className='text-xl font-semibold'>{status==="Past" && `${ended}`}</p>
                    ):(
                        <>
                            <p className='text-xl font-semibold text-[#454545]'>{`${timeLeft.days} : ${timeLeft.hours} : ${timeLeft.minutes}: ${timeLeft.seconds}`}</p>
                            <p className='text-xs text-[#454545] '>Days  Hours  Mins Seconds</p>
                        </>
                    )}
                </div>
                <button className='bg-[#44924C] px-4 py-2 rounded-lg text-white my-8 flex items-center gap-4'>
                    <TaskAltIcon />
                    Participate Now
                </button>
            </div>
            </div>
        </Link>
  )
}

export default Cards