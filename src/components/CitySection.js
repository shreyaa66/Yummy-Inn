import React from "react";
import Citylist from "./Citylist";
import city from "../cityy"
export default function CitySection() {

  const b= require('../cityy.json');
  const a=b.citylist;
  console.log(a);

  return (
    <>
        <p style={{color:"#80807d",fontWeight:"600",backgroundColor:"black",paddingLeft:"30px",margin:"0px",paddingTop:"60px",fontSize:"15px"}}>WE DELIVER TO</p>
      <div className="actionflex">
        {a.map((arr, index) => {
          return <Citylist head={arr[0]} list={arr[1]} />;
        })}
      </div>
   
    </>
  );
}
