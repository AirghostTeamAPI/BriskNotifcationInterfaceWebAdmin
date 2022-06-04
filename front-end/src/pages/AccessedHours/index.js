import React, { useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import axios from 'axios';


function AccessedHours() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    axios.get('http://localhost:5001/api/access').then((data) => setData(data.data));
  }, []);
  const data1 = [];
 data.map((hour) => {
  data1.push({name: hour.hours[0].hour, uv: hour.hours[0].ammount})
  });
  data1.sort((a, b) => a.name - b.name);
  return (
    <center>
      <LineChart width={600} height={300} data={data1}>
        <Line type="monotone" dataKey="uv" stroke="#000000" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
      </center>
    );
}

export default AccessedHours;