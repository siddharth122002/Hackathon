"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react'

function Create() {
  const [loading,setLoading]=useState(false)
  const [challengeName, setChallengeName] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [levelType, setLevelType] = useState<string>("easy");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    inputRef.current?.click();
  };

  const handleSubmit = async () => {
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
    setLoading(true);
    const res = await fetch('/api/create', {
      method: 'POST',
      body: formData,
    });
    
    // const response = await res.json();
    // console.log(response);
    setLoading(false);
  };
  

  return (
    <div className=''>
      <div className='bg-[#F8F9FD] px-4 py-8 md:px-16 lg:px-32'>
        <h1 className='md:text-2xl text-xl font-bold'>Challenge Details</h1>
      </div>

      <div className='px-4 md:px-16 lg:px-32'>
        <div className='flex flex-col pt-8'>
          <label className='text-lg' htmlFor="name">Challenge Name</label>
          <input 
            id='name'
            className='placeholder-slate-400 border-[1px] w-full md:w-96 h-8 p-3 border-slate-400 mt-5 rounded-md'
            type="text" 
            placeholder='Add challenge name'
            value={challengeName}
            onChange={(e) => setChallengeName(e.target.value)}
          />
        </div>
      </div>

      <div className='px-4 md:px-16 lg:px-32'>
        <div className='flex flex-col pt-8'>
          <label className='text-lg' htmlFor="start">Start Date</label>
          <input 
            id='start'
            className='placeholder-slate-400 border-[1px] w-full md:w-96 h-8 p-3 border-slate-400 mt-5 rounded-md'
            type="date" 
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
      </div>

      <div className='px-4 md:px-16 lg:px-32'>
        <div className='flex flex-col pt-8'>
          <label className='text-lg' htmlFor="end">End Date</label>
          <input 
            id='end'
            className='placeholder-slate-400 border-[1px] w-full md:w-96 h-8 p-3 border-slate-400 mt-5 rounded-md'
            type="date" 
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      <div className='px-4 md:px-16 lg:px-32'>
        <div className='flex flex-col pt-8'>
          <label className='text-lg' htmlFor="desc">Description</label>
          <textarea 
            name="desc" 
            id="desc" 
            className='placeholder-slate-400 border-[1px] w-full h-72 p-3 border-slate-400 mt-5 rounded-md'
            placeholder="Enter your description here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          >
          </textarea>
        </div>
      </div>

      <div className='px-4 md:px-16 lg:px-32'>
        <div className='flex flex-col pt-8'>
          <label className='text-lg' htmlFor="file">Image</label>
          <div 
            onClick={handleUpload}
            className='flex mt-8 items-center gap-2 bg-[#F4F4F4] w-fit px-8 py-2 rounded-md border-[#d5d5d5] border-[1px] text-[#666666] cursor-pointer'>
            <p className='text-xl'>Upload</p>
            <Image
              src={'./icons/bxs_cloud-upload.svg'}
              width={32}
              height={32}
              alt='cloud'
            />
          </div>
          <input

          ref={inputRef} className='hidden' type="file" name="file" id="file" />
        </div>
      </div>

      <div className='px-4 md:px-16 lg:px-32'>
        <div className='flex flex-col pt-8'>
          <label className='text-lg' htmlFor="level">Level Type</label>
          <select 
            className='mt-8 border-gray-400 flex justify-between px-2 w-32 py-2 rounded-md border-[1px]'
            value={levelType}
            onChange={(e) => setLevelType(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </div>

      <div className='px-4 md:px-16 lg:px-32 mb-16 mt-8'>
        <button 
          className='bg-[#44924C] text-xl rounded-md px-7 py-3 text-white'
          onClick={handleSubmit}
        >
          <div className='flex justify-center items-center gap-3'>Create Challenge
          {loading && <div className='w-3 h-3 border-white border-b-[2px] border-t-[2px] border-l-[2px] rounded-full animate-spin'></div>}</div>
        </button>
      </div>
    </div>
  )
}

export default Create;
