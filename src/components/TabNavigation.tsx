
import React from "react";

type TabNavigationProps = {
  activeTab: "missed" | "similar";
  setActiveTab: (tab: "missed" | "similar") => void;
};

const TabNavigation = ({ activeTab, setActiveTab }: TabNavigationProps) => {
  return (
    <div className="flex bg-white shadow-sm">
      <button
        className={`flex-1 py-4 font-medium text-center transition-colors ${
          activeTab === "missed"
            ? "text-bank-red border-b-2 border-bank-red"
            : "text-bank-dark-gray"
        }`}
        onClick={() => setActiveTab("missed")}
      >
        Missed Opportunities
      </button>
      <button
        className={`flex-1 py-4 font-medium text-center transition-colors ${
          activeTab === "similar"
            ? "text-bank-red border-b-2 border-bank-red"
            : "text-bank-dark-gray"
        }`}
        onClick={() => setActiveTab("similar")}
      >
        Similar Benefits
      </button>
    </div>
  );
};

export default TabNavigation;
