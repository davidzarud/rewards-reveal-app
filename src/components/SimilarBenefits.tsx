
import { useState } from "react";
import { similarBenefits } from "@/data/mockData";
import BenefitCard from "@/components/BenefitCard";
import { Search } from "lucide-react";
import TotalSavings from "@/components/TotalSavings";

const SimilarBenefits = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredBenefits = similarBenefits.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const totalPotentialSavings = similarBenefits.reduce((total, item) => {
    // Handle "Up to $X" format
    const savingsText = item.savings.replace("Up to ", "").replace("$", "");
    return total + parseFloat(savingsText);
  }, 0);

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search similar benefits..."
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-bank-medium-gray bg-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <TotalSavings 
        title="Potential Savings Available" 
        amount={`$${totalPotentialSavings}`}
        description="Based on your spending habits, these benefits match your lifestyle"
        type="similar"
      />
      
      <h2 className="text-xl font-bold text-bank-dark-blue">Recommended For You</h2>
      
      <div className="space-y-4">
        {filteredBenefits.length > 0 ? (
          filteredBenefits.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-bank-dark-gray">No similar benefits found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimilarBenefits;
