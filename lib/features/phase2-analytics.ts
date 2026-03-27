import { PlanTier } from "../plans/config";

export interface AnalyticsFeatures {
  basicDashboard: boolean;
  realtimeStats: boolean;
  audienceInsights: boolean;
  competitorAnalysis: boolean;
  revenueTracking: boolean;
  customReports: boolean;
  exportData: boolean;
  predictiveAnalytics: boolean;
  multiChannelOverview: boolean;
  roiCalculator: boolean;
}

export const PHASE2_FEATURES: Record<PlanTier, AnalyticsFeatures> = {
  gratis: {
    basicDashboard: true,
    realtimeStats: false,
    audienceInsights: false,
    competitorAnalysis: false,
    revenueTracking: false,
    customReports: false,
    exportData: false,
    predictiveAnalytics: false,
    multiChannelOverview: false,
    roiCalculator: false,
  },
  bronze: {
    basicDashboard: true,
    realtimeStats: true,
    audienceInsights: true,
    competitorAnalysis: false,
    revenueTracking: false,
    customReports: false,
    exportData: false,
    predictiveAnalytics: false,
    multiChannelOverview: false,
    roiCalculator: false,
  },
  silber: {
    basicDashboard: true,
    realtimeStats: true,
    audienceInsights: true,
    competitorAnalysis: true,
    revenueTracking: true,
    customReports: false,
    exportData: true,
    predictiveAnalytics: false,
    multiChannelOverview: true,
    roiCalculator: false,
  },
  gold: {
    basicDashboard: true,
    realtimeStats: true,
    audienceInsights: true,
    competitorAnalysis: true,
    revenueTracking: true,
    customReports: true,
    exportData: true,
    predictiveAnalytics: true,
    multiChannelOverview: true,
    roiCalculator: true,
  },
  platin: {
    basicDashboard: true,
    realtimeStats: true,
    audienceInsights: true,
    competitorAnalysis: true,
    revenueTracking: true,
    customReports: true,
    exportData: true,
    predictiveAnalytics: true,
    multiChannelOverview: true,
    roiCalculator: true,
  },
  diamant: {
    basicDashboard: true,
    realtimeStats: true,
    audienceInsights: true,
    competitorAnalysis: true,
    revenueTracking: true,
    customReports: true,
    exportData: true,
    predictiveAnalytics: true,
    multiChannelOverview: true,
    roiCalculator: true,
  },
};

export function getAnalyticsFeatures(tier: PlanTier): AnalyticsFeatures {
  return PHASE2_FEATURES[tier];
}
