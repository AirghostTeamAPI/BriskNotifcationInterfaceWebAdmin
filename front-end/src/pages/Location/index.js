import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import Axios from 'axios';
import "../../Styles/Homepage/style.css";



function Location() {

  const [jsonLocation, setJsonLocation] = useState([]);
  let teste;
  useEffect(() => {
    const fetchData = async () => {
      const a = await Axios.get("http://localhost:5001/api/user/location")
      return a.data
    }
    fetchData().then((response) => { setJsonLocation(response) });
  }, []);
  let dictionary = new Object()
  for (let i = 0; i < jsonLocation.length; i++) {
    console.log(jsonLocation[i])
    if (!dictionary[jsonLocation[i].country]) dictionary[jsonLocation[i].country] = 0
    dictionary[jsonLocation[i].country] = dictionary[jsonLocation[i].country] + 1;
  }

  let graphData = []
  for (const country in dictionary) {
    graphData.push({
      name: country, Quantidade: dictionary[country]
    })
  }

  return (
    <div className="App">
    <div className="main">
      <div className="center">
        <div className="header">
            <h3>Localizações de logins por usuários</h3>
        </div>
      </div>
    </div>
        <div className='barchart'>
          <BarChart width={1800} height={300} data={graphData} top={500}>
            <XAxis dataKey="name" stroke="#8A2BE2" />
            <YAxis />
            <Tooltip wrapperStyle={{ width: 120, backgroundColor: '#ccc' }} />
            <Legend width={200} wrapperStyle={{ top: 10, right: 10, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="Quantidade" fill="#8A2BE2" barSize={30} />
          </BarChart>
        </div>
      </div>
  );
}

export default Location;