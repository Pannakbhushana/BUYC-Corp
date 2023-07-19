import React from 'react';
import {useNavigate} from "react-router-dom";
import styles from "../Styles/Home.module.css";
import {Text} from  '@chakra-ui/react';

const Home = () => {
    const navigate=useNavigate()
  return (
    <div>
            <br />
            <br />
            <br />
        <Text
              fontFamily={'heading'}
              as='b'
              fontSize='30px'
            >
              Welcome <br /> to BUYC Corp,<br /> Your dream our responsibility 
            </Text>

            
       <div className={styles.container}>
        
            <div className={styles.cardLink} onClick={()=>{navigate("/dealers")}} > Dealers</div>
            <div className={styles.cardLink} onClick={()=>{navigate("/marketplace")}}>Marketplace</div>
       </div>
    </div>
  )
}

export default Home
