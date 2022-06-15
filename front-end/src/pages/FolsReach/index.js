import React, { useState } from 'react';
import Axios from 'axios';
import TextField from '@mui/material/TextField';
import Header from "../../Components/Header";
import {
  PieChart,
  Pie,
  Tooltip,Legend,
  Cell,
} from "recharts";



export default function FolsReach() {  

  const [namefol, setNamefol] = useState('')

  const [usertotal, setUsertotal] = useState('');
  const [userhasntseen, setUserhasntseen] = useState('');

  Axios.get(`http://brisk-notification-fol.herokuapp.com/api/fols/notifiedUsers?title=${namefol}`).then((qtdUserNotif)=>setUsertotal(qtdUserNotif.data.length));
  Axios.get(`http://brisk-notification-fol.herokuapp.com/api/fols/viewedUsers?title=${namefol}`).then((qtdUserRead)=>setUserhasntseen(qtdUserRead.data.length));
  
  
  const COLORS = ['#17BEBB', '#0E7C7B'];
  const viewedPercent = userhasntseen/usertotal*100;
  const notViewedPercent = 100 - viewedPercent;
  const data = [
    { name: "Visualized", users: viewedPercent },
    { name: "Non-Visualized", users: notViewedPercent },
  ];
return(

  
<div style={{ textAlign: "center" }}>
<Header/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
      <h1>FOL Visualization (in %)</h1>
      <form>
  <label>
    <TextField onChange={event => setNamefol(event.target.value)} type="text" label="search FOL name" variant="standard" name="FOLName" />

  </label>
</form>
<center>
      <div className="App">
              <PieChart width={400} height={400} style={{ textAlign: "center" }}>
              <Legend layout="horizontal" verticalAlign="top" align="center" />
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            label
            colorInterpolation={33}
          >
            {
              data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
            }
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      </center>
    </div>
);
}
