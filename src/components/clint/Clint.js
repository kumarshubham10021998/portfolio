import React from 'react'
import {clints} from "../clint/data"
const Clint = () => {
  return (
    <div>
      <div class="row">
      {clints.map((item) => (
        <div class="col-lg-4">
         <img className='bd-placeholder-img rounded-circle' src={item.img} width="140" height="140" />

          <h2 class="fw-normal">{item.title}</h2>
          <p>{item.link}</p>
          <p><a class="btn btn-secondary" href="#">View details »</a></p>
        </div>
            ))}
        
      </div>
    </div>
  )
}

export default Clint
