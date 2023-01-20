import React, { Fragment } from "react";
import randomcolor from "randomcolor";
import faker from "faker";
import call from "./icons8-call-50.png";
import video from "./icons8-video-24.png";
import chat from "./icons8-chat-50.png";
import data from "./data.json";
import data2 from "./data2.json"
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const Card = (props) => {
  const levelColor = randomcolor();

  return (
    <ul>
      {props.data.map((item,index) => (
        <Fragment key={item.first_name}>
          <li>
            <div className="card">
              <div className="image">
                <img
                  src={"https://randomuser.me/api/portraits/men/"+randomIntFromInterval(1,100)+".jpg"}
                  alt="Profile"
                  style={{ borderColor: levelColor }}
                />
              </div>
              <div className="card-body">
                <h4>{item.first_name}</h4>
                <p>{item.title}</p>
              </div>
            </div>
            {item.children?.length && <Card data={item.children} />}
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

const Chart = () => {
  return (
    <div className="org-tree" style={{overflow:"scroll"}}>
      <Card data={data2} />
    </div>
  );
};

export default Chart;
