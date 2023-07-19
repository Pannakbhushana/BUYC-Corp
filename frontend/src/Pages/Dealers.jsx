import React from 'react'
import DealersCard from '../Components/DealersCard'
import {Box,Grid} from '@chakra-ui/react';

const Dealers = () => {
  return (
    <div>
      <Box>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
            <DealersCard/>
            <DealersCard/>
            <DealersCard/>
            <DealersCard/>
        </Grid>
      </Box>
      
    </div>
  )
}

export default Dealers
