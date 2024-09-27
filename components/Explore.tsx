"use client"
import React, { ChangeEvent, useState } from 'react'
import { useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { CardData, filtering } from '@/types'
import CardSection from './CardSection';
function Explore() {
  const [loading,setLoading]=useState(true);
  const [datas,setDatas]=useState<CardData[]>([]);
  const [filteredData,setFilteredData]=useState<CardData[]>(datas)
  useEffect(()=>{
    const getData = async()=>{
      const res = await fetch('/api/all');
      const response = await res.json()
      setDatas(response)
      setFilteredData(response)
      setLoading(false);
    }
    getData()
  },[])
  
  
  const [open,setOpen] = useState<boolean>(false);
  const [searchQuery,setSearchQuery]=useState<string>("");
  const [filters,setFilters]=useState<filtering>({
    all: true,
    active: false,
    upcoming: false,
    past: false,
    easy: false,
    medium: false,
    hard: false,
  });
 
  
  const handleFilterChange=(e:ChangeEvent<HTMLInputElement>)=>{
    if(e.target.name==="all" && e.target.checked){
      setFilters({
        all: true,
        active: true,
        upcoming: true,
        past: true,
        easy: true,
        medium: true,
        hard: true,
      });
    }else if(e.target.name==="all" && !e.target.checked){
      setFilters({
        all: false,
        active: false,
        upcoming: false,
        past: false,
        easy: false,
        medium: false,
        hard: false,
      });
    }else {
      setFilters({
        ...filters,
        [e.target.name]:e.target.checked,
        all:false
      })
    }
  }
  useEffect(() => {
    const dataa = datas.filter((data)=>{
      const newData=data.title.toLowerCase().includes(searchQuery.toLowerCase());
      return newData;
    })
  
    setFilteredData(dataa);
  }, [searchQuery,datas]);
  useEffect(() => {
    const rn = new Date().getTime();
    const tempData:CardData[]=[] // current time
    datas.filter((data) => {
      const starts = new Date(data.start).getTime()
      const ends =new Date(data.end).getTime();
      
      // // Time Filters
      const isActive = filters.active && rn >= starts && rn < ends;
      if(isActive){
        tempData.push(data);
      }
      const isUpcoming = filters.upcoming && rn < starts;
      if(isUpcoming){
        tempData.push(data);
      }
      const isPast = filters.past && rn > ends;
      if(isPast){
        tempData.push(data);
      }
      
      //difficulty filters
      const isEasy = filters.easy && data.level === "easy";
      if(isEasy && !tempData.includes(data)){
        tempData.push(data)
      }
      const isMedium = filters.medium && data.level === "medium";
      if(isMedium && !tempData.includes(data)){
        tempData.push(data)
      }
      const isHard = filters.hard && data.level === "hard";
      if(isHard && !tempData.includes(data)){
        tempData.push(data)
      };
    });
    if(tempData.length!=0){
      setFilteredData(tempData);
    }
  }, [filters,datas]);
  
  

  return (
    <>
      {loading?(
        <div className='flex p-8 justify-center items-center'>
          <div className='w-12 h-12 border-white border-l-[2px] border-b-[2px] border-t-[2px] rounded-full animate-spin'>
          </div>
        </div>
      ):(
<>
      <div className='bg-[#002A3B]'>
        {open && (
          <div className='fixed inset-0 bg-gray-800 opacity-60 z-10' onClick={() => setOpen(false)}></div>
        )}
          <div className=' container m-auto p-16 flex flex-col gap-16 justify-center items-center'>
              <div className='text-white font-semibold md:text-3xl text-xl text-center'>Explore Challenges</div>
              <div className=' w-full flex md:flex-row flex-col md:gap-5 gap-2'>
                <div className='w-full flex items-center'>
                  <SearchIcon className='text-xl relative left-8'/>
                  <input 
                  onChange={(e)=>setSearchQuery(e.target.value)}
                    className='w-full rounded-lg p-2 pl-14'
                    type="text" placeholder='Search'/>
                </div>

                {open?(
                  <>
                  <div className='w-1/3 md:ml-0 ml-5  relative z-20'>
                    <div 
                    className='bg-white w-full flex justify-between items-center h-10 rounded-t-lg  px-3 gap-3 border-gray-400'
                    onClick={()=>setOpen(false)}
                    >
                      <p className='md:text-xl'>Filter</p>
                      <KeyboardArrowUpIcon/>
                    </div>
                    <div className='absolute p-2  bg-white w-full h-84 rounded-b-lg text-gray-500'>
                      <p className='border-gray-200 border-t-[1px] py-2 md:text-lg'>Status</p>

                      <div className='p-1 flex gap-2 md:text-lg text-xs'>
                        <input 
                        onChange={handleFilterChange}
                        checked={filters.all}
                        type="checkbox" name="all"/>
                        All
                      </div>

                      <div className='p-1 flex gap-2 md:text-lg text-xs'>
                        <input 
                        checked={filters.active}
                        onChange={handleFilterChange}
                        type="checkbox" name="active"/>
                        Active
                      </div>

                      <div className='p-1 flex gap-2 md:text-lg text-xs'>
                        <input 
                        onChange={handleFilterChange}
                        checked={filters.upcoming}
                        type="checkbox" name="upcoming"/>
                        Upcoming
                      </div>

                      <div className='p-1 flex gap-2 md:text-lg text-xs'>
                        <input 
                        checked={filters.past}
                        onChange={handleFilterChange}
                        type="checkbox" name="past"/>
                        Past
                      </div>
                      
                      <p className='border-gray-200 border-t-[1px] p-2 md:text-lg py-2'>Level</p>
                      <div className='p-1 flex gap-2 md:text-lg text-xs'>
                        <input 
                        checked={filters.easy}
                        onChange={handleFilterChange}
                        type="checkbox" name="easy"/>
                        Easy
                      </div>

                      <div className='p-1 flex gap-2 md:text-lg text-xs'>
                        <input 
                        checked={filters.medium}
                        onChange={handleFilterChange}
                        type="checkbox" name="medium"/>
                        Medium
                      </div>

                      <div className='p-1 flex gap-2 md:text-lg text-xs'>
                        <input 
                        checked={filters.hard}
                        onChange={handleFilterChange}
                        type="checkbox" name="hard"/>
                        Hard
                      </div>
                    </div>
                </div>
                </>
                ):(
                  <div className='w-1/3 md:ml-0 ml-5 '>
                    <div 
                    className='bg-white w-fit flex justify-start items-center md:h-10 h-8 rounded-lg md:px-3 px-1 gap-3'
                    onClick={()=>setOpen(true)}
                    >
                      <p className='md:text-xl'>Filter</p>
                      <KeyboardArrowDownIcon/>
                    </div>
                  </div>
                )}
                
              </div>
              
          </div>
      </div>
      <CardSection datas={filteredData}/>
    </>
      )}
    
    </>
    
  )
}

export default Explore