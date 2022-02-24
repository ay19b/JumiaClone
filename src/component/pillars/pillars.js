import React from 'react';
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
          <Grid container >
                    <Grid item sm={6}  md={3} className={classes.pillItem}>
                       <img src={Prime} className={classes.img}/>
                       <Typography variant="subtitle1" className={classes.item}>Skin care</Typography>
                    </Grid>
                    <Grid item sm={6}  md={3} className={classes.pillItem}>
                       <img src={Mall} className={classes.img}/>
                       <Typography variant="subtitle1" className={classes.item}>Official Shops</Typography>
                    </Grid>
                    <Grid item sm={6}  md={3} className={classes.pillItem}>
                       <img src={Prime} className={classes.img}/>
                       <Typography variant="subtitle1" className={classes.item}>Order Phone</Typography>
                    </Grid>
                    <Grid item sm={6}  md={3} className={classes.pillItem}>
                       <img src={Food} className={classes.img}/>
                       <Typography variant="subtitle1" className={classes.item}>Jumia Food</Typography>
                    </Grid>

            </Grid>
            </Container>
        </div>
        
        
    )
}

export default Pillars;