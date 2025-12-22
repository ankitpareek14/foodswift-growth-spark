// FoodSwift Order Data Analysis

export interface MonthlyData {
  month: string;
  totalOrders: number;
  successOrders: number;
  cancelledOrders: number;
  cancellationRate: number;
  avgOrderValue: number;
}

export interface CancellationReason {
  reason: string;
  count: number;
  percentage: number;
}

export interface RestaurantData {
  restaurantId: string;
  totalOrders: number;
  cancellations: number;
  cancellationRate: number;
}

// Analyzed data from CSV
export const monthlyMetrics: MonthlyData[] = [
  {
    month: "Jan 2025",
    totalOrders: 130,
    successOrders: 121,
    cancelledOrders: 9,
    cancellationRate: 6.9,
    avgOrderValue: 498,
  },
  {
    month: "Feb 2025",
    totalOrders: 125,
    successOrders: 114,
    cancelledOrders: 11,
    cancellationRate: 8.8,
    avgOrderValue: 492,
  },
  {
    month: "Mar 2025",
    totalOrders: 100,
    successOrders: 67,
    cancelledOrders: 33,
    cancellationRate: 33.0,
    avgOrderValue: 518,
  },
];

export const cancellationReasons: CancellationReason[] = [
  { reason: "Item Unavailable", count: 22, percentage: 41.5 },
  { reason: "High Order Volume", count: 16, percentage: 30.2 },
  { reason: "Unexpected Closure", count: 9, percentage: 17.0 },
  { reason: "Operational Issues", count: 6, percentage: 11.3 },
];

export const restaurantPerformance: RestaurantData[] = [
  { restaurantId: "R6", totalOrders: 28, cancellations: 10, cancellationRate: 35.7 },
  { restaurantId: "R10", totalOrders: 35, cancellations: 9, cancellationRate: 25.7 },
  { restaurantId: "R5", totalOrders: 32, cancellations: 8, cancellationRate: 25.0 },
  { restaurantId: "R8", totalOrders: 30, cancellations: 7, cancellationRate: 23.3 },
  { restaurantId: "R2", totalOrders: 29, cancellations: 6, cancellationRate: 20.7 },
];

// Time-based analysis
export const peakHourCancellations = [
  { hour: "12:00-13:00", cancellations: 18, percentage: 34 },
  { hour: "19:00-21:00", cancellations: 22, percentage: 41.5 },
  { hour: "Other", cancellations: 13, percentage: 24.5 },
];

// Customer impact data
export const customerImpact = {
  uniqueAffectedUsers: 42,
  repeatCancellations: 8,
  estimatedChurnRisk: 28,
  lostRevenue: 27650,
};
