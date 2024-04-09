import "./store.css"
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import wheyProtein from "./img/whey protein.png"
import creatine from "./img/creatine.png"
import multyVitamen from "./img/multy-vitamen.png"
import suplement from"./img/11zon_resized.jpg"
import {Product,WheyProtein,Creatine,MultyVitamen,Accessories}from "./Product";
import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../Home/footer/Footer";
function Store(){
  const [product,setProduct]=useState( <Product/>)
  let filter = document.querySelectorAll(".store-filter div ")
  
    filter.forEach((e)=>{
      e.onclick=function(){
          filter.forEach((el)=>{
            el.classList.remove("active")
          })
          this.classList.add("active")
      }
    })
      
    return (
      <>
      <motion.div
       className="main-store"
       initial={{opacity:0,}}
       animate={{opacity:"100%",}}
       exit={{opacity:0,}}
       >
        <div className="offers">
            {/* <h1 >Oxygen gym Store Best Prices & Best Quality </h1> */}
              <Carousel className="offers-store-slider" data-bs-theme="dark">
              <Carousel.Item>
                <img
                  className
                  src={wheyProtein}
                  alt="First slide"
                />
                  {/* <Carousel.Caption>
                  <h5>Second slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className
                  src={suplement}
                  alt="First slide"
                />
                  {/* <Carousel.Caption>
                  <h5>Second slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className
                  src={creatine}
                  alt="Second slide"
                />
                {/* <Carousel.Caption>
                  <h5>Second slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>
        </div>
        <div className="store-filter">
          <div >
            <Nav.Link onClick={()=>{setProduct(<WheyProtein/>)}}>Whey Protein</Nav.Link>
          </div>
          <div >
            <Nav.Link onClick={()=>{setProduct(<Creatine/>)}}>Creatine</Nav.Link>
          </div>
          <div>
            <Nav.Link onClick={()=>{setProduct(<MultyVitamen/>)}}>Multy Vaitamen</Nav.Link>
          </div>
          <div >
            <Nav.Link onClick={()=>{setProduct(<Accessories/>)}}>Accessories</Nav.Link>
          </div>
            </div>
          <div className="product row gap-3">
            {product}
          </div>
      </motion.div>
      <Footer/>
      </>
      );
}

export default Store;