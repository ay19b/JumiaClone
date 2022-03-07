import React from 'react'
import { Typography , Container,Grid} from "@material-ui/core";
import one from '../../images/codePr1.jpg'
import two from '../../images/codePr2.jpg'
import three from '../../images/codePr3.jpg'
import useStyles from './style';

export default function Promos() {
    const classes = useStyles();
  return (
    <div >
        <Container>
              <div className={classes.headProd}>
                  <Typography variant='h6'>CODES PROMOS TVs</Typography>
              </div>
              <Grid container spacing={1} className={classes.banner}>
                <Grid item md={4} xs={12}>
                  <img src={one} alt='a' className={classes.img}/>
                </Grid>
                <Grid item md={4} xs={12}>
                  <img src={two} alt='a' className={classes.img}/>
                </Grid>
                <Grid item md={4} xs={12}>
                  <img src={three} alt='a' className={classes.img}/>
                </Grid>

              </Grid>
        </Container>
    </div>
  )
}
