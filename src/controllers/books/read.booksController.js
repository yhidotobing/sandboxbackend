const { Books } = require("../../models");
// read data books
const service = async (req, res) => {
  try {
    const book = await Books.findAll();
    return res.json({
      message: "Book read successfully",
      data: book,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { service };
