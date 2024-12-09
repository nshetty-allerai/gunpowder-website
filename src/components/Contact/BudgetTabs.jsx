"use client"
import React, { useState } from "react";

const BudgetTabs = ({selectedTab, setSelectedTab}) => {
  // const [selectedTab, setSelectedTab] = useState('0 to 5k');

  const tabs = ["£0 to £5k", "£5K - £25K", "£25K - £50K", "£50K - £100K+"];

  return (
    <div className="bg-transparent rounded-lg">
      <h2 className="text-white mb-4">Project Budget</h2>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-y-3">
        {tabs.map((tab, index) => (
          <button
            type="button"
            name="project_budget"
            key={index}
            className={`flex-1 font-medium text-xs md:text-[13px] md:leading-[28px] text-center py-3 md:py-2 text-white transition-all 
            ${
              selectedTab === tab
                ? "bg-brand"
                : "bg-[#22034A]"
            }
            ${index==tabs.length-1 ? 'rounded-r-[25px]':''}
            ${index==0 ? 'rounded-l-[25px]':''}
            ${index==1 ? 'rounded-r-[25px] md:rounded-r-none':''}
            ${index==2 ? 'rounded-l-[25px] md:rounded-l-none':''}
            ${index !== tabs.length-1 ? 'border-r border-r-[#330653]':''}
            `}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BudgetTabs;
