import React from 'react'
import img1 from "../Images/c-1.jpg"
import img2 from "../Images/c-2.jpg"
import img3 from "../Images/c-3.jpg"


function Carousel() {
  return (
    <div>
        <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" >
        <div className="carousel-inner">
            <div className='carousel-caption' style={{ "zIndex" :"10"}}>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
               </form>
            </div>
            <div className="carousel-item active">
            <img src={img1} className="d-block w-100" style={{ filter:"brightness(30%)"}} />
            </div>
            <div className="carousel-item">
            <img src={img2} className="d-block w-100" style={{ filter:"brightness(30%)"}} />
            </div>
            <div className="carousel-item">
            <img src={img3} className="d-block w-100" style={{ filter:"brightness(30%)"}} />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        </div>
    </div>
  )
}

export default Carousel

