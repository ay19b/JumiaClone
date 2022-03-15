import {Grid,Container} from '@material-ui/core'
import React from 'react'
import Carousel from '../carousel/carousel'
import SideBar from '../sideBar/sideBar'
import Pillars from "../pillars/pillars";
import Category from '../category/category'
import useStyles from './style';
import Layout from '../Layout'
import Promos from '../promos/promos';
import Offer from '../offer/offer';
import Fashmia from '../fashmia/fashmia';

const Home=()=>{
    const classes = useStyles();
  return (
  
    <Layout show='true'>
        <Container>
            <Grid container spacing={3}>
                <Grid item md={3} className={classes.side}>
                    <SideBar />
                </Grid>
                <Grid item md={9} xs={12}>
                    <Carousel />
                </Grid>
            </Grid>
        </Container>
        <Pillars/>
        <Promos />
        <Category cag="Supermarket" more="/Supermarket"/>
        <Category cag="Fashion" more="/Fashion" />
        <Offer />
        <Fashmia />
        <Category cag="appliance" more="/appliance"/>
        <Category cag="Sports" more="/Sports"/>
        <Category cag="computing" more="/computing"/>
    </Layout>
    
  )
}
export default Home