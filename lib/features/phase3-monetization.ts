import { PlanTier } from "../plans/config";

export interface MonetizationFeatures {
  stripeIntegration: boolean;
  digitalProducts: boolean;
  subscriptionManagement: boolean;
  affiliateSystem: boolean;
  invoicing: boolean;
  multiCurrency: boolean;
  payoutDashboard: boolean;
  sponsorshipMarketplace: boolean;
  tipJar: boolean;
  revenueForecasting: boolean;
}

export const PHASE3_FEATURES: Record<PlanTier, MonetizationFeatures> = {
  gratis: {
    stripeIntegration: false,
    digitalProducts: false,
    subscriptionManagement: false,
    affiliateSystem: false,
    invoicing: false,
    multiCurrency: false,
    payoutDashboard: false,
    sponsorshipMarketplace: false,
    tipJar: true,
    revenueForecasting: false,
  },
  bronze: {
    stripeIntegration: true,
    digitalProducts: true,
    subscriptionManagement: false,
    affiliateSystem: false,
    invoicing: false,
    multiCurrency: false,
    payoutDashboard: true,
    sponsorshipMarketplace: false,
    tipJar: true,
    revenueForecasting: false,
  },
  silber: {
    stripeIntegration: true,
    digitalProducts: true,
    subscriptionManagement: true,
    affiliateSystem: true,
    invoicing: true,
    multiCurrency: false,
    payoutDashboard: true,
    sponsorshipMarketplace: false,
    tipJar: true,
    revenueForecasting: false,
  },
  gold: {
    stripeIntegration: true,
    digitalProducts: true,
    subscriptionManagement: true,
    affiliateSystem: true,
    invoicing: true,
    multiCurrency: true,
    payoutDashboard: true,
    sponsorshipMarketplace: true,
    tipJar: true,
    revenueForecasting: true,
  },
  platin: {
    stripeIntegration: true,
    digitalProducts: true,
    subscriptionManagement: true,
    affiliateSystem: true,
    invoicing: true,
    multiCurrency: true,
    payoutDashboard: true,
    sponsorshipMarketplace: true,
    tipJar: true,
    revenueForecasting: true,
  },
  diamant: {
    stripeIntegration: true,
    digitalProducts: true,
    subscriptionManagement: true,
    affiliateSystem: true,
    invoicing: true,
    multiCurrency: true,
    payoutDashboard: true,
    sponsorshipMarketplace: true,
    tipJar: true,
    revenueForecasting: true,
  },
};

export function getMonetizationFeatures(tier: PlanTier): MonetizationFeatures {
  return PHASE3_FEATURES[tier];
}
