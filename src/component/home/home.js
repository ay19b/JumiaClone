import { Typography ,Grid,Container} from '@material-ui/core'
import Nav from '../navbar/nav'
import React from 'react'
import Carousel from '../carousel/carousel'
import SideBar from '../sideBar/sideBar'
import Footer from '../footer/footer'
import Pillars from "../pillars/pillars";
import Categorys from '../category/categorys'
import useStyles from './style';
import Layout from '../Layout'

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
        <Categorys/>
    </Layout>
    
  )
}
export default Home