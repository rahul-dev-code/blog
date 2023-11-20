import React, {useEffect , useState} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material'
import memories from './images/memories.png'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import './styles.css'
import { useDispatch } from 'react-redux';
import {getPosts} from './actions/posts.js'

function App() {
  const dispatch = useDispatch();
   const [currentId, setCurrentId] = useState(null)
  useEffect(()=>{
    dispatch(getPosts());
  },[currentId,dispatch])

  return (
  <Container maxWidth="lg">
    <AppBar className="AppBar" position='static' color='inherit'>
       <Typography  className="heading" variant='h3' align='center'>Memories</Typography>
       {/* <img  className="image" src={memories} alt='memories' height='60'/> */}
    </AppBar>
  <Grow in style={{marginTop:'20px'}}>
    <Container>
      <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
         <Grid item xs={12} sm={7} >
            <Posts setCurrentId = {setCurrentId}/>
         </Grid>
         <Grid item xs={12} sm={4} >
            <Form  currentId={currentId}    setCurrentId = {setCurrentId}/>
         </Grid>
      </Grid>
    </Container>
  </Grow>
  </Container>
  );
}

export default App;
