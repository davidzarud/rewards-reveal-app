
import { useState } from "react";
import { userProfile } from "@/data/mockData";
import Header from "@/components/Header";
import TabNavigation from "@/components/TabNavigation";
import MissedOpportunities from "@/components/MissedOpportunities";
import SimilarBenefits from "@/components/SimilarBenefits";
import BottomNavigation from "@/components/BottomNavigation";

type TabType = "missed" | "similar";

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabType>("missed");

  return (
    <div className="flex flex-col min-h-screen bg-bank-light-gray">
      {/* Header */}
      <Header 
        name={userProfile.name} 
        pointsBalance={userProfile.pointsBalance}
        daysToExpiry={userProfile.daysToExpiry}
      />
      
      {/* Tab Navigation */}
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Content */}
      <main className="flex-1 px-4 pt-4 pb-20 overflow-y-auto">
        {activeTab === "missed" ? (
          <MissedOpportunities />
        ) : (
          <SimilarBenefits />
        )}
      </main>
      
      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Index;
