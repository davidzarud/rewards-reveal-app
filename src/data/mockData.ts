
export type Benefit = {
  id: string;
  title: string;
  description: string;
  savings: string;
  points?: number;
  category: string;
  image: string;
  type: 'missed' | 'similar';
  purchaseDate?: string;
  originalPrice?: string;
};

export type UserProfile = {
  name: string;
  pointsBalance: number;
  daysToExpiry: number;
};

export const userProfile: UserProfile = {
  name: "David",
  pointsBalance: 7500,
  daysToExpiry: 5
};

export const missedOpportunities: Benefit[] = [
  {
    id: "m1",
    title: "Flight Discounts",
    description: "You could have saved on your flight to London. Next time use our app!",
    savings: "$75",
    category: "Travel",
    image: "/lovable-uploads/8495be99-264e-433e-8d24-f478b4834528.png",
    type: "missed",
    purchaseDate: "2023-12-10",
    originalPrice: "$450"
  },
  {
    id: "m2",
    title: "Restaurant Deal",
    description: "You paid full price at The Italian Kitchen. We offer 15% cashback.",
    savings: "$23",
    category: "Dining",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=500",
    type: "missed",
    purchaseDate: "2024-01-15",
    originalPrice: "$155"
  },
  {
    id: "m3",
    title: "Hotel Booking",
    description: "Your stay at Grand Hotel could have been cheaper with our rewards.",
    savings: "$120",
    category: "Accommodation",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=500",
    type: "missed",
    purchaseDate: "2024-02-05",
    originalPrice: "$800"
  },
  {
    id: "m4",
    title: "Online Shopping",
    description: "Your electronics purchase could have earned you points and discounts.",
    savings: "$45",
    category: "Shopping",
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=500",
    type: "missed",
    purchaseDate: "2024-03-01",
    originalPrice: "$299"
  }
];

export const similarBenefits: Benefit[] = [
  {
    id: "s1",
    title: "Airline Ticket Offer",
    description: "Based on your travel spending, get $100 off on your next flight booking.",
    savings: "$100",
    points: 2000,
    category: "Travel",
    image: "/lovable-uploads/8495be99-264e-433e-8d24-f478b4834528.png",
    type: "similar"
  },
  {
    id: "s2",
    title: "Fine Dining Package",
    description: "Enjoy a special menu at top restaurants with 20% discount.",
    savings: "$30",
    points: 1500,
    category: "Dining",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=500",
    type: "similar"
  },
  {
    id: "s3",
    title: "Luxury Hotel Deal",
    description: "Get a free night when you book 3 nights at partner hotels.",
    savings: "Up to $200",
    points: 5000,
    category: "Accommodation",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=500",
    type: "similar"
  },
  {
    id: "s4",
    title: "Electronics Store Discount",
    description: "15% off on all purchases at TechWorld stores.",
    savings: "Up to $50",
    points: 1000,
    category: "Shopping",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=500",
    type: "similar"
  },
  {
    id: "s5",
    title: "Cinema Tickets",
    description: "Buy one, get one free on all movie tickets at CineStar.",
    savings: "$15",
    points: 800,
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1585647347384-2522db1f69c2?q=80&w=500",
    type: "similar"
  }
];
