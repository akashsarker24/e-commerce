import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../components/layout/Breadcrumbs';
import Paginate from '../../components/layout/Paginate';
import Leftsidebar from '../../components/layout/Leftsidebar';

export default function Productinfo() {
  const [showItems , setShowItems] = useState(9)
  const handleShowItems= (e)=>{
    setShowItems(+e.target.value);
    
  }
  return (
    <div className=' max-w-container mx-auto'>
      <Breadcrumbs></Breadcrumbs>

      <div className=' flex gap-5 py-20'>
        <div className='w-1/5 bg-[#F3F3F3] p-4 rounded-md'>
          <Leftsidebar></Leftsidebar>
          <Leftsidebar></Leftsidebar>
          <Leftsidebar></Leftsidebar>
        </div>
        <div className='w-4/5 bg-slate-200 p-10 rounded-lg'>
          <div className=" mb-10 flex items-center gap-6 justify-end">
            <>
            <label htmlFor="countries">Sort by :</label>

            <form class="w-[240px] ">
             
              <select id="countries" class="bg-gray-50 border border-[#F0F0F0] text-gray-900 text-sm rounded-lg focus:outline-none focus:border-[#F0F0F0] block w-full p-2.5 cursor-pointer ">
                <option >Featured</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
            
            </>
             <>
            <label htmlFor="showitems">Show :</label>

            <form class="w-[240px] ">
             
              <select onChange={handleShowItems} id="showitems" class="bg-gray-50 border border-[#F0F0F0] text-gray-900 text-sm rounded-lg focus:outline-none focus:border-[#F0F0F0] block w-full p-2.5 cursor-pointer ">
                <option >show items</option>
                <option value="9">9</option>
                <option value="18">18</option>
                <option value="27">27</option>
              </select>
            </form>
            
            </>

          </div>
          <Paginate itemsPerPage={showItems}></Paginate>
        </div>
      </div>
    </div>
  )
}
