import React from 'react'

interface Props {
  
}

export const Card = (props: Props) => {
  return (
    <div className='flex flex-wrap items-center lg:justify-center'>
      <div className='flex-row'>
        <div>card-photo</div>
        <div>card-photo</div>
        <div>card-photo</div>
      </div>
    </div>
  );
}
