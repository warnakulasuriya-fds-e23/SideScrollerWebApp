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
const updateSaveStates = async (req, res) => {
  const UserId = req.userFromMiddleWare._id;
  try {
    if (!UserId) {
      throw Error("UserId was not recieved from property set by middle ware");
    }

    const options = { returnDocument: "after" };
    const updatedSaveStatesDoc = await SaveStates.findOneAndUpdate(
      { UserId },
      req.body,
      options
    );
    if (!updatedSaveStatesDoc) {
      throw Error(
        "Unable to update SaveStates! This user doesnt have an already created SaveStates document"
      );
    }
    res.status(200).json(updatedSaveStatesDoc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const getSaveStateA = async (req, res) => {
  const UserId = req.userFromMiddleWare._id;
  try {
    if (!UserId) {
      throw Error("UserId was not recieved from property set by middle ware");
    }
    const recievedSaveState = await SaveStates.findOne({ UserId });
    if (!recievedSaveState) {
      throw Error("Unable to get Save Stae A from database");
    }
    res.status(200).json(recievedSaveState.SaveSlot_A);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const getSaveStateB = async (req, res) => {
  const UserId = req.userFromMiddleWare._id;
  try {
    if (!UserId) {
      throw Error("UserId was not recieved from property set by middle ware");
    }
    const recievedSaveState = await SaveStates.findOne({ UserId });
    if (!recievedSaveState) {
      throw Error("Unable to get Save Stae B from database");
    }
    res.status(200).json(recievedSaveState.SaveSlot_B);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const getSaveStateC = async (req, res) => {
  const UserId = req.userFromMiddleWare._id;
  try {
    if (!UserId) {
      throw Error("UserId was not recieved from property set by middle ware");
    }
    const recievedSaveState = await SaveStates.findOne({ UserId });
    if (!recievedSaveState) {
      throw Error("Unable to get Save Stae C from database");
    }
    res.status(200).json(recievedSaveState.SaveSlot_C);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const deleteSaveStates = async (req, res) => {};

module.exports = {
  createSaveStates,
  updateSaveStates,
  deleteSaveStates,
  getSaveStateA,
  getSaveStateB,
  getSaveStateC,
};
