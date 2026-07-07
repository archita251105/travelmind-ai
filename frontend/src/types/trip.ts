export type TripPlan = {
  overview: {
    destination: string;
    duration: string;
    budget: string;
    style: string;
  };

  days: {
    day: number;
    morning: string;
    afternoon: string;
    evening: string;
    estimatedCost: string;
  }[];

  hotels: string[];

  restaurants: string[];

  packing: string[];

  tips: string[];

  hiddenGems: string[];
};