
import "./navbar.css"
import logoImg from "../../img/logo.png"
import { Link, useLocation } from "react-router-dom"
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { TiArrowUpThick } from "react-icons/ti";


function Navbar(){
  let mobileBar = document.querySelector(".nav-link-bar")
 let openBar = document.querySelector(".nav-bar-icon .open-bar")
 window.onscroll=function(){
  let scrollTopButtom = document.querySelector(".scrol-top") 
  if(window.scrollY >= 600){
    scrollTopButtom.style.display= "flex"
    console.log("yy")
  }else{
    scrollTopButtom.style.display= "none"
  }
 }

 const handleScrollTop= ()=>{
  window.scrollTo(0, 0)
 }


    let location = useLocation()
   const [showNavbar, setShowNavbar]=useState(false)
   const handleShowNavbar=()=>{
    setShowNavbar(!showNavbar)
   
   }
   const handlerClickLink = ()=>{
    window.scrollTo(0, 0)
      if(window.innerWidth < 769){
        mobileBar.classList.remove("active")
        openBar.classList.remove("active")
        }
   }

  return(
    <div>
        <div className="nav-container sticky-top  ">
      <div className="logo">
          <img 
            src={logoImg}
            />
      </div>
      <ul className={`nav-link-bar ${showNavbar && "active"}`}>
          <div className="img-close">
            <img 
              src={logoImg}
              />
          </div>
          
          <li  >
          <Link className={location.pathname === "/" ? "active" : ""}to="/" onClick={handlerClickLink} >Home</Link>
          </li>
          <li>
          <Link className={location.pathname === "/about" ? "active" : ""} to="/about" onClick={handlerClickLink} >About Us</Link>
          </li>
          <li>
          <Link className={location.pathname === "/store" ? "active" : ""} to="/store" onClick={handlerClickLink} >Store</Link>
          </li>
          <li>
          <Link className="personal-training"  to="personaltraining" onClick={handlerClickLink} >Personal Training</Link>
          </li>
      </ul>
      <div className="nav-bar-icon">
          <div className={`open-bar ${showNavbar && "active"}`} onClick={handleShowNavbar} >
            <span></span>
            <span></span>
            <span></span>
          </div>
      </div>
         </div>
         <div className="scrol-top" onClick={handleScrollTop}>
            <TiArrowUpThick size={30} />
         </div>
    </div>
    
  )
}
export default Navbar









































// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import "./navbar.css"
// import { Image } from 'react-bootstrap';
// import logoImg from "../../img/logo.png"
// import { Link } from 'react-router-dom';
// function OffcanvasExample() {
// let navLink = document.querySelectorAll(".link-container a")
// let navMobile = document.querySelector(".offcanvas.show")
// let navbarMobileOpacity = document.querySelector(".offcanvas-backdrop.show")
// let toggler = document.querySelector(".navbar-toggler")
// console.log(toggler)
// navLink.forEach((e)=>{
//   e.onclick=function(){
   
//     navLink.forEach((el)=>{
//       el.classList.remove("active")
//     })
//     this.classList.add("active")
//     window.scrollTo(0,0)
//     if( window.innerWidth < 992 ){
 
//      }
//   }
// })








//   return (
//     <>
//       {['lg'].map((expand) => (
//         <Navbar  key={expand} variant='dark' expand={expand} className="fixed-top ">
//           <Container fluid>
//             <Navbar.Brand href="#">
//               <Link to="/">
//                 <Image
//                     style={{ height:"40px",marginLeft:"10px" }} 
//                       src={logoImg}
//                 />
//               </Link>
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-${expand}`}
//               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//               placement="end"
//             >
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                 <Image
//                    style={{ height:"50px" }} 
//                     src={logoImg}
//               />
//                 </Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1 pe-3 link-container">
//                   <Link to="/" className='active' >Home</Link>
//                   <Link to="/about" >About Us</Link>
//                   <Link to="/store">Store</Link>
//                 </Nav>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//         </Navbar>
//       ))}
//     </>
//   );
// }

// export default OffcanvasExample;







// navLink.forEach((e)=>{
//   e.onclick=function(){
//     navLink.forEach((el)=>{
//       el.classList.remove("active")
//     })
//     this.classList.add("active")
//     window.scrollTo(0,0)
//    if( window.innerWidth < 992 ){
//     navMobile.classList.toggle("hiding")
//     navbarMobileOpacity.style.opacity="0"
//    }
//   }
// })

     // navMobile.classList.add("hiding")
      // toggler.classList.add("collapsed")
      // navbarMobileOpacity.style.opacity="0"