import { useState, useEffect } from "react";
import styles from "./Home.module.css";

export default function Home() {
 const [counter, setCounter] = useState(0);

 useEffect(() => {
   const interval = setInterval(() => {
     setCounter((prevCounter) => prevCounter + 1);
   }, 1000);
    return () => clearInterval(interval);
  }, []);  
    return (
    <div className={styles.container}>
        <h1 className={styles.title}>Welcome to the Home Page</h1>
        <p className={styles.counter}>Counter: {counter}</p>
    </div>
  );
}    
