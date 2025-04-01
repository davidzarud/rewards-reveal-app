
interface TotalSavingsProps {
  title: string;
  amount: string;
  description: string;
  type: 'missed' | 'similar';
}

const TotalSavings = ({ title, amount, description, type }: TotalSavingsProps) => {
  return (
    <div className={`p-4 rounded-xl shadow-sm ${type === 'missed' ? 'bg-red-50' : 'bg-blue-50'}`}>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className={`text-3xl font-bold mb-1 ${type === 'missed' ? 'text-bank-red' : 'text-bank-dark-blue'}`}>
        {amount}
      </p>
      <p className="text-sm text-bank-dark-gray">{description}</p>
    </div>
  );
};

export default TotalSavings;
