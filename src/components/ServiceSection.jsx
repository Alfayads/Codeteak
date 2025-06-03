import React from "react";
import { Cover } from "./ui/Cover";
import ServicesCard from "./ServicesCard";
import { services } from "./ui/data/servicesData";
import { Link } from "react-router-dom";


export function ServiceSection() {
  return (
    <div className="py-16 px-6 bg-white" id="service-section">
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        <Cover>Services</Cover>
      </h1>

      <div className=" gap-10 grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-10">
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            title={service.title}
            description={service.description}
            details={service.details}
            image={service.image}
          />
        ))}
      </div>


      {/* Show All Button */}
      <div className="flex justify-center">
        <Link to={"/services"}>
        <button className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-red-500 to-rose-500 hover:from-rose-500 hover:to-red-500 transition duration-300 shadow-lg">
          Show All
        </button>
        </Link>
      </div>
    </div>
  );
}
