const express = require("express");
const AnimeRepository = require("../repositories/AnimeRepository");
const AnimeService = require("../services/AnimeService");
const AnimeController = require("../controllers/AnimeController");

const router = express.Router();
const animeRepository = new AnimeRepository();
const animeService = new AnimeService(animeRepository);
const animeController = new AnimeController(animeService);

router.get("/", (req, res) => animeController.getAllAnimes(req, res));
router.get("/:id", (req, res) => animeController.getAnimeById(req, res));
router.post("/", (req, res) => animeController.createAnime(req, res));
router.put("/:id", (req, res) => animeController.updateAnime(req, res));
router.delete("/:id", (req, res) => animeController.deleteAnime(req, res));

module.exports = router;