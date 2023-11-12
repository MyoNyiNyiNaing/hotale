import React from 'react'

const AddRoomModal = ({roomNum,setRoomNum}) => {
  return (
    <div>
        <div className=' shadow-gray-400 bg-white w-full z-50 shadow-lg flex justify-between px-8 py-8 absolute '>
            <h1 className='uppercase'>room</h1>
            <div className='flex items-center gap-3'>
                <button disabled={roomNum>1? false: true} onClick={() => setRoomNum(roomNum -= 1)}>-</button>
                <span>{roomNum}</span>
                <button  onClick={() => setRoomNum(roomNum += 1)}>+</button>
            </div>
        </div>
    </div>
  )
}

export default AddRoomModal