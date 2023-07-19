import React from 'react';
import {useNavigate} from "react-router-dom";
import styles from "../Styles/Home.module.css";

const Home = () => {
    const navigate=useNavigate()
  return (
    <>
       <div className={styles.container}>
            <div className={styles.cardLink} onClick={()=>{navigate("/dealers")}} > Dealers</div>
            <div className={styles.cardLink} onClick={()=>{navigate("/marketplace")}}>Marketplace</div>
       </div>
    </>
  )
}

export default Home
