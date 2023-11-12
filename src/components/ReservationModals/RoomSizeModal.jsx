import React from 'react'

const RoomSizeModal = () => {
  return (
    <div>
        <div className='flex flex-col gap-3 mt-5 text-[#656565]  accent-gray-500'>
            <div>
                <input className='me-3' type="checkbox" id="30-40 sqm"/>
            <label htmlFor="30-40 sqm">30-40 sqm</label>
            </div>
            <div>
                 <input className='me-3' type="checkbox" id="30-40 sqm"/>
            <label htmlFor="30-40 sqm">40-55 sqm</label>
            </div>
            <div>
                <input className='me-3' type="checkbox" id="30-40 sqm"/>
            <label htmlFor="30-40 sqm">55-80 sqm</label>
            </div>
            <div>
                <input className='me-3' type="checkbox" id="30-40 sqm"/>
            <label htmlFor="30-40 sqm">80+ sqm</label>
            </div>
           
        </div>
    </div>
  )
}

export default RoomSizeModal