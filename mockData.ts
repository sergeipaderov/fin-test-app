export interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string;
}

export const MOCKED_TRANSACTIONS: Transaction[] = [
  { id: "1", description: "Coffee Shop", amount: 4.5, date: "2025-06-24" },
  { id: "2", description: "Groceries", amount: 78.99, date: "2025-06-23" },
  { id: "3", description: "Public Transport", amount: 2.1, date: "2025-06-23" },
  {
    id: "4",
    description: "Restaurant Dinner",
    amount: 35.0,
    date: "2025-06-22",
  },
  {
    id: "5",
    description: "Online Subscription",
    amount: 12.99,
    date: "2025-06-21",
  },
  { id: "6", description: "Bookstore", amount: 18.5, date: "2025-06-20" },
  { id: "7", description: "Gas Station", amount: 45.0, date: "2025-06-19" },
  { id: "8", description: "Clothing Store", amount: 60.0, date: "2025-06-18" },
  { id: "9", description: "Cinema Tickets", amount: 24.0, date: "2025-06-17" },
  { id: "10", description: "Gym Membership", amount: 30.0, date: "2025-06-16" },
  { id: "11", description: "Gadget Repair", amount: 80.0, date: "2025-06-15" },
  { id: "12", description: "Cafe Latte", amount: 3.75, date: "2025-06-14" },
  { id: "13", description: "Online Course", amount: 99.0, date: "2025-06-13" },
  { id: "14", description: "Pizza Delivery", amount: 22.5, date: "2025-06-12" },
  { id: "15", description: "Hardware Store", amount: 15.2, date: "2025-06-11" },
  { id: "16", description: "Concert Ticket", amount: 75.0, date: "2025-06-10" },
  { id: "17", description: "Parking Fee", amount: 5.0, date: "2025-06-09" },
];
