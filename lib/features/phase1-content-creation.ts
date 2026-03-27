import { PlanTier } from "../plans/config";

export interface ContentCreationFeatures {
  videoEditor: boolean;
  thumbnailGenerator: boolean;
  scriptWriter: boolean;
  batchUpload: boolean;
  templateLibrary: boolean;
  aiContentSuggestions: boolean;
  multiPlatformPublish: boolean;
  scheduledPosting: boolean;
  contentCalendar: boolean;
  hashtagOptimizer: boolean;
}

export const PHASE1_FEATURES: Record<PlanTier, ContentCreationFeatures> = {
  gratis: {
    videoEditor: false,
    thumbnailGenerator: true,
    scriptWriter: false,
    batchUpload: false,
    templateLibrary: true,
    aiContentSuggestions: false,
    multiPlatformPublish: false,
    scheduledPosting: false,
    contentCalendar: false,
    hashtagOptimizer: false,
  },
  bronze: {
    videoEditor: true,
    thumbnailGenerator: true,
    scriptWriter: false,
    batchUpload: false,
    templateLibrary: true,
    aiContentSuggestions: true,
    multiPlatformPublish: false,
    scheduledPosting: true,
    contentCalendar: true,
    hashtagOptimizer: false,
  },
  silber: {
    videoEditor: true,
    thumbnailGenerator: true,
    scriptWriter: true,
    batchUpload: true,
    templateLibrary: true,
    aiContentSuggestions: true,
    multiPlatformPublish: true,
    scheduledPosting: true,
    contentCalendar: true,
    hashtagOptimizer: true,
  },
  gold: {
    videoEditor: true,
    thumbnailGenerator: true,
    scriptWriter: true,
    batchUpload: true,
    templateLibrary: true,
    aiContentSuggestions: true,
    multiPlatformPublish: true,
    scheduledPosting: true,
    contentCalendar: true,
    hashtagOptimizer: true,
  },
  platin: {
    videoEditor: true,
    thumbnailGenerator: true,
    scriptWriter: true,
    batchUpload: true,
    templateLibrary: true,
    aiContentSuggestions: true,
    multiPlatformPublish: true,
    scheduledPosting: true,
    contentCalendar: true,
    hashtagOptimizer: true,
  },
  diamant: {
    videoEditor: true,
    thumbnailGenerator: true,
    scriptWriter: true,
    batchUpload: true,
    templateLibrary: true,
    aiContentSuggestions: true,
    multiPlatformPublish: true,
    scheduledPosting: true,
    contentCalendar: true,
    hashtagOptimizer: true,
  },
};

export function getContentFeatures(tier: PlanTier): ContentCreationFeatures {
  return PHASE1_FEATURES[tier];
}
