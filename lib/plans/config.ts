export type PlanTier = "gratis" | "bronze" | "silber" | "gold" | "platin" | "diamant";
export const PLANS = {
  gratis: { id: "gratis", name: "Gratis", price: 0 },
  bronze: { id: "bronze", name: "Bronze", price: 1900 },
  silber: { id: "silber", name: "Silber", price: 4900 },
  gold: { id: "gold", name: "Gold", price: 9900 },
  platin: { id: "platin", name: "Platin", price: 19900 },
  diamant: { id: "diamant", name: "Diamant", price: 49900 }
} as const;
