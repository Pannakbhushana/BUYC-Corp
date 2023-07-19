import React, { useEffect, useState } from 'react'
import DealersCard from '../Components/DealersCard'
import {Box,Grid} from '@chakra-ui/react';
import axios from "axios";
import { Button, Stack } from '@chakra-ui/react'

const Dealers = () => {
  const [data, setData]=useState([]);
  const [page, setPage]=useState(1);

  useEffect(()=>{
    getData(page)
  },[page])
  
  const getData=(page=1)=>{
    axios.get(`http://localhost:8080/cars?_page=${page}&_limit=9`)
    .then((res)=>{
      // console.log(res.data)
      setData(res.data);
    }).catch((err)=>console.log(err))
  }

  return (
    <div>
      <Box>
        <Grid templateColumns={{base:'repeat(1, 1fr)', md:'repeat(2, 1fr)', lg:'repeat(3, 1fr)'}} gap={6}>
          {data.length && data.map((el)=>{
           return <DealersCard key={el.id } {...el}/>
          })}
           
        </Grid>
      </Box>

     <div style={{marginTop:"2%",marginLeft:"40%",marginBottom:"2%"}}>
      <Stack spacing={4} direction='row' align='center'>
          <Button colorScheme='teal' size='lg' onClick={()=>{
            if(page<=1){
              setPage(1)
            }
            else{
              setPage(page-1)}}
            } >
            Prev
          </Button>
          <Box >
            {page}
          </Box>
          <Button colorScheme='teal' size='lg'  onClick={()=>{setPage(page+1)}} >
            Next
          </Button>
      </Stack>
     </div>
    </div>
  )
}

export default Dealers
