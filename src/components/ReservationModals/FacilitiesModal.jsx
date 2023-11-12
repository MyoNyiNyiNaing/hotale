import React from 'react'

const FacilitiesModal = () => {
  return (
    <div>
    <div className='flex flex-col gap-3 mt-5 text-[#656565] accent-gray-500'>
        <div>
            <input className='me-3' type="checkbox" id="Conditioner"/>
        <label htmlFor="Conditioner">Air Conditioner</label>
        </div>
        <div>
             <input className='me-3' type="checkbox" id="BathTub"/>
        <label htmlFor="BathTub">Bath Tub</label>
        </div>
        <div>
            <input className='me-3' type="checkbox" id="Heater"/>
        <label htmlFor="Heater">Heater</label>
        </div>
        <div>
            <input className='me-3' type="checkbox" id="Iron"/>
        <label htmlFor="Iron">Iron</label>
        </div>
        <div>
            <input className='me-3' type="checkbox" id="SafetyBox"/>
        <label htmlFor="SafetyBox">Safety Box</label>
        </div>
       
    </div>
</div>
  )
}

export default FacilitiesModal