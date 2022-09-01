import React from 'react'
import m1 from '../../img/2.png';
import m2 from '../../img/3.png';
import m3 from '../../img/4.jpg';
import ProductList from '../productList/ProductList';
import Testimonials from "../TestiMonials/TestiMonials"
import TestiMonialsDetails from '../TestiMonialsDetails/TestiMonialsDetails';
const Intro = () => {
  return (
    <div>
     <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel" style={{marginTop:'115px'}}>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={m1} className="d-block w-100" height="500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={m2} className="d-block w-100" height="500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={m3} className="d-block w-100" height="500" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<ProductList/>
<Testimonials/>
    </div>
  )
}

export default Intro
