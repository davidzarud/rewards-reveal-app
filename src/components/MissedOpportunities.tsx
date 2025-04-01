
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { missedOpportunities } from "@/data/mockData";
import BenefitCard from "@/components/BenefitCard";
import { Search } from "lucide-react";
import TotalSavings from "@/components/TotalSavings";
import { fetchMissedOpportunities } from "@/services/api";
import { toast } from "@/hooks/use-toast";

const MissedOpportunities = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const { data: opportunities = [], isLoading, error } = useQuery({
    queryKey: ['missedOpportunities'],
    queryFn: fetchMissedOpportunities,
  });
  
  // Show toast if there's an error
  useEffect(() => {
    if (error) {
      toast({
        title: "Error loading missed opportunities",
        description: "Could not load data. Showing mock data instead.",
        variant: "destructive",
      });
      console.error("Error loading missed opportunities:", error);
    }
  }, [error]);
  
  const filteredOpportunities = opportunities.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const totalPotentialSavings = opportunities.reduce(
    (total, item) => total + parseFloat(item.savings.replace("$", "")), 
    0
  );

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="text-center py-8">
          <p className="text-bank-dark-gray">Loading missed opportunities...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search missed opportunities..."
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-bank-medium-gray bg-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <TotalSavings 
        title="Potential Savings Missed" 
        amount={`$${totalPotentialSavings}`}
        description="You could have saved this amount by using our rewards program"
        type="missed"
      />
      
      <h2 className="text-xl font-bold text-bank-dark-blue">Your Missed Opportunities</h2>
      
      <div className="space-y-4">
        {filteredOpportunities.length > 0 ? (
          filteredOpportunities.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-bank-dark-gray">No missed opportunities found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MissedOpportunities;
