// Hall enum values
export const HALLS = [
  "ABV",
  "Azad",
  "BCRoy",
  "BRH",
  "Gokhale",
  "HJB",
  "JCB",
  "Nehru",
  "LBS",
  "LLR",
  "MMM",
  "MS",
  "MT",
  "SNVH",
  "PDFBlock",
  "Patel",
  "RK",
  "RaniLaxmiBai",
  "RP",
  "SAM",
  "SBP1",
  "SBP2",
  "SNIG",
  "VSRC1",
  "VSRC2",
  "VidyaSagar",
  "ZakirHussain",
  "Radar",
] as const;

// Delivery status enum values
export const DELIVERY_STATUSES = [
  "PENDING",
  "OUT_FOR_DELIVERY",
  "DELIVERED",
  "CANCELLED",
  "NOT_AVAILABLE",
] as const;

// Finance expense type enum values
export const FINANCE_EXPENSE_TYPES = ["PURCHASE", "GENERAL"] as const;

// User role enum values
export const USER_ROLES = ["admin", "sales", "delivery", "treasurer"] as const;

// TypeScript types derived from the enums
export type Hall = (typeof HALLS)[number];
export type DeliveryStatus = (typeof DELIVERY_STATUSES)[number];
export type FinanceExpenseType = (typeof FINANCE_EXPENSE_TYPES)[number];
export type UserRole = (typeof USER_ROLES)[number];

// Helper functions for validation
export const isValidHall = (value: string): value is Hall => {
  return HALLS.includes(value as Hall);
};

export const isValidDeliveryStatus = (
  value: string
): value is DeliveryStatus => {
  return DELIVERY_STATUSES.includes(value as DeliveryStatus);
};

export const isValidFinanceExpenseType = (
  value: string
): value is FinanceExpenseType => {
  return FINANCE_EXPENSE_TYPES.includes(value as FinanceExpenseType);
};

export const isValidUserRole = (value: string): value is UserRole => {
  return USER_ROLES.includes(value as UserRole);
};
