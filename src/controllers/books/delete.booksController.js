const { Books } = require("../../models");
// delete data books

const service = async (req, res) => {
  try {
    const book = await Books.destroy({
      where: { id: req.body.id },
    });
    return res.json({
      message: "Book deleted successfully",
      data: book,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { service };
