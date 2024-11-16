const Anime = require("../models/Anime");

class AnimeService {
  constructor(animeRepository) {
    this.animeRepository = animeRepository;
  }

  getAllAnimes() {
    return this.animeRepository.findAll();
  }

  getAnimeById(id) {
    const anime = this.animeRepository.findById(id);
    if (!anime) throw new Error("Anime não encontrado");
    return anime;
  }

  createAnime(data) {
    const { name, genre, studio } = data;
    if (!name || !genre || !studio) throw new Error("Todos os campos são obrigatórios");
    const anime = new Anime(name, genre, studio);
    return this.animeRepository.save(anime);
  }

  updateAnime(id, data) {
    const { name, genre, studio } = data;
    if (!name || !genre || !studio) throw new Error("Todos os campos são obrigatórios");
    const updatedAnime = { name, genre, studio };
    const anime = this.animeRepository.update(id, updatedAnime);
    if (!anime) throw new Error("Anime não encontrado");
    return anime;
  }

  deleteAnime(id) {
    const anime = this.animeRepository.delete(id);
    if (!anime) throw new Error("Anime não encontrado");
    return anime;
  }
}

module.exports = AnimeService;