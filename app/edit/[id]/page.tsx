"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useParams } from 'next/navigation';
import { CardData } from '@/types';

function Edit() {
  const[loading,setLoading]=useState(false);
  useEffect(()=>{
    const getData=async()=>{
        const response = await fetch(`/api/details/${id}`);
        const res = await response.json()
        setLoading(false)
        console.log(res)
        setLevelType(res.level)
        setDescription(res.description)
        setChallengeName(res.title)
        setImage(res.image)
    }
    getData()
    
},[])
  const [challengeName, setChallengeName] = useState<string>("");
  const [image,setImage]=useState("")
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [levelType, setLevelType] = useState<string>("easy");
  const inputRef = useRef<HTMLInputElement>(null);
  const params = useParams();
  const {id}=params;
  const handleUpload = () => {
    inputRef.current?.click();
  };

  const handleSaveChanges = async () => {
    if (!challengeName || !startDate || !endDate || !description || !inputRef.current?.files?.[0]) {
      alert("Please fill out all required fields.");
      return;
  }
    const formData = new FormData();
  
    formData.append('title', challengeName);
    formData.append('start', startDate);
    formData.append('end', endDate);
    formData.append('description', description);
    formData.append('level', levelType);
    
    if (inputRef.current?.files?.[0]) {
      formData.append('image', inputRef.current.files[0]);
    }
    setLoading(true)
    const res = await fetch(`/api/edit/${id}`, {
      method: 'PUT',
      body: formData,
    });
    console.log(res);
    const response = await res.json();
    console.log(response);
    setLoading(false)
    // Handle response (success or error)
  };

  return (
    <div className=''>
      <div className='bg-[#F8F9FD] px-6 py-8 md:px-16 lg:px-24 xl:px-32'>
        <h1 className='text-2xl font-bold'>Challenge Details</h1>
      </div>
      
      <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
        <div className='flex flex-col pt-8'>
          <label className='text-lg' htmlFor="name">Challenge Name</label>
          <input 
            id='name'
            className='placeholder-slate-400 border-[1px] w-full max-w-96 h-8 p-3 border-slate-400 mt-5 rounded-md'
            type="text" 
            value={challengeName}
            onChange={(e) => setChallengeName(e.target.value)}
          />
        </div>
      </div>

      <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
        <div className='flex flex-col pt-8'>
          <label className='text-lg' htmlFor="start">Start Date</label>
          <input 
            id='start'
            className='placeholder-slate-400 border-[1px] w-full max-w-96 h-8 p-3 border-slate-400 mt-5 rounded-md'
            type="date" 
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
      </div>

      <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
        <div className='flex flex-col pt-8'>
          <label className='text-lg' htmlFor="end">End Date</label>
          <input 
            id='end'
            className='placeholder-slate-400 border-[1px] w-full max-w-96 h-8 p-3 border-slate-400 mt-5 rounded-md'
            type="date" 
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
        <div className='flex flex-col pt-8'>
          <label className='text-lg' htmlFor="desc">Description</label>
          <textarea 
            name="desc" 
            id="desc" 
            className='placeholder-slate-400 border-[1px] w-full md:w-3/4 h-72 p-3 border-slate-400 mt-5 rounded-md'
           
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
        <div className='flex flex-col pt-8'>
          <label className='text-lg' htmlFor="file">Image</label>
          <div 
            onClick={handleUpload}
            className='bg-[#F8F9FD] w-full md:w-fit p-4 rounded-md'>
            <Image
              src={image}
              width={300}
              height={300}
              alt='cloud'
            />
            <div className='flex p-2 gap-2 text-[#44924C]'>
              <Image
                src={'/icons/bi_image-fill.svg'}
                width={20}
                height={20}
                alt='cloud'
              />
              <p>Change image</p>
              <ArrowForwardIcon />
            </div>
          </div>
          <input 
          ref={inputRef} className='hidden' type="file" name="file" id="file" />
        </div>
      </div>

      <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
        <div className='flex flex-col pt-8'>
          <label className='text-lg' htmlFor="end">Level Type</label>
          <select 
            className='mt-8 border-gray-400 flex justify-between px-2 w-full md:w-48 py-2 rounded-md border-[1px]' 
            value={levelType}
            onChange={(e) => setLevelType(e.target.value)}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </div>

      <div className='px-6 md:px-16 lg:px-24 xl:px-32 mb-16 mt-8'>
        <button 
          className='bg-[#44924C] text-xl rounded-md px-7 py-3 text-white'
          onClick={handleSaveChanges}
        >
          <div className='flex justify-center items-center gap-3'>Save Changes
          {loading && <div className='w-3 h-3 border-white border-b-[2px] border-t-[2px] border-l-[2px] rounded-full animate-spin'></div>}</div>
        </button>
      </div>
    </div>
  )
}

export default Edit;
