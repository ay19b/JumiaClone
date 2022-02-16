import React from 'react';
import {footerSide} from "../data";
import {Grid,Container,Typography} from '@material-ui/core'
import useStyles from './style';
import Food from '../../images/jumia_images/JumiaFood.png'
import Mall from '../../images/jumia_images/JumiaMal.png'
import Prime from '../../images/jumia_images/JumiaPrime.png'

const Pillars = () => {
    const classes = useStyles();
    return (
        <div className={classes.pillars}>
          <Container>
          <Grid container  spacing={2}>
                    <Grid item xs={3} className={classes.pillItem}>
                       <img src={Prime} className={classes.img}/>
                       <Typography variant="subtitle1">Skin care</Typography>
                    </Grid>
                    <Grid item xs={3} className={classes.pillItem}>
                       <img src={Mall} className={classes.img}/>
                       <Typography variant="subtitle1">Official Shops</Typography>
                    </Grid>
                    <Grid item xs={3} className={classes.pillItem}>
                       <img src={Prime} className={classes.img}/>
                       <Typography variant="subtitle1">Order Phone</Typography>
                    </Grid>
                    <Grid item xs={3} className={classes.pillItem}>
                       <img src={Food} className={classes.img}/>
                       <Typography variant="subtitle1">Jumia Food</Typography>
                    </Grid>

            </Grid>
            </Container>
        </div>
        
        
    )
}

export default Pillars;