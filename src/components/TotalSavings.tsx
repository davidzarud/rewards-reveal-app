
interface TotalSavingsProps {
  title: string;
  amount: string;
  description: string;
  type: 'missed' | 'similar';
}

const TotalSavings = ({ title, amount, description, type }: TotalSavingsProps) => {
  // Get numeric value from amount string (removing $ and "Up to" if present)
  const numericAmount = amount.replace(/[^\d.]/g, '');
  
  // If amount is empty or not valid, display "--" 
  const displayAmount = numericAmount && !isNaN(parseFloat(numericAmount)) 
    ? amount 
    : "$0";

  return (
    <div className={`p-4 rounded-xl shadow-sm ${type === 'missed' ? 'bg-red-50' : 'bg-blue-50'}`}>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className={`text-3xl font-bold mb-1 ${type === 'missed' ? 'text-bank-red' : 'text-bank-dark-blue'}`}>
        {displayAmount}
      </p>
      <p className="text-sm text-bank-dark-gray">{description}</p>
    </div>
  );
};

export default TotalSavings;
