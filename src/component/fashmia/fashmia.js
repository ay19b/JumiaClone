import React from 'react'
import { Typography , Container,Grid} from "@material-ui/core";
import one from '../../images/fashionJumia.jpg'
import useStyles from './style';


export default function Fashmia() {
    const classes = useStyles();
  return (
    <div >
        <Container>
              <div className={classes.headProd}>
                  <Typography variant='h6'>Fashion By Jumia</Typography>
              </div>
              <Grid container spacing={1} className={classes.banner}>
                <Grid item >
                  <img src={one} alt='a' className={classes.img}/>
                </Grid>
              </Grid>
        </Container>
    </div>
  )
}
