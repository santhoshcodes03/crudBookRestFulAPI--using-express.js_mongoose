const bookStore = require("../model/bookModel");

exports.getAllBooks = async (req, res) => {
  const allBooks = await bookStore.find();
  return res.json(allBooks);
};

exports.getBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const booksById = await bookStore.findById(id);
    return res.status(200).json(booksById);
  } catch (e) {
    return res.status(500).json({ error: "ID NOT FOUND", e: e });
  }
};

exports.postBooks = async (req, res) => {
  try {
    const postData = req.body;
    const postToDB = new bookStore(postData);
    const postedData = await postToDB.save();
    res.status(200).json(postedData);
  } catch (e) {
    return res.status(500).json({ error: "error occured while posting data" });
  }
};

exports.postBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const postData = req.body;
    const updateDataToDB = await bookStore.findByIdAndUpdate(id, postData, {
      new: true,
    });
    if (!updateDataToDB) {
      return res
        .status(404)
        .json({ error: "data not found for this id to be updated" });
    }
    res.status(200).json(updateDataToDB);
  } catch (e) {
    return res.status(500).json({ error: "error occured while updating data" });
  }
};

exports.deleteBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteDataInDB = await bookStore.findByIdAndDelete(id);
    if (!deleteDataInDB) {
      return res.status(404).json({ error: "NO DATA AVAILABLE TO DELETE" });
    }
    res.status(200).json(deleteDataInDB);
  } catch (e) {
    return res.status(500).json({ error: "error occured while deleting data" });
  }
};
