import React from "react";
import styles from "./Vans.module.css";
import GenerateVansCards from "../../components/GenerateVansCard/GenerateVansCards";
import { Link, useSearchParams } from "react-router-dom";

function Vans() {

  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <div className={styles.vansContainer}>
      <h2>Descubra novas experiências</h2>
      <div>
          <button onClick={() => setSearchParams({type:"simple"})} >simples</button> 
          <button onClick={() => setSearchParams({type:"rugged"})} >rugged</button> 
          <button onClick={() => setSearchParams({type:"luxury"})} >luxury</button> 
          <button onClick={() => setSearchParams({})} >clear</button> 
      </div>
      <GenerateVansCards />
    </div>
  );
}

export default Vans;
