const Background = require("../models/BackgroundModel");

const addBackground = async (req, res) => {
  const {
    BackgroundName,
    Layer1,
    Layer2,
    Layer3,
    Layer4,
    Layer5,
    PreviewImage,
  } = req.body;
  try {
    if (
      !BackgroundName ||
      !Layer1 ||
      !Layer2 ||
      !Layer3 ||
      !Layer4 ||
      !Layer5 ||
      !PreviewImage
    ) {
      throw Error(
        `Incomplete Background object was recived, following are missing : ${
          !BackgroundName ? "BackgroundName " : ""
        }${!Layer1 ? "Layer1 " : ""}${!Layer2 ? "Layer2 " : ""}${
          !Layer3 ? "Layer3 " : ""
        }${!Layer4 ? "Layer4 " : ""}${!Layer5 ? "Layer5 " : ""}${
          !PreviewImage ? "PreviewImage" : ""
        }`
      );
    }
    const alreadyexists = await Background.findOne({ BackgroundName });
    if (alreadyexists)
      throw Error("There is already a background under this name");
    const createdBackgroundDoc = await Background.create({
      BackgroundName,
      Layer1,
      Layer2,
      Layer3,
      Layer4,
      Layer5,
      PreviewImage,
    });
    res.status(200).json(createdBackgroundDoc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateBackground = async (req, res) => {
  const { BackgroundName } = req.body;
  try {
    if (!BackgroundName) throw Error("Please Specify the background Name");

    const options = { returnDocument: "after" };
    const updatedBackground_after = await Background.findOneAndUpdate(
      { BackgroundName },
      req.body,
      options
    );
    if (!updatedBackground_after)
      throw Error(
        `Background object under the name ${BackgroundName} was not found `
      );

    res.status(200).json(updatedBackground_after);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteBackground = async (req, res) => {
  const { BackgroundName } = req.body;
  try {
    if (!BackgroundName)
      throw Error("Please Specify BackgroundName of background to be deleted");

    const deletedBackground = await Background.findOneAndDelete({
      BackgroundName,
    });
    if (!deletedBackground)
      throw Error(`There was no background under the name ${BackgroundName}`);

    res.status(200).json({
      Message: `Successfully deleted Background ${BackgroundName}`,
      deletedBackground,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const returnBackground = async (req, res) => {
  const { BackgroundName } = req.body;
  try {
    if (!BackgroundName) throw Error("Please enter a Background Name");
    const recievedBackground = await Background.findOne({ BackgroundName });
    if (!recievedBackground) throw Error("Unable to find background");

    res.status(200).json(recievedBackground);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const checkBackgroundAvailability = async (req, res) => {
  const { BackgroundName } = req.body;
  try {
    if (!BackgroundName) throw Error("Please enter a Background Name");
    const discoveredBackground = await Background.findOne({ BackgroundName });

    if (discoveredBackground) {
      res.status(200).json({ Availability: true });
    } else {
      res.status(200).json({ Availability: false });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  addBackground,
  updateBackground,
  deleteBackground,
  returnBackground,
  checkBackgroundAvailability,
};
