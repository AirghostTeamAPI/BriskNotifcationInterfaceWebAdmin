import React, { useState } from 'react';
import Axios from 'axios';

import {
  PieChart,
  Pie,
  Tooltip,Legend,
  Cell,
} from "recharts";



export default function FolsReach() {

  const [userseen, setUserseen] = useState('');
  const [userhasntseen, setUserhasntseen] = useState('');

  const COLORS = ['#17BEBB', '#0E7C7B'];


  const [namefol, setNamefol] = useState('')
  const qtdUserNotif =  (Axios.get(`http://localhost:5000/api/fols/notifiedUsers?title=${namefol}`).then((qtdUserNotif)=>setUserseen(qtdUserNotif.data.length)));
  const qtdUserRead =  (Axios.get(`http://localhost:5000/api/fols/viewedUsers?title=${namefol}`).then((qtdUserRead)=>setUserhasntseen(qtdUserRead.data.length)));
  //const resgitUser = await Axios.post(`http://localhost:5000/api/fols/notifiedUsers?title=PCH-005/11`);
  const qtdUserNotRead=qtdUserNotif-qtdUserRead;
  console.log(userseen)
  console.log(userhasntseen)
  const data = [
    { name: "Visualized", users: userseen },
    { name: "Non-Visualized", users: userhasntseen },
  ];
return(

  
<div style={{ textAlign: "center" }}>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
      <h1>FOL Visualization</h1>
      <form>
  <label>
    FOL Name: 
    <input onChange={event => setNamefol(event.target.value)} type="text" name="FOLName" />

  </label>
</form>
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
    </div>
);
}
