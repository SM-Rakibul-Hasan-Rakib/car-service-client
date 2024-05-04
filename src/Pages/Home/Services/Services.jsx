import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import img3 from "../../../assets/images/about_us/Vector.svg";
import { FcOvertime } from "react-icons/fc";
import { GrPhone } from "react-icons/gr";
import { TfiLocationPin } from "react-icons/tfi";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-4 ">
      <div className="text-center">
        <h3 className="text-3xl text-orange-500 font-extrabold">
          Our Services
        </h3>
        <h2 className="text-5xl mb-4 font-bold">Our Service Area</h2>
        <p className="text-black text-lg mb-10">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="container grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="mt-12 mb-20 flex justify-center">
        <a className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
          <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative">More Service</span>
          ...
        </a>
      </div>

      <div className="mx-auto lex justify-center ">
        <div className="stats shadow">
          <div className="stat text-white bg-black">
            <div className="stat-figure text-primary"></div>
            <div className="text-5xl">
              <FcOvertime />
            </div>
            <div className="stat-title text-white text-2xl">
              We are open monday-friday
            </div>
            <div className="stat-value text-primary text-3xl font-bold">
              7:00 am - 9:00 pm
            </div>
            <div className="stat-desc"></div>
          </div>

          <div className="bg-black stat">
            <div className="stat-title text-2xl text-white">
              <div className=" stat-figure text-secondary text-4xl">
                <GrPhone />
              </div>
              Have a qu estion?
            </div>
            <div className="stat-value text-secondary">+2546 251 2658 </div>
            <div className="stat-desc"></div>
          </div>

          <div className="stat bg-black">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full"></div>
              </div>
            </div>
            <div className="text-5xl text-purple-500">
              <TfiLocationPin />
            </div>
            <div className="stat-value text-white">
              Need a repair? our address
            </div>

            <div className="stat-title">Tasks done</div>
            {/* <div className="stat-desc text-purple-500"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
