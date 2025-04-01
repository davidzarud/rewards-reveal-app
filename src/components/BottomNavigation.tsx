
import { Home, CreditCard, Heart, Search, User } from "lucide-react";

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-bank-medium-gray p-2 flex justify-around">
      <button className="flex flex-col items-center p-2">
        <Home className="nav-icon" />
        <span className="text-xs mt-1 text-bank-dark-gray">Home</span>
      </button>
      
      <button className="flex flex-col items-center p-2">
        <Search className="nav-icon" />
        <span className="text-xs mt-1 text-bank-dark-gray">Explore</span>
      </button>
      
      <button className="flex flex-col items-center p-2">
        <Heart className="nav-icon active-nav-icon" />
        <span className="text-xs mt-1 text-bank-red">Rewards</span>
      </button>
      
      <button className="flex flex-col items-center p-2">
        <CreditCard className="nav-icon" />
        <span className="text-xs mt-1 text-bank-dark-gray">Cards</span>
      </button>
      
      <button className="flex flex-col items-center p-2">
        <User className="nav-icon" />
        <span className="text-xs mt-1 text-bank-dark-gray">Profile</span>
      </button>
    </div>
  );
};

export default BottomNavigation;
