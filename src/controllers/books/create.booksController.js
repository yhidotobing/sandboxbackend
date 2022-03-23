const { Books } = require("../../models");
// create data books
const service = async (req, res) => {
  try {
    const payload = req.body;
    const book = await Books.create(payload);
    return res.json({
      message: "Book created successfully",
      data: book,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { service };
