import {
  Outlet,
  Asset,
  Campaign,
  Competition,
  Report,
} from "./FieldMarketOperations.schemas";

// Create outlet
export const createOutlet = (outlet: Outlet): void => {
  createOutlet(outlet);
};

// Create asset
export const createAsset = (asset: Asset): void => {
  createAsset(asset);
};

// Create campaign
export const createCampaign = (campaign: Campaign): void => {
  createCampaign(campaign);
};

// Create competition
export const createCompetition = (competition: Competition): void => {
  createCompetition(competition);
};

// Get all outlets
export const getOutlets = (): Outlet[] => {
  return getOutlets();
};

// Get all assets
export const getAssets = (): Asset[] => {
  return getAssets();
};

// Get all campaigns
export const getCampaigns = (): Campaign[] => {
  return getCampaigns();
};

// Get all competition
export const getCompetition = (): Competition[] => {
  return getCompetition();
};

// Find outlet by ID
export const findOutletById = (id: number): Outlet | undefined => {
  return findOutletById(id);
};

// Find asset by ID
export const findAssetById = (id: number): Asset | undefined => {
  return findAssetById(id);
};

// Find campaign by ID
export const findCampaignById = (id: number): Campaign | undefined => {
  return findCampaignById(id);
};

// Find competition by ID
export const findCompetitionById = (id: number): Competition | undefined => {
  return findCompetitionById(id);
};

// Create report
export const createReport = (report: Report): void => {
  const asset = findAssetById(report.assetId);
  if (!asset) {
    throw new Error(`Asset with ID ${report.assetId} not found`);
  }

  const outlet = findOutletById(report.outletId);
  if (!outlet) {
    throw new Error(`Outlet with ID ${report.outletId} not found`);
  }
};
