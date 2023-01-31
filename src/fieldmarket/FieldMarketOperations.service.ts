import {
  Asset,
  Campaign,
  Competition,
  Outlet,
} from "./FieldMarketOperations.schemas";

const outlets: Outlet[] = [];
const assets: Asset[] = [];
const campaigns: Campaign[] = [];
const competitions: Competition[] = [];

export const createOutlet = (outlet: Outlet) => {
  outlets.push(outlet);
};

export const createAsset = (asset: Asset) => {
  assets.push(asset);
};

export const createCampaign = (campaign: Campaign) => {
  campaigns.push(campaign);
};

export const createCompetition = (competition: Competition) => {
  competitions.push(competition);
};

export const getOutlets = () => {
  return outlets;
};

export const getAssets = () => {
  return assets;
};

export const getCampaigns = () => {
  return campaigns;
};

export const getCompetition = () => {
  return competitions;
};

export const findOutletById = (id: number) => {
  return outlets.find((outlet) => outlet.id === id);
};

export const findAssetById = (id: number) => {
  return assets.find((asset) => asset.id === id);
};

export const findCampaignById = (id: number) => {
  return campaigns.find((campaign) => campaign.id === id);
};

export const findCompetitionById = (id: number) => {
  return competitions.find((competition) => competition.id === id);
};
