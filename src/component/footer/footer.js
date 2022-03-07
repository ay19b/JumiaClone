import React from 'react'
import Log from '../../images/log.png'
import Ban from '../../images/ban.jpg'
import useStyles from './style';
import {HiSearch} from "react-icons/hi";
import { Grid ,Container, Typography,TextField,InputAdornment,Button} from '@material-ui/core';

const Footer=()=> {
const classes = useStyles();
  return (
    <div className={classes.footer}>
     <Container>
      <Grid container alignItems="center">
        <Grid item md={3} xs={4}>
          <img src={Log} className={classes.imgLogo}/>
        </Grid>
        <Grid item md={7} xs={8} className={classes.ftCenter} >
                <Typography variant='h6' color='secondary'>NEW TO JUMIA?</Typography>
                <Typography style={{color:"#aaa"}}>Subscribe to our communications to receive our best offers!</Typography>
                <div className="input-inf">
                  <div className={classes.input}>
                    <TextField
                      id="outlined-basic"
                      placeholder="Enter"
                      InputProps={{
                      startAdornment: <InputAdornment position="start">
                                        <HiSearch color='primary'/>
                                      </InputAdornment>,         
                      }}
                    />
                      <Button variant="outlined" className={classes.btn}>MEN</Button>
                      <Button variant="outlined" className={classes.btn}>WOMEN</Button>
                  </div>
                </div>
        </Grid>
        <Grid item md={2} className={classes.lastGrid}>
          <div style={{display:'flex'}}>
            <img src={Ban} className={classes.img}/>
            <Typography variant='h6' className={classes.textNI}color='secondary'>JUMIA IN YOUR POCKET!</Typography>
          </div>
          <Typography variant='h6'className={classes.text}>Download our free app</Typography>
        </Grid>
      </Grid>
    </Container>
  </div>  
  )
}

export default Footer

