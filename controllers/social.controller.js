const { sendErrorResponse } = require("../helpers/send.error.response");
const Social = require("./../models/social");
const bcrypt = require("bcrypt");

const getAllSocials = async (req, res) => {
  try {
    const allSocials = await Social.findAll();
    res.status(200).json({ message: "All socials", data: allSocials });
  } catch (error) {
    console.log(error);
    sendErrorResponse(error, res, 500);
  }
};

const addSocial = async (req, res) => {
  try {
    const { name, icon_file } = req.body;
    const isHasSocial = await Social.findOne({ where: { name } });
    if (isHasSocial) {
      return sendErrorResponse(
        { message: "Bunday ijtimoiy tarmoq mavjud" },
        res,
        403
      );
    }
    const newSocial = await Social.create({
      name,
      icon_file,
    });
    res.status(201).json({ message: "New Social added", data: newSocial });
  } catch (error) {
    sendErrorResponse(error, res, 500);
  }
};

const updateSocial = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, icon_file } = req.body;
    const editSocial = await Social.update(
      {
        name,
        icon_file,
      },
      { where: { id }, returning: true }
    );
    res
      .status(201)
      .json({ message: "A social edited", data: editSocial[1][0] });
  } catch (error) {
    sendErrorResponse(error, res, 500);
  }
};

const deleteSocial = async (req, res) => {
  try {
    const { id } = req.params;
    await Social.destroy({ where: { id } });
    res.status(201).json({ message: "A social deleted", data: id });
  } catch (error) {
    sendErrorResponse(error, res, 500);
  }
};

const getOneSocialByID = async (req, res) => {
  try {
    const { id } = req.params;
    const oneSocial = await Social.findByPk(id);
    res.status(201).json({ message: "A social", data: oneSocial });
  } catch (error) {
    sendErrorResponse(error, res, 500);
  }
};

module.exports = {
  getAllSocials,
  addSocial,
  updateSocial,
  deleteSocial,
  getOneSocialByID,
};
