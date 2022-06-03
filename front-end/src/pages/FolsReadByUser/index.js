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

  async function calcFol(){
    
    const userData = await Axios.get(`http://localhost:5001/api/user?login=${username}`);
    const qtdFolViewed = userData.data.viewedFols;
    const equipments = userData.data.equipment;
    const userEquipmentsTreatment = equipments.replace(/ /g, "");
    const userEquipments = await Axios.get(`http://localhost:5000/api/fols/viewedBy?equipment=${userEquipmentsTreatment}`);
    const qtdFolPenging = userEquipments.data;
    const folViewResult = (qtdFolViewed * 100) / qtdFolPenging;
    setProgress(parseInt(folViewResult)); 
    return progress;
  }



  function CircularProgressWithLabel(props) {
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
  
  return (
        <div className='App'>
           <h1>FOLs Read by User</h1>
           <p></p>
           <h2>Username:</h2>
           <p></p>
           <TextField onChange={event => setUsername(event.target.value)} id="standard-basic" label="Digite o login do usuário" variant="standard" name={'user'} />   
           <Button onClick={() => calcFol()} variant="contained">Pesquisar</Button> 
           <p></p>    
           <CircularProgressWithLabel value={100} />
        </div>
 );

}


