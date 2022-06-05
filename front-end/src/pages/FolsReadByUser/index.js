import React, { useState } from 'react';
import Axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { formControlClasses } from '@mui/material';

export default function FolsReadByUser() {
  const [username, setUsername] = useState('');
  const [progress, setProgress] = useState('');
  const [allProgress, setAllProgress] = useState('');
  calcAllFolByUsers();

  async function calcFolByUser(){
    
    const userData = await Axios.get(`http://localhost:5001/api/user?login=${username}`);
    const qtdFolViewed = userData.data.viewedFols.length;
    const equipments = userData.data.equipment.replace(/ /g, "");
    const userEquipments = await Axios.get(`http://localhost:5000/api/fols/viewedBy?equipment=${equipments}`);
    const qtdFolPenging = userEquipments.data;
    const folViewResult = (qtdFolViewed * 100) / qtdFolPenging;
    setProgress(parseInt(folViewResult)); 
    return progress;
  }

  async function calcAllFolByUsers(){
    const allViewedFols = await Axios.get(`http://localhost:5001/api/user/fols`); 
    const allViewedFolsFiltered = [...new Set(allViewedFols.data)];
    const allFolsData = await Axios.get(`http://localhost:5000/api/fols/all`); 
    const allFolsViewed = allFolsData.data.length
    const folViewResult = (allViewedFolsFiltered.length * 100) / allFolsViewed;
    setAllProgress(parseInt(folViewResult));   
    return allProgress;
  }



  function FolsViewedByUser(props) {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress size="120px" variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: '120px',
            height: '120px',
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h4" component="div" color="text.secondary">
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }

  function AllFolsViewedByAllUsers(props) {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress size="120px" variant="determinate" color='success' {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: '120px',
            height: '120px',
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h4" component="div" color="text.secondary">
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }
  
  return (
        <div className='App'>
           <h1>FOLs Read by User</h1>
           <p></p>
           <h2>Username:</h2>
           <p></p>
           <TextField onChange={event => setUsername(event.target.value)} id="standard-basic" label="Digite o login do usuário" variant="standard" name={'user'} />   
           <Button onClick={() => calcFolByUser()} variant="contained">Pesquisar</Button> 
           <p>All Fols viewed by the user searched</p>    
           <FolsViewedByUser value={progress} />
           <p>All Fols viewed by all users</p>  
           <AllFolsViewedByAllUsers value={allProgress} />
        </div>
 );

}


