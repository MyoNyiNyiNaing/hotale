import React from 'react'

const GuestModal = ({adultNum,childrenNum,setAdultNum,setChildrenNum}) => {
  return (
    <div className='shadow-gray-400 shadow-lg absolute bg-white w-full z-50'>
        <div className='flex justify-between  px-8 py-8'>
            <h1 className='uppercase'>adults</h1>
            <div className='flex gap-2'>
                <button disabled={adultNum>0? false: true} onClick={() => setAdultNum(adultNum -= 1)}>-</button>
                <span>{adultNum}</span>
                <button onClick={() => setAdultNum(adultNum += 1)}>+</button>
            </div>
        </div>
        <div>
            <hr />
        </div>
        <div className='flex justify-between  px-8 py-8'>
            <h1 className='uppercase'>Children</h1>
            <div className='flex gap-2'>
                <button disabled={childrenNum>0? false: true} onClick={() => setChildrenNum(childrenNum -= 1)}>-</button>
                <span>{childrenNum}</span>
                <button onClick={() => setChildrenNum(childrenNum += 1)}>+</button>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default GuestModal