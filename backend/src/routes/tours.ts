import express from "express";
import {
  getAllTours,
  createTour,
  updateTour,
  deleteTour,
} from "../controllers/tourController";

export const tourRoutes = express.Router();

// GET all tours
tourRoutes.get("/", getAllTours);

// POST a new tour
tourRoutes.post("/", createTour);

// PUT (update) a tour
tourRoutes.put("/:id", updateTour);

// DELETE a tour
tourRoutes.delete("/:id", deleteTour);
