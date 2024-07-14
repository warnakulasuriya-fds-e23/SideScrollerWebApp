const { json } = require("express");
const SaveStates = require("../models/SaveStatesModel");

const createSaveStates = async (req, res) => {
  const UserId = req.userFromMiddleWare._id;
  const { SaveSlot_A, SaveSlot_B, SaveSlot_C } = req.body;

  try {
    if (!UserId || !SaveSlot_A || !SaveSlot_B || !SaveSlot_C) {
      throw Error(
        `following were null: ${!UserId ? "UserId" : ""} ${
          !SaveSlot_A ? "SaveSlot_A" : ""
        } ${!SaveSlot_C ? "SaveSlot_C" : ""}`
      );
    }
    const existing = await SaveStates.findOne({ UserId });
    if (existing) {
      throw Error(
        "A SaveStates document has already been created for this user"
      );
    }
    const createdSaveState = await SaveStates.create({
      UserId,
      SaveSlot_A,
      SaveSlot_B,
      SaveSlot_C,
    });
    res.status(200).json(createdSaveState);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const updateSaveStates = async (req, res) => {};
const deleteSaveStates = async (req, res) => {};

module.exports = { createSaveStates, updateSaveStates, deleteSaveStates };
