import React from "react";
import "./styles.css";
import Chart from "./chart";
import Parent from "./components/Parent";
import data2 from "./data2.json"
import data3 from "./data3.json"
import Department from "./components/Department";

export default function App() {
  return (
    <div className="App">
      {/* <div className="container"> */}
        {/* {data2.map((data,index)=>(<Parent data={data} />))} */}
      {/* </div> */}

      {
        data2.map((data,index)=>(<Parent data={data} />))
      }
    </div>
  );
}
