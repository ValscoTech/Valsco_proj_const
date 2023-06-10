import { Line } from "@ant-design/plots";
import { useState } from "react";

export default function Household() {
  const [data, setData] = useState([]);
  const [yField, setYField] = useState("sum_air");

  const GetData = async () => {
    try {
      setYField(document.getElementById("yfield").value);
      let datas = await fetch("http://localhost:3000/daily", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date: "2023-06-07" }),
      });
      datas = await datas.json();
      let dd = [];
      for (let i = 0; i < datas.length; i++) {
        let d = {
          dtime: datas[i].dtime,
          sum_air: Number(datas[i].sum_air),
          sum_computer: Number(datas[i].sum_computer),
          sum_fan: Number(datas[i].sum_fan),
          sum_fridge: Number(datas[i].sum_fridge),
          sum_laptop: Number(datas[i].sum_laptop),
          sum_printer: Number(datas[i].sum_printer),
          sum_tv: Number(datas[i].sum_tv),
        };
        dd.push(d);
      }
      console.log(dd);
      setData(dd);
    } catch (error) {
      console.log(error.message);
    }
  };

  const GETCO2 = async () => {
    try {
      let dt = await fetch("http://localhost:3000/data");
      dt = await dt.json();
      console.log(dt.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const config = {
    data,
    xField: "dtime",
    yField: yField,
  };

  return (
    <div style={{ marginTop: 20, padding: 25 }}>
      <div style={{ float: "left", width: "400px", marginLeft: "20px" }}>
        <h1>Household Carbon FootPrint </h1>

        <p style={{ fontSize: "20px" }}>
          The graph indicates that the carbon footprint of the air conditioner
          falls within the medium range, suggesting a moderate level of
          environmental impact. However, there is room for improvement to reduce
          its carbon footprint. Implementing energy- efficient measures such as
          adjusting temperature settings, regular maintenance, and upgrading to
          a more efficient can significantly lower the environmental impact Of
          air conditioner usage. By adopting these the carbon footprint Of the
          air conditioner can effectively reduced.
        </p>
      </div>
      <div style={{ float: "right", width: "800px" }}>
        <select
          name="yfield"
          id="yfield"
          style={{
            padding: 5,
            borderRadius: 5,
            margin: 10,
            backgroundColor: "#00fffc",
            border: "none",
          }}
        >
          <option value="sum_air">air_conditioner</option>
          <option value="sum_computer">computer</option>
          <option value="sum_fan">fan</option>
          <option value="sum_fridge">fridge</option>
          <option value="sum_laptop">laptop</option>
          <option value="sum_printer">printer</option>
          <option value="sum_tv">tv</option>
        </select>
        <button
          style={{
            padding: 7,
            backgroundColor: "#00fffc",
            borderRadius: 4,
            border: "none",
          }}
          onClick={GetData}
        >
          Fetch
        </button>
        <br />
        <div>
          <br />
          <Line {...config} />
        </div>
        <br />
        <div>
          <button
            style={{
              padding: 7,
              backgroundColor: "#00fffc",
              borderRadius: 4,
              border: "none",
            }}
            onClick={GETCO2}
          >
            FETCH Co2 FootPrint
          </button>
          <br />
          <div></div>
        </div>
      </div>
    </div>
  );
}