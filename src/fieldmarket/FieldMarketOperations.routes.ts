import express from "express";
import {
  createAsset,
  createCampaign,
  createCompetition,
  createOutlet,
  findAssetById,
  findCampaignById,
  findCompetitionById,
  findOutletById,
  getAssets,
  getCampaigns,
  getCompetition,
  getOutlets,
} from "./FieldMarketOperations.controllers";
import {
  Asset,
  Campaign,
  Competition,
  Outlet,
} from "./FieldMarketOperations.schemas";

const router = express.Router();

// Create outlet
router.post("/outlets", (req, res) => {
  const outlet = req.body as Outlet;
  createOutlet(outlet);
  res.sendStatus(201);
});

// Create asset
router.post("/assets", (req, res) => {
  const asset = req.body as Asset;
  createAsset(asset);
  res.sendStatus(201);
});

// Create campaign
router.post("/campaigns", (req, res) => {
  const campaign = req.body as Campaign;
  createCampaign(campaign);
  res.sendStatus(201);
});

// Create competition
router.post("/competitions", (req, res) => {
  const competition = req.body as Competition;
  createCompetition(competition);
  res.sendStatus(201);
});

// Get all outlets
router.get("/outlets", (req, res) => {
  res.send(getOutlets());
});

// Get all assets
router.get("/assets", (req, res) => {
  res.send(getAssets());
});

// Get all campaigns
router.get("/campaigns", (req, res) => {
  res.send(getCampaigns());
});

// Get all competition
router.get("/competitions", (req, res) => {
  res.send(getCompetition());
});

// Find outlet by ID
router.get("/outlets/:id", (req, res) => {
  const outlet = findOutletById(parseInt(req.params.id));
  if (!outlet) {
    res.sendStatus(404);
    return;
  }
  res.send(outlet);
});

// Find asset by ID
router.get("/assets/:id", (req, res) => {
  const asset = findAssetById(parseInt(req.params.id));
  if (!asset) {
    res.sendStatus(404);
    return;
  }
  res.send(asset);
});

// Find campaign by ID
router.get("/campaigns/:id", (req, res) => {
  const campaign = findCampaignById(parseInt(req.params.id));
  if (!campaign) {
    res.sendStatus(404);
    return;
  }
  res.send(campaign);
});

// Find competition by ID
router.get("/competitions/:id", (req, res) => {
  const competition = findCompetitionById(parseInt(req.params.id));
  if (!competition) {
    res.sendStatus(404);
    return;
  }
  res.send(competition);
});

export default router;
