import React from 'react'

function Dropdown({title, options, func}) {
  return (
    <div className='text-black'>
          <div className="select-container">
      <select name="menu" onChange={func} >
      <option value="" disabled>{title}</option>
        
      {options?.map((o,i)=>(
            <>
            
            <option key={i} value={o}>{o.toUpperCase()}</option>
            
            </>
        ))}
      </select>
    </div>
    </div>
  )
}

export default Dropdown
