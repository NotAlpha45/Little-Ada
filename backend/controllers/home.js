import express from "express";

const router = express();

export const getHome = async (req, res) => {
  try {
    return Homepage;
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
