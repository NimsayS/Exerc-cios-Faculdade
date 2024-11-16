class AnimeController {
    constructor(animeService) {
      this.animeService = animeService;
    }
  
    getAllAnimes(req, res) {
      try {
        const animes = this.animeService.getAllAnimes();
        res.json(animes);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    getAnimeById(req, res) {
      try {
        const anime = this.animeService.getAnimeById(req.params.id);
        res.json(anime);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    }
  
    createAnime(req, res) {
      try {
        const anime = this.animeService.createAnime(req.body);
        res.status(201).json(anime);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    updateAnime(req, res) {
      try {
        const anime = this.animeService.updateAnime(req.params.id, req.body);
        res.json(anime);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    deleteAnime(req, res) {
      try {
        this.animeService.deleteAnime(req.params.id);
        res.status(204).send();
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    }
  }
  
  module.exports = AnimeController;