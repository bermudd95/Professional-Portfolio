import React from 'react'
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

const Header = () => {
  return (
    <>
        <div className='d-flex flex-row justify-content-center text-center bg-dark text-white pt-1'>
            <h4>
                DB Productions
            </h4>
            <DeveloperBoardIcon fontSize="large" className=' ps-1'/>
        </div>
        <div className='d-flex justify-content-center text-center'>
            <div className='pt-5'>
                <h1 className='display-2 fw-bold'>
                    Danny Bermudez
                </h1>
            </div>
        </div>
    </>
  )
}

export default Header