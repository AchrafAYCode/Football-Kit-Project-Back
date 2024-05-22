var express = require("express");
var router = express.Router();
// Créer une instance de categorie.
const Categorie = require("../models/categorie");

const auth = require( "../middleware/auth.js");

// afficher la liste des categories.
router.get("/", async (req, res) => {
  try {
    const categories = await Categorie.find().exec();
    res.status(200).json(categories);

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// créer un nouvelle catégorie
router.post("/" , async (req, res) => {
  const { nomcategorie, imagecategorie } = req.body;
  const newCategorie = new Categorie({
    nomcategorie: nomcategorie,
    imagecategorie: imagecategorie,
  });
  try {
    await newCategorie.save();
    res.status(200).json(newCategorie);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// chercher une catégorie
router.get("/:categorieId" ,auth, async (req, res) => {});


// modifier une catégorie

router.put('/:categorieId', async (req, res) => {
  try {
      const updatedCategorie = await Categorie.findByIdAndUpdate(
          req.params.categorieId,
          { $set: req.body },
          { new: true }
      );
      res.status(200).json(updatedCategorie);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});


router.delete('/:categorieId', async (req, res) => {
  const id = req.params.categorieId;
  try {
    await Categorie.findByIdAndDelete(id);
    res.json({ message: "Categorie deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error deleting categorie", error });
  }
});

module.exports = router;
