
import { Benefit } from "@/data/mockData";
import { Clock, Tag } from "lucide-react";

interface BenefitCardProps {
  benefit: Benefit;
}

const BenefitCard = ({ benefit }: BenefitCardProps) => {
  return (
    <div className="benefit-card">
      <div className={`benefit-card-badge ${benefit.type === 'missed' ? 'missed-opportunity' : 'similar-benefit'}`}>
        {benefit.type === 'missed' ? 'Missed' : 'Recommended'}
      </div>
      
      <div className="flex flex-col md:flex-row">
        <div className="h-40 md:w-1/3 overflow-hidden">
          <img 
            src={benefit.image} 
            alt={benefit.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-4 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-bank-dark-blue">{benefit.title}</h3>
            <div className="savings-chip">
              {benefit.savings}
            </div>
          </div>
          
          <p className="text-sm text-bank-dark-gray mb-3">{benefit.description}</p>
          
          <div className="flex items-center text-xs text-bank-dark-gray mb-2">
            <Tag size={14} className="mr-1" />
            <span>{benefit.category}</span>
          </div>
          
          {benefit.type === 'missed' && benefit.purchaseDate && (
            <div className="flex items-center text-xs text-bank-dark-gray">
              <Clock size={14} className="mr-1" />
              <span>Purchase: {new Date(benefit.purchaseDate).toLocaleDateString()}</span>
              {benefit.originalPrice && (
                <span className="ml-2">Original Price: {benefit.originalPrice}</span>
              )}
            </div>
          )}
          
          {benefit.type === 'similar' && benefit.points && (
            <div className="mt-auto pt-2">
              <div className="points-chip w-fit">
                {benefit.points} points
              </div>
            </div>
          )}
          
          <button className="mt-3 py-2 px-4 rounded-lg text-sm font-medium bg-bank-red text-white hover:bg-red-700 transition-colors">
            {benefit.type === 'missed' ? 'View Similar Offer' : 'Redeem Offer'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
