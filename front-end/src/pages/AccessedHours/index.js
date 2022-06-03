import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


function AccessedHours() {
  const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 300, pv: 2400, amt: 2400}];
  return (
    <center>
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
      </center>
    );
}

export default AccessedHours;