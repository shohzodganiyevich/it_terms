const { sendErrorResponse } = require("../helpers/send.error.response");
const Author = require("./../models/author");
const bcrypt = require("bcrypt");

const getAllAuthors = async (req, res) => {
  try {
    const allAuthors = await Author.findAll();
    res.status(200).json({ message: "All authors", data: allAuthors });
  } catch (error) {
    console.log(error);
    sendErrorResponse(error, res, 500);
  }
};

const addAuthor = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      nick_name,
      email,
      phone,
      password,
      confirm_password,
      info,
      position,
      photo,
      is_expert,
    } = req.body;
    const isHasAuthor = await Author.findOne({ where: { email } });
    if (isHasAuthor) {
      return sendErrorResponse(
        { message: "Bunday foydalanuvchi mavjud" },
        res,
        403
      );
    }
    if (password != confirm_password) {
      return sendErrorResponse({ message: "Parollar mos emas" }, res, 400);
    }
    const hashed_password = await bcrypt.hash(password, 8);
    const newAuthor = await Author.create({
      first_name,
      last_name,
      nick_name,
      email,
      phone,
      password:hashed_password,
      info,
      position,
      photo,
      is_expert,
    });
  } catch (error) {
    sendErrorResponse(error, res, 500);
  }
};

module.exports = { getAllAuthors };
