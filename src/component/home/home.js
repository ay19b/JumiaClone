import React, { useEffect, useState } from "react";
import './home.css'
import Header from '../header/header'
import Categorys from '../category/categorys'
import SideBar from '../sideBar/sideBar'
import Slide from '../slide/slide'
import Pillars from '../pillars/pillars'
import Footer from "../footer/footer"
import ReactLoading from "react-loading";

export default function Home() {
    const [done, setDone] = useState(undefined);

    const Data=()=>{

        return(
        <div className="home">
          <Header />
          <SideBar />
          <Slide />
          <Pillars />
          <Categorys />
          <Footer />
        </div>
        )
    }
    useEffect(() => {
        setTimeout(() => {
          <data />
          setDone(true);
        }, 2500);
      }, []);
    return (

    <>
      {!done ? (
        <ReactLoading
          type={"bubbles"}
          color={"orange"}
          height={600}
          width={400}
          className={'loader'}
        />
      ) : (
           
              <Data />
            
      )}
    </>

    )
}
