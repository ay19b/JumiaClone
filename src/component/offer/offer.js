import React from 'react'
import { Typography , Container,Grid} from "@material-ui/core";
import skone from '../../images/skone.jpg'
import sktwo from '../../images/sktwo.jpg'
import skthree from '../../images/skthree.jpg'
import skfour from '../../images/skfour.jpg'
import useStyles from './style';

export default function Offer() {
    const classes = useStyles();
  return (
    <div >
        <Container>
              <div className={classes.headProd}>
                  <Typography variant='h6'>Unmissable offers</Typography>
              </div>
              <Grid container spacing={2} className={classes.banner}>
                <Grid item md={6} xs={12}>
                  <img src={skone} alt='a' className={classes.img}/>
                </Grid>
                <Grid item md={6} xs={12}>
                  <img src={sktwo} alt='a' className={classes.img}/>
                </Grid>
                <Grid item md={6} xs={12}>
                  <img src={skthree} alt='a' className={classes.img}/>
                </Grid>
                <Grid item md={6} xs={12}>
                  <img src={skfour} alt='a' className={classes.img}/>
                </Grid>

              </Grid>
        </Container>
    </div>
  )
}
