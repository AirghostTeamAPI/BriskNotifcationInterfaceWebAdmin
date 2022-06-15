import React, { useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import Header from "../../Components/Header";

function AccessedHours() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    axios.get('http://brisk-notification-user.herokuapp.com/api/access').then((data) => setData(data.data));
  }, []);
  const data1 = [];
  
  data.map((hour) => {
    data1.push({name: hour.hours[0].hour, time: hour.hours[0].ammount})
  });
  data1.sort((a, b) => a.time - b.time);
  const maior = data1[data1.length - 1];
  let menor = data1[0];
  function printa () {
    return menor, maior;
  }

  data1.sort((a, b) => a.name - b.name);

  return (
    <center>
      <Header/>
      <h1>In-app activity by time</h1>
      
      <LineChart width={600} height={300} data={data1}>
      
        <Line type="monotone" dataKey="time" stroke="#000000" />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
      <br/>
      </center>
    );
}

export default AccessedHours;