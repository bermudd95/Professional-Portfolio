import React from 'react'
import Stack from '@mui/material/Stack';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard'

const Footer = () => {
  return (
    <>
        <Stack className='d-flex justify-content-between bg-dark text-white ps-5 pe-5' direction="row">
                <p>
                    Established 2021
                </p>
                <h4>
                    DB Productions
                    <DeveloperBoardIcon fontSize="large" className=' ps-1'/>
                </h4>
                
                <p>
                    All rights reserved
                </p>  
        </Stack>
    </>
  )
}

export default Footer