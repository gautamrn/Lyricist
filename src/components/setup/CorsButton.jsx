import React from 'react'

const CorsButton = () => {
  return (
    <div className='w-full p-3 bg-green text-white rounded-md hover:bg-light-blue'>
        <a href='https://cors-anywhere.herokuapp.com/corsdemo' >
            <button>Click here if not working</button>
        </a>
    </div>
  )
}

export default CorsButton