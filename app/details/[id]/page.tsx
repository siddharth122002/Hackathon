"use client"
import React, {  useEffect, useState } from 'react'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { CardData } from '@/types';
import { useRouter } from 'next/navigation';
function Details() {
    const router =useRouter()
    const[loading,setLoading]=useState(false);
    const {id} = useParams();
    const [data,setData]=useState<CardData>();
    const handleDelete = async () => {
        setLoading(true);
        const response = await fetch(`/api/delete/${id}`, {
            method: 'DELETE',
        });
        const res = await response.json()
        setLoading(false)
        router.push('/')
        console.log(res)
    };
    useEffect(()=>{
        const getData=async()=>{
            const response = await fetch(`/api/details/${id}`);
            const res = await response.json()
            setData(res)
            setLoading(false)
            console.log(res)
        
        }
        getData()
        
    },[])
    return (
        <>
            {loading?(
                <div className='flex p-8 justify-center items-center'>
                    <div className='w-12 h-12 border-green-500 border-l-[2px] border-b-[2px] border-t-[2px] rounded-full animate-spin'>
                    </div>
              </div>
            ):(
                <div className=''>
            <div className='md:px-32 px-4 bg-[#003145] text-white mx-auto'>
                <div className='flex flex-col gap-4 md:pt-28 pt-8'>
                <div className='flex  bg-[#FFCE5C] md:font-semibold items-center gap-3 py-1 rounded-md md:px-7 text-xs md:text-lg text-black md:w-fit w-60'>
                    <QueryBuilderIcon/>
                    <p>{data?(new Date(data.start).toDateString()):("error")}</p>

                </div>
                <div className='md:text-4xl py-3 font-semibold w-full'>{data?.title}</div>
                
                <button className='bg-white flex text-[#003145] gap-3 px-5 items-center rounded-md mb-32 mt-3 py-2 font-semibold cursor-default  w-fit'>
                    <Image
                        src={'/icons/carbon_skill-level-basic.svg'}
                        height={20}
                        width={20}
                        alt='image'
                    />
                    {data?.level}
                </button>
            </div>
        </div>
        <div className='md:px-32 px-8 shadow-lg flex justify-between items-center py-1 relative pb-5 '>
            <div className='flex flex-col'>
                <p className='font-bold  text-xl mt-5'>Overview</p>
                <div className='border-[#44924C] w-28 border-b-[5px] absolute rounded-md bottom-0 md:left-[120px] left-[6vw]'></div>
            </div>
            <div className='mt-2 flex gap-6 text-md font-semibold relative top-2'>
                <Link href={`/edit/${id}`}>
                    <button className='bg-[#44924C] text-white px-5 py-1 rounded-md'>Edit</button>
                </Link>

                <button 
                onClick={handleDelete}
                className='text-[#DC1414] border-[2px] px-5  rounded-md border-[#DC1414]'>Delete</button>
            </div>
        </div>
        <div className='p-20 md:px-32 px-8 text-[#64607D]'>{data?.description}</div>
        
        </div>
            )}
        </>
        
    )
}

export default Details