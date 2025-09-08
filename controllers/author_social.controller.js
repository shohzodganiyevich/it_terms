const { sendErrorResponse } = require("../helpers/send.error.response");
const Author_social = require("./../models/author_social");
const bcrypt = require("bcrypt");

const getAllAuthor_socials = async (req, res) => {
  try {
    const allAuthor_socials = await Author_social.findAll();
    res
      .status(200)
      .json({ message: "All author_socials", data: allAuthor_socials });
  } catch (error) {
    console.log(error);
    sendErrorResponse(error, res, 500);
  }
};

const addAuthor_social = async (req, res) => {
  try {
    const { social_link } = req.body;
    const isHasAuthor_social = await Author_social.findOne({ where: { social_link } });
    if (isHasAuthor_social) {
      return sendErrorResponse(
        { message: "Bunday ijtimoiy tarmoq mavjud" },
        res,
        403
      );
    }
    const newAuthor_social = await Author_social.create({
      social_link,
    });
    res
      .status(201)
      .json({ message: "New Author_social added", data: newAuthor_social });
  } catch (error) {
    sendErrorResponse(error, res, 500);
  }
};

const updateAuthor_social = async (req, res) => {
  try {
    const { id } = req.params;
    const { social_link } = req.body;
    const editAuthor_social = await Author_social.update(
      {
        social_link
      },
      { where: { id }, returning: true }
    );
    res
      .status(201)
      .json({ message: "A Author_social edited", data: editAuthor_social[1][0] });
  } catch (error) {
    sendErrorResponse(error, res, 500);
  }
};

const deleteAuthor_social = async (req, res) => {
  try {
    const { id } = req.params;
    await Author_social.destroy({ where: { id } });
    res.status(201).json({ message: "A Author_social deleted", data: id });
  } catch (error) {
    sendErrorResponse(error, res, 500);
  }
};

const getOneAuthor_socialByID = async (req, res) => {
  try {
    const { id } = req.params;
    const oneAuthor_social = await Author_social.findByPk(id);
    res.status(201).json({ message: "A social", data: oneAuthor_social });
  } catch (error) {
    sendErrorResponse(error, res, 500);
  }
};

module.exports = {
  getAllAuthor_socials,
  addAuthor_social,
  updateAuthor_social,
  deleteAuthor_social,
  getOneAuthor_socialByID,
};
