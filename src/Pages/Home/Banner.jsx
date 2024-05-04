// import React from 'react';
import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
// import img5 from "../../assets/images/banner/5.jpg";
// import img6 from "../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute rounded-xl h-full pt-8 pl-12 flex item-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-1/2 pl-4">
            <h2 className="text-6xl ">Affordable Price For Car Servicing</h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide4"
            className="btn btn-circle mr-20  text-white m bg-black  hover:bg-orange-700"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-black  text-white mr-20 hover:bg-orange-700"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute  rounded-xl h-full pt-8 pl-12 flex item-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-1/2 pl-4">
            <h2 className="text-6xl ">Affordable Price For Car Servicing</h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide1"
            className="btn btn-circle bg-black text-white mr-20 hover:bg-orange-700"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-black  text-white mr-20 hover:bg-orange-700"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="absolute  h-full pt-8 pl-12 flex item-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-1/2 pl-4">
            <h2 className="text-6xl ">Affordable Price For Car Servicing</h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute rounded-xl  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide2"
            className="btn btn-circle mr-20  text-white bg-black hover:bg-orange-700"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle text-white mr-20 bg-black hover:bg-orange-700"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div className="absolute h-full pt-8 pl-12 flex item-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-1/2 pl-4">
            <h2 className="text-6xl ">Affordable Price For Car Servicing</h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide3"
            className="btn btn-circle bg-black text-white mr-20 hover:bg-orange-700"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-black  text-white mr-20 hover:bg-orange-700"
          >
            ❯
          </a>
        </div>
      </div>
      <h2>This is home</h2>
    </div>
  );
};

export default Banner;
