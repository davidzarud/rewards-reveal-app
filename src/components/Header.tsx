
import { Heart } from "lucide-react";

type HeaderProps = {
  name: string;
  pointsBalance: number;
  daysToExpiry: number;
};

const Header = ({ name, pointsBalance, daysToExpiry }: HeaderProps) => {
  return (
    <header className="bg-bank-dark-blue text-white p-4 pt-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="bg-bank-red rounded-full w-12 h-12 flex items-center justify-center overflow-hidden">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div className="ml-3">
            <h1 className="text-xl font-bold">Bank Rewards</h1>
          </div>
        </div>
        <div>
          <p className="text-right text-lg">Hello, {name}!</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 pb-2">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-3">
          <p className="text-sm text-white/80">Available Points</p>
          <p className="text-3xl font-bold">{pointsBalance.toLocaleString()}</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-3">
          <p className="text-sm text-white/80">Points Expiring</p>
          <div className="flex items-end gap-2">
            <p className="text-3xl font-bold">{daysToExpiry}</p>
            <p className="text-sm text-white/80 mb-1">days</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
