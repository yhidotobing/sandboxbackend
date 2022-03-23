const { Books } = require("../../models");
// update data books
const service = async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const book = await Books.update(payload, {
      where: { id },
    });
    return res.json({
      message: "Book updated successfully",
      data: book,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { service };
