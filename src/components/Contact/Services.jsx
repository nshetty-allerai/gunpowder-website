"use client";
import React from "react";

const Services = ({ selectedServices, setSelectedServices }) => {
  const allServices = [
    "Websites",
    "UI/UX Design",
    "Mobile App",
    "Fintech",
    "Web App",
    "E-Commerce",
    "Tech transformation",
    "Ongoing maintenance",
  ];

  const handleClickOnServices = (service) => {
    // Toggle service in selectedServices
    if (selectedServices.includes(service)) {
      // Remove service if already selected
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      // Add service if not selected
      setSelectedServices([...selectedServices, service]);
    }
  };

  return (
    <div className="bg-transparent rounded-lg">
      <h2 className="text-white mb-4">Select services</h2>
      <div className="flex md:flex-wrap overflow-x-auto services-scroll flex-nowrap gap-y-2 gap-x-2 mb-6">
        {allServices.map((tab, index) => (
          <button
            type="button"
            name="Services"
            key={index}
            // className={` px-5 font-medium py-2 rounded-[25px]  ${
            //   selectedServices.includes(tab) ? "text-brand border border-brand" : "text-[#F2E2F5] border border-[#330653]"
            // }`}
            className={`inline-flex items-center px-5 font-medium py-2 rounded-[25px] shrink-0 ${
                selectedServices.includes(tab)
                  ? "text-brand border border-brand"
                  : "text-[#F2E2F5] border border-[#330653]"
              }`}
              
            onClick={() => handleClickOnServices(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Services;
