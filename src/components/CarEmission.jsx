import { Line } from "@ant-design/charts";
import "./CarEmission.css";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useEffect,useState } from "react";

const CarEmission = () => {
    const { co2data } = useContext(DataContext);
    
    let [data,setData] = useState([
      { year: "Day1", value: 3 },
      { year: "Day2", value: 4 },
      { year: "Day3", value: 3.5 },
      { year: "Day4", value: 5 },
      { year: "Day5", value: 4.9 },
      { year: "Day6", value: 6 },
      { year: "Day7", value: 7 },
      { year: "Day8", value: 9 },
      { year: "Day9", value: 13 },
    ]);

    useEffect(()=>{
      console.log('printing recieved data');
      console.log(co2data);
      if (co2data.co2emission) {
        let dt = [];  
        for (let i = 0; i < co2data.co2emission.length; i++) {
          let d = {
            year: "Day"+i+1,
            value: co2data.co2emission[i] 
          }
          dt.push(d);
        }
        setData(dt);    
      }
     
    },[co2data]);
  /*let data = [];  
  for (let i = 0; i < co2data.co2emission.length; i++) {
    let d = {
      year: "Day"+i+1,
      value: co2data.co2emission[i] 
    }
    data.push(d);
  }
  console.log(data);*/
  /*const data = [
    { year: "Day1", value: 3 },
    { year: "Day2", value: 4 },
    { year: "Day3", value: 3.5 },
    { year: "Day4", value: 5 },
    { year: "Day5", value: 4.9 },
    { year: "Day6", value: 6 },
    { year: "Day7", value: 7 },
    { year: "Day8", value: 9 },
    { year: "Day9", value: 13 },
  ];*/
  const config = {
    data,
    height: 400,
    title: "Car Carbon Emission",
    xField: "year",
    yField: "value",
    point: {
      size: 5,
      shape: "diamond",
    },
  };
  return (
    <div className="chart-main-container">
      <div className="chart-heading-container">
        <h2>User Vehicle CO2 Emissions: Last 10 Days Analysis</h2>
        <p>The graph shows the emissions on the y-axis and the timeline on the x-axis. Fluctuations in emissions are noticeable, indicating a variety of factors that influence the production of CO2. Peak emission days are days with noticeably higher levels, possibly as a result of increased usage or particular activities.</p>
      </div>
      <div className="chart-container">
        <Line {...config} />
        <div className="note">*CO2 Emission in g/Km</div>
      </div>
    </div>
  );
};

export default CarEmission;
